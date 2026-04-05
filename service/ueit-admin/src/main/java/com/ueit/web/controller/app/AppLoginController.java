package com.ueit.web.controller.app;

import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.ueit.common.constant.UserConstants;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.utils.DateUtils;
import com.ueit.common.utils.SecurityUtils;
import com.ueit.common.utils.StringUtils;
import com.ueit.framework.web.service.SysLoginService;
import com.ueit.framework.web.service.SysPermissionService;
import com.ueit.framework.web.service.TokenService;
import com.ueit.running.domain.UserWechat;
import com.ueit.running.service.IUserWechatService;
import com.ueit.system.domain.dto.wx.GetUserPhoneNumberParams;
import com.ueit.system.service.ISysConfigService;
import com.ueit.system.service.ISysUserService;
import com.ueit.system.service.WxApiService;
import com.ueit.web.controller.vo.UserBindingWxVo;
import lombok.AllArgsConstructor;
import org.apache.commons.math3.ml.neuralnet.Network;
import org.springframework.web.bind.annotation.*;
import sun.security.x509.SerialNumber;

import java.util.HashMap;
import java.util.Map;

/**
 * app登录接口
 *
 * @author douwq
 * @date 2022-07-11
 */
@RestController
@RequestMapping("/app")
@AllArgsConstructor
public class AppLoginController {
    private final SysPermissionService permissionService;
    private final ISysUserService userService;
    private final ISysConfigService configService;
    private final SysLoginService loginService;
//    private final IUserWechatService userWechatService;
    private final TokenService tokenService;
    private final WxApiService wxApiService;
    private final IUserWechatService userWechatService;

    /**
     * 获取openId并登录
     * @param userBindingWxVo 包含微信登录code和用户UserId
     * @return
     */
    @PostMapping("/bindingWx")
    public AjaxResult bindingWx(@RequestBody UserBindingWxVo userBindingWxVo){
//        SysUser user = SecurityUtils.getLoginUser().getUser();
        if(userBindingWxVo == null || StringUtils.isEmpty(userBindingWxVo.getCode()) || userBindingWxVo.getUserId() == null) {
            return AjaxResult.error("非法操作");
        }
        String requestUrl = this.getWebAccess(userBindingWxVo.getCode());//通过自定义工具类组合出小程序需要的登录凭证 code
        JSONObject sessionData = JSONUtil.parseObj(HttpUtil.get(requestUrl));
        String openid = sessionData.getStr("openid");
        String unionid = sessionData.getStr("unionid");
        if (null == sessionData || StringUtils.isEmpty(openid)) {
            return AjaxResult.error("获取信息失败");
        }

        //更新微信用户信息
        UserWechat userWechat = new UserWechat();
        userWechat.setUserId(userBindingWxVo.getUserId());
        userWechat.setWxOpenid(openid);
        userWechat.setUnionid(unionid);
        userWechatService.bindingWx(userWechat);

        return AjaxResult.success();
    }

    //替换字符串
    public String getWebAccess(String CODE) {

        return String.format("https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code",
                configService.selectConfigByKey("ueit.app.appid"),
                configService.selectConfigByKey("ueit.app.secret"),
                CODE);
    }

    /**
     * 通过code换取手机号登录
     * @param getUserPhoneNumberParams
     * @return
     */
    @PostMapping("/login")
    public AjaxResult getUserPhone(@RequestBody GetUserPhoneNumberParams getUserPhoneNumberParams){
        String token = "";
        SysUser user = new SysUser();

        String phone = wxApiService.getUserPhone(getUserPhoneNumberParams);
        if(StringUtils.isNotBlank(phone)){
            user = userService.selectUserByPhone(phone);
//            user = userService.selectUserByUserName(phone);
            if(user == null){
                //注册用户
                user = userService.insertAppUser(phone);
//                return AjaxResult.error("该手机号未注册，请联系管理员");
            }else if(!"01".equals(user.getUserType())){
                return AjaxResult.error("禁止登录，请联系管理员");
            }

            token = loginService.loginByPhone(phone,configService.selectConfigByKey("sys.user.initAppPassword"));

            UserWechat userWechat = userWechatService.selectUserWechatByUserId(user.getUserId());
            if(!(userWechat != null && userWechat.getSex() != null && userWechat.getWeight() != null && userWechat.getHeight() != null)){
                userWechat = null;
            }

            Map<String,Object> map = new HashMap<>();
            map.put("access_token",token);
            map.put("userInfo",user);
            map.put("userWechat",userWechat == null);// 未绑定微信用户的返回true
            return AjaxResult.success(map);
        }
        return AjaxResult.error("登录失败请稍后重试");
    }

    /**
     * 通过手机号登录
     * @param phone
     * @return
     */
    @PostMapping("/loginPhone")
    public AjaxResult getUserPhone(@RequestBody String phone){
        if(StringUtils.isNotBlank(phone)){
            SysUser user = userService.selectUserByPhone(phone);
            if(user == null){
                return AjaxResult.error("该手机号未注册，请联系管理员");
            }
            if(!"01".equals(user.getUserType())){
                return AjaxResult.error("用户不存在，请联系管理员");
            }

            String token = loginService.loginByPhone(phone,configService.selectConfigByKey("sys.user.initAppPassword"));

            UserWechat userWechat = userWechatService.selectUserWechatByUserId(user.getUserId());

            Map<String,Object> map = new HashMap<>();
            map.put("access_token",token);
            map.put("userInfo",user);
            map.put("userWechat",userWechat == null);// 未绑定微信用户的返回true
            return AjaxResult.success(map);
        }
        return AjaxResult.error("登录失败,非法操作");
    }

    @PostMapping("/test")
    public AjaxResult test(@RequestBody GetUserPhoneNumberParams getUserPhoneNumberParams){
        Map<String,Object> map = new HashMap<>();
        map.put("success",true);
        System.out.println("请求时间:" + DateUtils.getTime());
        System.out.println("请求内容:" + getUserPhoneNumberParams.getCode());
        return AjaxResult.success(map);
    }

}

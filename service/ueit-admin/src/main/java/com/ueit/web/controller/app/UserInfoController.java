package com.ueit.web.controller.app;

import com.ueit.common.annotation.Log;
import com.ueit.common.config.RuoYiConfig;
import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.core.domain.entity.SysDept;
import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.core.domain.model.LoginUser;
import com.ueit.common.enums.BusinessType;
import com.ueit.common.utils.SecurityUtils;
import com.ueit.common.utils.StringUtils;
import com.ueit.common.utils.bean.BeanUtils;
import com.ueit.common.utils.file.FileUploadUtils;
import com.ueit.common.utils.file.FileUtils;
import com.ueit.framework.web.service.TokenService;
import com.ueit.running.domain.UserWechat;
import com.ueit.running.service.IUserWechatService;
import com.ueit.system.domain.ClassHour;
import com.ueit.system.service.IClassHourService;
import com.ueit.system.service.ISysDeptService;
import com.ueit.system.service.ISysUserService;
import com.ueit.web.controller.vo.AppUserInfo;
import com.ueit.web.controller.vo.UserInfoEditInfoDto;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/7/15 16:07
 */
@RestController
@RequestMapping("/userInfo" )
@AllArgsConstructor
public class UserInfoController extends BaseController {

    private final IUserWechatService userWechatService;
    private final ISysUserService sysUserService;
    private final TokenService tokenService;
    private final ISysDeptService sysDeptService;
    private final IClassHourService classHourService;

    /**
     * 根据用户id 更新用户基本信息
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/editInfo")
    public AjaxResult updateInfo(@Validated @RequestBody UserInfoEditInfoDto userInfoEditInfoDto) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        int updateInfoNum = userWechatService.updateInfo(userInfoEditInfoDto, user);
        int updateUserAppNum = sysUserService.updateUserApp(userInfoEditInfoDto.getNickName(), userInfoEditInfoDto.getStudentId(), user.getUserId(), userInfoEditInfoDto.getDeptId());

        // 更新缓存用户信息
        LoginUser loginUser = getLoginUser();
        SysUser cacheSysUser = loginUser.getUser();
        if(userInfoEditInfoDto.getNickName() != null){
            cacheSysUser.setNickName(userInfoEditInfoDto.getNickName());
        }
        if(userInfoEditInfoDto.getStudentId() != null){
            cacheSysUser.setStudentId(userInfoEditInfoDto.getStudentId());
        }
        if(userInfoEditInfoDto.getDeptId() != null){
            SysDept deptById = sysDeptService.selectDeptById(userInfoEditInfoDto.getDeptId());
            cacheSysUser.setDeptId(userInfoEditInfoDto.getDeptId());
            cacheSysUser.setDept(deptById);
        }

        tokenService.setLoginUser(loginUser);
        return toAjax(updateInfoNum != 0 && updateUserAppNum != 0);
    }

    /**
     * 获取用户基本信息
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping()
    public AjaxResult userInfo() {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        // 查询用户扩展信息
        UserWechat detail = userWechatService.selectUserWechatByUserId(user.getUserId());
        // 查询上级部门名称
        SysDept parentDept = sysDeptService.selectDeptById(user.getDept().getParentId());
        // 查询授课老师与课时信息
        ClassHour classHour = classHourService.selectClassHourByUserId();
        AppUserInfo appUserInfo = new AppUserInfo();
        BeanUtils.copyBeanProp(appUserInfo, detail);
        appUserInfo.setNickName(user.getNickName());
        appUserInfo.setAvatar(user.getAvatar());
        appUserInfo.setDeptName(StringUtils.isEmpty(parentDept.getDeptName()) ? user.getDept().getDeptName() : parentDept.getDeptName() + "-" + user.getDept().getDeptName());
        appUserInfo.setStudentId(user.getStudentId());
        if(classHour != null){
            appUserInfo.setClassName(classHour.getWeek() + "-" + classHour.getClassHour() + "-" + classHour.getUserNickName());
        }
        return AjaxResult.success(appUserInfo);
    }

    /**
     * 用户修改头像
     */
    @PostMapping("/uploadAvatar" )
    public AjaxResult uploadAvatar(MultipartFile file) throws Exception {
            LoginUser loginUser = getLoginUser();

            // 上传文件路径
            String filePath = RuoYiConfig.getUploadPath();
            // 上传并返回新文件名称
            String fileUrl = FileUploadUtils.upload(filePath, file);

            if (sysUserService.updateUserAvatar(loginUser.getUser().getUserName(), fileUrl)) {
                // 更新缓存用户头像
                loginUser.getUser().setAvatar(fileUrl);
                tokenService.setLoginUser(loginUser);
                return AjaxResult.success(fileUrl);
            }

            return AjaxResult.error("上传失败");
    }
}

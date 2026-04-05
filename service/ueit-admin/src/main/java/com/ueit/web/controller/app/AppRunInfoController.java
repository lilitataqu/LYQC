package com.ueit.web.controller.app;

import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.core.page.TableDataInfo;
import com.ueit.common.utils.SecurityUtils;
import com.ueit.common.utils.StringUtils;
import com.ueit.common.utils.bean.BeanUtils;
import com.ueit.running.domain.RunInfo;
import com.ueit.running.domain.RunInfoExtend;
import com.ueit.running.domain.UserWechat;
import com.ueit.running.domain.dto.UserWeekStatisticDto;
import com.ueit.running.domain.vo.UserWeekStatistic;
import com.ueit.running.service.IRunInfoExtendService;
import com.ueit.running.service.IRunInfoService;
import com.ueit.running.service.IUserWeekStatisticService;
import com.ueit.system.service.ISysConfigService;
import com.ueit.web.controller.vo.RunInfoVo;
import com.ueit.web.controller.vo.StatisticHomeVo;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import java.text.NumberFormat;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/7/15 18:02
 */
@RestController
@RequestMapping("/appRunInfo" )
@AllArgsConstructor
public class AppRunInfoController extends BaseController {
    private final IRunInfoService runInfoService;
    private final IRunInfoExtendService runInfoExtendService;
    private final IUserWeekStatisticService userWeekStatisticService;
    private final ISysConfigService configService;

    /**
     * 新增跑步数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/add")
    public AjaxResult add(@RequestBody RunInfo runInfo) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        runInfo.setUserId(user.getUserId());
        runInfoService.insertRunInfo(runInfo);
        return AjaxResult.success(runInfo.getId());
    }

    /**
     * 新增跑步数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/add/v2")
    public AjaxResult addV2(@RequestBody RunInfo runInfo) {
        runInfoService.addRunInfoV2(runInfo);
        return AjaxResult.success(runInfo.getId());
    }

    /**
     * 根据id 查询跑步数据详情
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/detail")
    public AjaxResult detail(@RequestBody Long id) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        RunInfo runInfo = runInfoService.selectRunInfoById(id);
        RunInfoVo runInfoVo = new RunInfoVo();
        BeanUtils.copyBeanProp(runInfoVo, runInfo);
        if(runInfo.getUserId().equals(user.getUserId())){
            runInfoVo.setKcal(runInfo.getKcal());
            runInfoVo.setDistance(runInfo.getDistance());
            runInfoVo.setKmSpeed(runInfo.getKmSpeed());
            runInfoVo.setPoints(runInfo.getPoints());
            runInfoVo.setAltitude(runInfo.getAltitude());
            return AjaxResult.success(runInfoVo);
        }
        return AjaxResult.error("非法操作");
    }

    /**
     * 根据id 删除跑步数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/delete")
    public AjaxResult delete(@RequestBody Long id) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        RunInfo runInfo = runInfoService.selectRunInfoById(id);
        if(runInfo.getUserId().equals(user.getUserId())){
            return toAjax(runInfoService.deleteRunInfoById(id));
        }
        return AjaxResult.error("非法操作");
    }

    /**
     * 获取跑步数据列表
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping("/list")
    public TableDataInfo list() {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        if(ObjectUtils.isEmpty(user)){
            return getDataTable(null);
        }
        RunInfo runInfo = new RunInfo();
        runInfo.setUserId(user.getUserId());

        startPage();
        List<RunInfo> list = runInfoService.selectRunInfoList(runInfo);
        return getDataTable(list);
    }

    /**
     * 统计用户本周卡路里与里程总数据
     * @return
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping("/statistic")
    public AjaxResult statisticHome(){
        SysUser user = SecurityUtils.getLoginUser().getUser();
        if (!ObjectUtils.isEmpty(user)) {
            StatisticHomeVo statisticHomeVo = new StatisticHomeVo();
            statisticHomeVo.setData(runInfoService.sumInfoByUser(user.getUserId()));
//            String distance = configService.selectConfigByKey("ueit.run.distance");
            String number = configService.selectConfigByKey("ueit.run.number");
            String minTime = configService.selectConfigByKey("ueit.run.mintime.show");
//            statisticHomeVo.setDistance(Integer.parseInt(distance));
            statisticHomeVo.setNumber(Integer.parseInt(number));
            statisticHomeVo.setMinTime(minTime);
            return AjaxResult.success(statisticHomeVo);
        }
        return AjaxResult.error("非法操作");
    }

    /**
     * 新增跑步扩展数据
     * @return
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/addExtend")
    public AjaxResult addExtend(@RequestBody RunInfoExtend runInfoExtend){
        runInfoExtendService.insertRunInfoExtend(runInfoExtend);
        return AjaxResult.success();
    }

    /**
     * 排行榜
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/rank")
    public AjaxResult rank() {
        Map res = new HashMap<>();
        UserWeekStatisticDto userWeekStatisticDto = new UserWeekStatisticDto();
        startPage();
        List<UserWeekStatistic> list = userWeekStatisticService.selectUserWeekStatisticList(userWeekStatisticDto);
        int weekDistanceSum = userWeekStatisticService.selectWeekDistanceSum();

        System.out.println(list);
        System.out.println(weekDistanceSum);

        res.put("list", list);
        res.put("sum", weekDistanceSum);
        return AjaxResult.success(res);
    }

}

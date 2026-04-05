package com.ueit.web.controller.app;

import com.ueit.common.constant.DictKeyConstants;
import com.ueit.common.constant.SystemConfigKeyConstants;
import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.core.domain.entity.SysDictData;
import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.core.page.TableDataInfo;
import com.ueit.common.utils.StringUtils;
import com.ueit.system.domain.ClassHour;
import com.ueit.system.domain.ClassHourUser;
import com.ueit.system.domain.dto.AppClassTracherListDto;
import com.ueit.system.service.IClassHourService;
import com.ueit.system.service.IClassHourUserService;
import com.ueit.system.service.ISysDictTypeService;
import com.ueit.system.service.ISysUserService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: douwq
 * @Description: App 课程相关接口
 * @Date:Create：in 2022/10/9 10:23
 */
@RestController
@RequestMapping("/appClass")
@AllArgsConstructor
public class AppClassController extends BaseController {
    private final ISysUserService sysUserService;
    private final ISysDictTypeService dictTypeService;
    private final IClassHourService classHourService;
    private final IClassHourUserService classHourUserService;

    /**
     * 根据星期与课程时间查询教师列表
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/teacherList")
    public AjaxResult teacherList(@RequestBody AppClassTracherListDto appClassTracherListDto) {
        if(StringUtils.isEmpty(appClassTracherListDto.getWeek()) || StringUtils.isEmpty(appClassTracherListDto.getClassHour())){
            return AjaxResult.error("非法操作");
        }
        List<ClassHour> list = classHourService.selectTeacherByWeekAndClassHour(appClassTracherListDto);
        return AjaxResult.success(list);
    }

    /**
     * 查询星期数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping(value = "/weekInfo" )
    public AjaxResult weekInfo() {
        List<SysDictData> data = dictTypeService.selectDictDataByType(DictKeyConstants.WEEK_INFO);
        if (StringUtils.isNull(data)) {
            data = new ArrayList<SysDictData>();
        }
        return AjaxResult.success(data);
    }

    /**
     * 查询课程时间数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping(value = "/classNumber" )
    public AjaxResult classNumber() {
        List<SysDictData> data = dictTypeService.selectDictDataByType(DictKeyConstants.CLASS_NUMBER);
        if (StringUtils.isNull(data)) {
            data = new ArrayList<SysDictData>();
        }
        return AjaxResult.success(data);
    }

    /**
     * 查询课程时间数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping(value = "/save" )
    public AjaxResult save(@RequestBody ClassHourUser classHourUser) {
        if(classHourUser.getClassId() == null){
            return AjaxResult.error("非法操作");
        }
        return AjaxResult.success(classHourUserService.saveInfo(classHourUser));
    }
}

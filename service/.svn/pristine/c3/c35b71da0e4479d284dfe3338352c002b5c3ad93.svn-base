package com.ueit.web.controller.system;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ueit.common.annotation.Log;
import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.enums.BusinessType;
import com.ueit.system.domain.ClassHourUser;
import com.ueit.system.service.IClassHourUserService;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.common.core.page.TableDataInfo;

/**
 * 学生与课程关联Controller
 *
 * @author douwq
 * @date 2022-10-10
 */
@RestController
@RequestMapping("/system/classUser" )
public class ClassHourUserController extends BaseController {
    @Autowired
    private IClassHourUserService classHourUserService;

/**
 * 查询学生与课程关联列表
 */
@PreAuthorize("@ss.hasPermi('system:class:list')" )
@GetMapping("/list" )
    public TableDataInfo list(ClassHourUser classHourUser) {
        startPage();
        List<ClassHourUser> list = classHourUserService.selectClassHourUserList(classHourUser);
        return getDataTable(list);
    }

    /**
     * 导出学生与课程关联列表
     */
    @PreAuthorize("@ss.hasPermi('system:class:export')" )
    @Log(title = "学生与课程关联" , businessType = BusinessType.EXPORT)
    @PostMapping("/export" )
    public void export(HttpServletResponse response, ClassHourUser classHourUser) {
        List<ClassHourUser> list = classHourUserService.selectClassHourUserList(classHourUser);
        ExcelUtil<ClassHourUser> util = new ExcelUtil<ClassHourUser>(ClassHourUser. class);
        util.exportExcel(response, list, "学生与课程关联数据" );
    }

    /**
     * 获取学生与课程关联详细信息
     */
    @PreAuthorize("@ss.hasPermi('system:class:query')" )
    @GetMapping(value = "/{userId}" )
    public AjaxResult getInfo(@PathVariable("userId" ) Long userId) {
        return AjaxResult.success(classHourUserService.selectClassHourUserByUserId(userId));
    }

    /**
     * 新增学生与课程关联
     */
    @PreAuthorize("@ss.hasPermi('system:class:add')" )
    @Log(title = "学生与课程关联" , businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody ClassHourUser classHourUser) {
        return toAjax(classHourUserService.insertClassHourUser(classHourUser));
    }

    /**
     * 修改学生与课程关联
     */
    @PreAuthorize("@ss.hasPermi('system:class:edit')" )
    @Log(title = "学生与课程关联" , businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody ClassHourUser classHourUser) {
        return toAjax(classHourUserService.updateClassHourUser(classHourUser));
    }

    /**
     * 删除学生与课程关联
     */
    @PreAuthorize("@ss.hasPermi('system:class:remove')" )
    @Log(title = "学生与课程关联" , businessType = BusinessType.DELETE)
    @DeleteMapping("/{userIds}" )
    public AjaxResult remove(@PathVariable Long[]userIds) {
        return toAjax(classHourUserService.deleteClassHourUserByUserIds(userIds));
    }
}

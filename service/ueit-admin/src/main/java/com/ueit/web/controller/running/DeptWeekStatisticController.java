package com.ueit.web.controller.running;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import com.ueit.common.core.domain.entity.SysDept;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.running.domain.dto.DeptWeekStatisticDto;
import com.ueit.running.domain.vo.DeptWeekStatistic;
import com.ueit.system.service.ISysDeptService;
import lombok.AllArgsConstructor;
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
import com.ueit.running.service.IDeptWeekStatisticService;
import com.ueit.common.core.page.TableDataInfo;

/**
 * 统计本周各部门运动量Controller
 *
 * @author douwq
 * @date 2022-08-02
 */
@RestController
@RequestMapping("/running/deptWeekStatistic" )
@AllArgsConstructor
public class DeptWeekStatisticController extends BaseController {

    private final IDeptWeekStatisticService deptWeekStatisticService;

    private final ISysDeptService sysDeptService;

    /**
     * 查询统计本周各部门运动量列表
     */
    @PreAuthorize("@ss.hasPermi('running:deptWeekStatistic:list')" )
    @GetMapping("/list" )
    public TableDataInfo list(DeptWeekStatisticDto deptWeekStatisticDto) {
        startPage();
        List<DeptWeekStatistic> list = deptWeekStatisticService.selectDeptWeekStatisticList(deptWeekStatisticDto);
        return getDataTable(list);
    }

    /**
     * 导出统计本周各部门运动量列表
     */
    @PreAuthorize("@ss.hasPermi('running:deptWeekStatistic:export')" )
    @Log(title = "统计本周各部门运动量" , businessType = BusinessType.EXPORT)
    @PostMapping("/export" )
    public void export(HttpServletResponse response, DeptWeekStatisticDto deptWeekStatisticDto) {
        List<DeptWeekStatistic> list = deptWeekStatisticService.selectDeptWeekStatisticList(deptWeekStatisticDto);
        ExcelUtil<DeptWeekStatistic> util = new ExcelUtil<DeptWeekStatistic>(DeptWeekStatistic. class);
        util.exportExcel(response, list, "统计本周各部门运动量数据" );
    }

    /**
     * 部门选择列表
     */
    @PreAuthorize("@ss.hasPermi('running:userWeekStatistic:list')" )
    @GetMapping("/deptList" )
    public AjaxResult userList() {
        return AjaxResult.success(sysDeptService.selectChooseDeptList(new SysDept()));
    }
}

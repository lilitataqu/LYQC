package com.ueit.web.controller.running;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import com.ueit.running.domain.dto.UserWeekStatisticDto;
import com.ueit.system.service.ISysUserService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ueit.common.annotation.Log;
import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.enums.BusinessType;
import com.ueit.running.domain.vo.UserWeekStatistic;
import com.ueit.running.service.IUserWeekStatisticService;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.common.core.page.TableDataInfo;

/**
 * 本周各学员运动量Controller
 *
 * @author douwq
 * @date 2022-08-01
 */
@RestController
@RequestMapping("/running/userWeekStatistic" )
@AllArgsConstructor
public class UserWeekStatisticController extends BaseController {
    private final IUserWeekStatisticService userWeekStatisticService;
    private final ISysUserService sysUserService;



    /**
     * 查询本周各学员运动量列表
     */
    @PreAuthorize("@ss.hasPermi('running:userWeekStatistic:list')" )
    @GetMapping("/list" )
    public TableDataInfo list(UserWeekStatisticDto userWeekStatisticDto) {
        startPage();
        List<UserWeekStatistic> list = userWeekStatisticService.selectUserWeekStatisticList(userWeekStatisticDto);
        return getDataTable(list);
    }

    /**
     * 导出本周各学员运动量列表
     */
    @PreAuthorize("@ss.hasPermi('running:userWeekStatistic:export')" )
    @Log(title = "本周各学员运动量" , businessType = BusinessType.EXPORT)
    @PostMapping("/export" )
    public void export(HttpServletResponse response, UserWeekStatisticDto userWeekStatisticDto) {
        List<UserWeekStatistic> list = userWeekStatisticService.selectUserWeekStatisticList(userWeekStatisticDto);
        ExcelUtil<UserWeekStatistic> util = new ExcelUtil<UserWeekStatistic>(UserWeekStatistic. class);
        util.exportExcel(response, list, "本周各学员运动量数据" );
    }

    /**
     * 用户选择列表
     */
    @PreAuthorize("@ss.hasPermi('running:userWeekStatistic:list')" )
    @GetMapping("/userList" )
    public AjaxResult userList() {
        return AjaxResult.success(sysUserService.selectWxUserList());
    }

}

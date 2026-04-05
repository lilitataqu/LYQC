package com.ueit.web.controller.running;

import com.ueit.common.annotation.Log;
import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.core.domain.entity.SysDept;
import com.ueit.common.core.page.TableDataInfo;
import com.ueit.common.enums.BusinessType;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.running.domain.dto.DeptWeekStatisticDto;
import com.ueit.running.domain.vo.DeptWeekStatistic;
import com.ueit.running.service.IDeptWeekStatisticService;
import com.ueit.running.service.IHomeStatisticService;
import com.ueit.system.service.ISysDeptService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 首页统计Controller
 *
 * @author douwq
 * @date 2022-08-03
 */
@RestController
@RequestMapping("/running/homeStatistic" )
@AllArgsConstructor
public class HomeStatisticController extends BaseController {


    private final IHomeStatisticService homeStatisticService;

    /**
     * 查询首页总和数据
     * @return
     */
    @GetMapping("/sum" )
    public AjaxResult selectHomePageSumInfo() {
        return AjaxResult.success(homeStatisticService.selectHomePageSumInfo());
    }

    /**
     * 查询首页数据列表
     * @return
     */
    @GetMapping("/list" )
    public AjaxResult selectHomePageList() {
        return AjaxResult.success(homeStatisticService.selectHomePageInfoList());
    }


}

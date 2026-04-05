package com.ueit.web.controller.running;

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
import com.ueit.running.domain.TournamentGroup;
import com.ueit.running.service.ITournamentGroupService;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.common.core.page.TableDataInfo;

/**
 * 比赛分组Controller
 *
 * @author douwq
 * @date 2022-11-29
 */
@RestController
@RequestMapping("/running/tournamentGroup" )
public class TournamentGroupController extends BaseController {
    @Autowired
    private ITournamentGroupService tournamentGroupService;

/**
 * 查询比赛分组列表
 */
@PreAuthorize("@ss.hasPermi('running:tournamentGroup:list')" )
@GetMapping("/list" )
    public TableDataInfo list(TournamentGroup tournamentGroup) {
        startPage();
        List<TournamentGroup> list = tournamentGroupService.selectTournamentGroupList(tournamentGroup);
        return getDataTable(list);
    }

    /**
     * 导出比赛分组列表
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroup:export')" )
    @Log(title = "比赛分组" , businessType = BusinessType.EXPORT)
    @PostMapping("/export" )
    public void export(HttpServletResponse response, TournamentGroup tournamentGroup) {
        List<TournamentGroup> list = tournamentGroupService.selectTournamentGroupList(tournamentGroup);
        ExcelUtil<TournamentGroup> util = new ExcelUtil<TournamentGroup>(TournamentGroup. class);
        util.exportExcel(response, list, "比赛分组数据" );
    }

    /**
     * 获取比赛分组详细信息
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroup:query')" )
    @GetMapping(value = "/{id}" )
    public AjaxResult getInfo(@PathVariable("id" ) Long id) {
        return AjaxResult.success(tournamentGroupService.selectTournamentGroupById(id));
    }

    /**
     * 新增比赛分组
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroup:add')" )
    @Log(title = "比赛分组" , businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody TournamentGroup tournamentGroup) {
        return toAjax(tournamentGroupService.insertTournamentGroup(tournamentGroup));
    }

    /**
     * 修改比赛分组
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroup:edit')" )
    @Log(title = "比赛分组" , businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody TournamentGroup tournamentGroup) {
        return toAjax(tournamentGroupService.updateTournamentGroup(tournamentGroup));
    }

    /**
     * 删除比赛分组
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroup:remove')" )
    @Log(title = "比赛分组" , businessType = BusinessType.DELETE)
    @DeleteMapping("/{ids}" )
    public AjaxResult remove(@PathVariable Long[]ids) {
        return toAjax(tournamentGroupService.deleteTournamentGroupByIds(ids));
    }
}

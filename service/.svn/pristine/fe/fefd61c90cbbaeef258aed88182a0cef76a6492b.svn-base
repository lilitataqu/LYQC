package com.ueit.web.controller.running;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import com.ueit.running.domain.TournamentGroup;
import com.ueit.running.domain.dto.TournamentRankSystemDto;
import com.ueit.running.domain.vo.TournamentRankSystemVo;
import com.ueit.running.domain.vo.TournamentRankVo;
import com.ueit.running.service.ITournamentGroupUserService;
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
import com.ueit.running.domain.Tournament;
import com.ueit.running.service.ITournamentService;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.common.core.page.TableDataInfo;

/**
 * 比赛管理Controller
 *
 * @author douwq
 * @date 2022-11-29
 */
@RestController
@RequestMapping("/running/tournament" )
public class TournamentController extends BaseController {
    @Autowired
    private ITournamentService tournamentService;
    @Autowired
    private ITournamentGroupUserService tournamentGroupUserService;

    /**
     * 查询比赛管理列表
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:list')" )
    @GetMapping("/list" )
    public TableDataInfo list(Tournament tournament) {
        startPage();
        List<Tournament> list = tournamentService.selectTournamentList(tournament);
        return getDataTable(list);
    }

    /**
     * 导出比赛管理列表
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:export')" )
    @Log(title = "比赛管理" , businessType = BusinessType.EXPORT)
    @PostMapping("/export" )
    public void export(HttpServletResponse response, Tournament tournament) {
        List<Tournament> list = tournamentService.selectTournamentList(tournament);
        ExcelUtil<Tournament> util = new ExcelUtil<Tournament>(Tournament. class);
        util.exportExcel(response, list, "比赛管理数据" );
    }

    /**
     * 获取比赛管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:query')" )
    @GetMapping(value = "/{id}" )
    public AjaxResult getInfo(@PathVariable("id" ) Long id) {
        return AjaxResult.success(tournamentService.selectTournamentById(id));
    }

    /**
     * 新增比赛管理
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:add')" )
    @Log(title = "比赛管理" , businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody Tournament tournament) {
        return toAjax(tournamentService.insertTournament(tournament));
    }

    /**
     * 修改比赛管理
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:edit')" )
    @Log(title = "比赛管理" , businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody Tournament tournament) {
        return toAjax(tournamentService.updateTournament(tournament));
    }

    /**
     * 删除比赛管理
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:remove')" )
    @Log(title = "比赛管理" , businessType = BusinessType.DELETE)
    @DeleteMapping("/{ids}" )
    public AjaxResult remove(@PathVariable Long[]ids) {
        return toAjax(tournamentService.deleteTournamentByIds(ids));
    }

    /**
     * 查询比赛分组排名列表
     * @param tournamentRankSystemDto
     * @return
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:rank')" )
    @GetMapping("/rank")
    public TableDataInfo rank(TournamentRankSystemDto tournamentRankSystemDto) {
        startPage();
        List<TournamentRankSystemVo> list = tournamentGroupUserService.selectTournamentRankSystem(tournamentRankSystemDto);
        return getDataTable(list);
    }

    /**
     * 导出比赛管理列表
     */
    @PreAuthorize("@ss.hasPermi('running:tournament:rank')" )
    @Log(title = "比赛排行榜" , businessType = BusinessType.EXPORT)
    @PostMapping("/rankExport" )
    public void rankExport(HttpServletResponse response, TournamentRankSystemDto tournamentRankSystemDto) {
        List<TournamentRankSystemVo> list = tournamentGroupUserService.selectTournamentRankSystem(tournamentRankSystemDto);
        ExcelUtil<TournamentRankSystemVo> util = new ExcelUtil<TournamentRankSystemVo>(TournamentRankSystemVo. class);
        util.exportExcel(response, list, "比赛排行榜数据" );
    }
}

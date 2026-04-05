package com.ueit.web.controller.running;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import com.ueit.running.domain.TournamentGroup;
import com.ueit.running.domain.vo.TournamentRankVo;
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
import com.ueit.running.domain.TournamentGroupUser;
import com.ueit.running.service.ITournamentGroupUserService;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.common.core.page.TableDataInfo;

/**
 * 用户比赛跑步数据Controller
 *
 * @author douwq
 * @date 2022-11-29
 */
@RestController
@RequestMapping("/running/tournamentGroupUser" )
public class TournamentGroupUserController extends BaseController {
    @Autowired
    private ITournamentGroupUserService tournamentGroupUserService;

    /**
     * 查询用户比赛跑步数据列表
     */

    @PreAuthorize("@ss.hasPermi('running:tournamentGroupUser:list')" )
    @GetMapping("/list" )
    public TableDataInfo list(TournamentGroupUser tournamentGroupUser) {
        startPage();
        List<TournamentGroupUser> list = tournamentGroupUserService.selectTournamentGroupUserList(tournamentGroupUser);
        return getDataTable(list);
    }

    /**
     * 导出用户比赛跑步数据列表
     */

    @PreAuthorize("@ss.hasPermi('running:tournamentGroupUser:export')" )
    @Log(title = "用户比赛跑步数据" , businessType = BusinessType.EXPORT)
    @PostMapping("/export" )
    public void export(HttpServletResponse response, TournamentGroupUser tournamentGroupUser) {
        List<TournamentGroupUser> list = tournamentGroupUserService.selectTournamentGroupUserList(tournamentGroupUser);
        ExcelUtil<TournamentGroupUser> util = new ExcelUtil<TournamentGroupUser>(TournamentGroupUser. class);
        util.exportExcel(response, list, "用户比赛跑步数据数据" );
    }

    /**
     * 获取用户比赛跑步数据详细信息
     */

    @PreAuthorize("@ss.hasPermi('running:tournamentGroupUser:query')" )
    @GetMapping(value = "/{id}" )
    public AjaxResult getInfo(@PathVariable("id" ) Long id) {
        return AjaxResult.success(tournamentGroupUserService.selectTournamentGroupUserById(id));
    }

    /**
     * 新增用户比赛跑步数据
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroupUser:add')" )
    @Log(title = "用户比赛跑步数据" , businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody TournamentGroupUser tournamentGroupUser) {
        return toAjax(tournamentGroupUserService.insertTournamentGroupUser(tournamentGroupUser));
    }

    /**
     * 修改用户比赛跑步数据
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroupUser:edit')" )
    @Log(title = "用户比赛跑步数据" , businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody TournamentGroupUser tournamentGroupUser) {
        return toAjax(tournamentGroupUserService.updateTournamentGroupUser(tournamentGroupUser));
    }

    /**
     * 删除用户比赛跑步数据
     */
    @PreAuthorize("@ss.hasPermi('running:tournamentGroupUser:remove')" )
    @Log(title = "用户比赛跑步数据" , businessType = BusinessType.DELETE)
    @DeleteMapping("/{ids}" )
    public AjaxResult remove(@PathVariable Long[]ids) {
        return toAjax(tournamentGroupUserService.deleteTournamentGroupUserByIds(ids));
    }
}

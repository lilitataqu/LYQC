package com.ueit.web.controller.app;

import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.core.page.TableDataInfo;
import com.ueit.common.utils.SecurityUtils;
import com.ueit.common.utils.bean.BeanUtils;
import com.ueit.running.domain.Tournament;
import com.ueit.running.domain.TournamentGroup;
import com.ueit.running.domain.TournamentGroupUser;
import com.ueit.running.domain.dto.TournamentGroupUserDto;
import com.ueit.running.domain.vo.TournamentMyVo;
import com.ueit.running.domain.vo.TournamentRankVo;
import com.ueit.running.domain.vo.TournamentUserVo;
import com.ueit.running.domain.vo.TournamentVo;
import com.ueit.running.service.ITournamentGroupService;
import com.ueit.running.service.ITournamentGroupUserService;
import com.ueit.running.service.ITournamentService;
import com.ueit.system.domain.ClassHour;
import com.ueit.system.service.IClassHourUserService;
import com.ueit.web.controller.vo.RunInfoTournamentVo;
import com.ueit.web.controller.vo.RunInfoVo;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.util.List;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/12/5 9:49
 */

@RestController
@RequestMapping("/appTournament")
@AllArgsConstructor
public class AppTournamentController extends BaseController {

    private final ITournamentService tournamentService;
    private final ITournamentGroupUserService tournamentGroupUserService;
    private final ITournamentGroupService tournamentGroupService;

    /**
     * 查询未完成的比赛列表
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping("/user/unfinishList")
    public TableDataInfo unfinishList() {
        startPage();
        List<TournamentUserVo> list = tournamentGroupUserService.selectTournamentByUserAndState(2);
        return getDataTable(list);
    }

    /**
     * 查询用户报名的比赛列表
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping("/user/list")
    public TableDataInfo userList() {
        startPage();
//        List<TournamentUserVo> list = tournamentGroupUserService.selectTournamentByUserAndState(null);
        List<TournamentMyVo> list = tournamentGroupUserService.selectMyTournamentRecord();
        return getDataTable(list);
    }

    /**
     * 查询比赛列表
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping("/list")
    public TableDataInfo list() {
        startPage();
        List<Tournament> list = tournamentService.selectTournamentList(null);
        return getDataTable(list);
    }

    /**
     * 查询比赛详情信息
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/info")
    public AjaxResult tournamentInfo(@RequestBody Long id) {
        TournamentVo tournament = tournamentService.selectTournamentInfo(id);
        return AjaxResult.success(tournament);
    }

    /**
     * 查询比赛分组详情信息
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/groupInfo")
    public AjaxResult tournamentGroupInfo(@RequestBody Long tournamentGroupId) {
        TournamentGroup tournamentGroup = tournamentGroupService.selectTournamentGroupById(tournamentGroupId);
        return AjaxResult.success(tournamentGroup);
    }


    /**
     * 比赛报名
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/user/registration")
    public AjaxResult registration(@RequestBody Long groupId) {
        int i = tournamentGroupUserService.registration(groupId);
        return toAjax(i);
    }

    /**
     * 根据比赛ID 获取用户比赛报名状态
     * @param tournamentId 比赛ID
     * @return
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/user/registrationState")
    public AjaxResult userRegistrationState(@RequestBody Long tournamentId) {
        return AjaxResult.success(tournamentGroupUserService.checkUserRegistration(tournamentId));
    }

    /**
     * 根据比赛ID 获取用户是否可以比赛
     * @param tournamentId 比赛ID
     * @return
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/user/tournamentState")
    public AjaxResult userTournamentState(@RequestBody Long tournamentId) {
        return AjaxResult.success(tournamentGroupUserService.checkUserTournament(tournamentId));
    }

    /**
     * 保存比赛跑步数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/user/add")
    public AjaxResult userAdd(@RequestBody TournamentGroupUserDto tournamentGroupUserDto) {
        tournamentGroupUserService.addUserTournamentRunInfo(tournamentGroupUserDto);
        return AjaxResult.success(tournamentGroupUserDto.getId());
    }

    /**
     * 查询比赛跑步数据
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/user/tournament/runInfo")
    public AjaxResult selectRunInfo(@RequestBody Long id) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        TournamentGroupUser tournamentGroupUser = tournamentGroupUserService.selectTournamentGroupUserById(id);

        RunInfoVo runInfoVo = new RunInfoVo();
        BeanUtils.copyBeanProp(runInfoVo, tournamentGroupUser);
        if(tournamentGroupUser.getUserId().equals(user.getUserId())){
            runInfoVo.setKcal(tournamentGroupUser.getKcal());
            runInfoVo.setDistance(tournamentGroupUser.getDistance());
            runInfoVo.setKmSpeed(tournamentGroupUser.getKmSpeed());
            runInfoVo.setPoints(tournamentGroupUser.getPoints());
            runInfoVo.setAltitude(tournamentGroupUser.getAltitude());
            return AjaxResult.success(runInfoVo);
        }
        return AjaxResult.error("非法操作");

       /* RunInfoTournamentVo runInfoTournamentVo = new RunInfoTournamentVo();
        BeanUtils.copyBeanProp(runInfoTournamentVo, tournamentGroupUser);
        if(tournamentGroupUser.getUserId().equals(user.getUserId())){
            runInfoTournamentVo.setKcal(tournamentGroupUser.getKcal());
            runInfoTournamentVo.setDistance(tournamentGroupUser.getDistance());
            runInfoTournamentVo.setKmSpeed(tournamentGroupUser.getKmSpeed());
            runInfoTournamentVo.setPoints(tournamentGroupUser.getPoints());
            runInfoTournamentVo.setAltitude(tournamentGroupUser.getAltitude());
            return AjaxResult.success(runInfoTournamentVo);
        }

        return AjaxResult.error("非法操作");
        */
    }

    /**
     * 查询比赛分组排名列表
     * @param tournamentGroup 只用到其中的参数id : 比赛分组id
     * @return
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @GetMapping("/rank")
    public TableDataInfo rank(TournamentGroup tournamentGroup) {
        startPage();
        List<TournamentRankVo> list = tournamentGroupUserService.selectTournamentRank(tournamentGroup.getId());
        return getDataTable(list);
    }
}

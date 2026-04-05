package com.ueit.running.service.impl;

import java.util.Date;
import java.util.List;

import com.ueit.common.utils.DateUtils;
import com.ueit.common.utils.StringUtils;
import com.ueit.common.utils.bean.BeanUtils;
import com.ueit.running.domain.TournamentGroup;
import com.ueit.running.domain.vo.TournamentVo;
import com.ueit.running.mapper.TournamentGroupMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ueit.running.mapper.TournamentMapper;
import com.ueit.running.domain.Tournament;
import com.ueit.running.service.ITournamentService;

/**
 * 比赛管理Service业务层处理
 *
 * @author douwq
 * @date 2022-11-29
 */
@Service
public class TournamentServiceImpl implements ITournamentService {
    @Autowired
    private TournamentMapper tournamentMapper;
    @Autowired
    private TournamentGroupMapper tournamentGroupMapper;

    /**
     * 查询比赛管理
     *
     * @param id 比赛管理主键
     * @return 比赛管理
     */
    @Override
    public Tournament selectTournamentById(Long id) {
        return tournamentMapper.selectTournamentById(id);
    }

    /**
     * 查询比赛管理列表
     *
     * @param tournament 比赛管理
     * @return 比赛管理
     */
    @Override
    public List<Tournament> selectTournamentList(Tournament tournament) {
        return tournamentMapper.selectTournamentList(tournament);
    }

    /**
     * 新增比赛管理
     *
     * @param tournament 比赛管理
     * @return 结果
     */
    @Override
    public int insertTournament(Tournament tournament) {
        if(StringUtils.isEmpty(tournament.getCover())){
            tournament.setCover("/profile/tournament.jpg");
        }
        tournament.setCreateTime(DateUtils.getNowDate());
        return tournamentMapper.insertTournament(tournament);
    }

    /**
     * 修改比赛管理
     *
     * @param tournament 比赛管理
     * @return 结果
     */
    @Override
    public int updateTournament(Tournament tournament) {
        tournament.setUpdateTime(DateUtils.getNowDate());
        return tournamentMapper.updateTournament(tournament);
    }

    /**
     * 批量删除比赛管理
     *
     * @param ids 需要删除的比赛管理主键
     * @return 结果
     */
    @Override
    public int deleteTournamentByIds(Long[] ids) {
        return tournamentMapper.deleteTournamentByIds(ids);
    }

    /**
     * 删除比赛管理信息
     *
     * @param id 比赛管理主键
     * @return 结果
     */
    @Override
    public int deleteTournamentById(Long id) {
        return tournamentMapper.deleteTournamentById(id);
    }

    /**
     * 查询比赛详情信息
     */
    @Override
    public TournamentVo selectTournamentInfo(Long id) {
        TournamentVo tournamentInfo = new TournamentVo();
        Tournament tournament = tournamentMapper.selectTournamentById(id);
        BeanUtils.copyBeanProp(tournamentInfo, tournament);

        // 获取分组数据
        TournamentGroup tournamentGroup = new TournamentGroup();
        tournamentGroup.setTournamentId(id);
        tournamentGroup.setSex(false);
        List<TournamentGroup> tournamentGroupsWoman = tournamentGroupMapper.selectTournamentGroupList(tournamentGroup);
        tournamentInfo.setWomanDistance(tournamentGroupsWoman);
        tournamentGroup.setSex(true);
        List<TournamentGroup> tournamentGroupsMan = tournamentGroupMapper.selectTournamentGroupList(tournamentGroup);
        tournamentInfo.setManDistance(tournamentGroupsMan);

        return tournamentInfo;
    }

    /**
     * 检查比赛是否可报名状态
     *
     * @param id
     * @return
     */
    @Override
    public boolean checkRegistrationState(Long id) {
        Date date = new Date();
        Tournament tournament = tournamentMapper.selectTournamentById(id);
        int start = tournament.getRegistrationTimeStart().compareTo(date);
        int end = tournament.getRegistrationTimeEnd().compareTo(date);
        return start <= 0 && end >= 0;
    }

    /**
     * 增加报名人数
     *
     * @param id 比赛Id
     * @return
     */
    @Override
    public int addParticipantsNumber(Long id) {
        return tournamentMapper.updateParticipantsNumber(id);
    }
}

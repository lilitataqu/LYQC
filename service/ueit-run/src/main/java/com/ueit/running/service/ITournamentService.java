package com.ueit.running.service;

import java.util.List;

import com.ueit.running.domain.Tournament;
import com.ueit.running.domain.vo.TournamentVo;

/**
 * 比赛管理Service接口
 *
 * @author douwq
 * @date 2022-11-29
 */
public interface ITournamentService {
    /**
     * 查询比赛管理
     *
     * @param id 比赛管理主键
     * @return 比赛管理
     */
    public Tournament selectTournamentById(Long id);

    /**
     * 查询比赛管理列表
     *
     * @param tournament 比赛管理
     * @return 比赛管理集合
     */
    public List<Tournament> selectTournamentList(Tournament tournament);

    /**
     * 新增比赛管理
     *
     * @param tournament 比赛管理
     * @return 结果
     */
    public int insertTournament(Tournament tournament);

    /**
     * 修改比赛管理
     *
     * @param tournament 比赛管理
     * @return 结果
     */
    public int updateTournament(Tournament tournament);

    /**
     * 批量删除比赛管理
     *
     * @param ids 需要删除的比赛管理主键集合
     * @return 结果
     */
    public int deleteTournamentByIds(Long[] ids);

    /**
     * 删除比赛管理信息
     *
     * @param id 比赛管理主键
     * @return 结果
     */
    public int deleteTournamentById(Long id);

    /**
     * 查询比赛详情信息
     */
    public TournamentVo selectTournamentInfo(Long id);

    /**
     * 检查比赛是否可报名状态
     * @param id
     * @return true 为可报名，false 为不可报名
     */
    public boolean checkRegistrationState(Long id);

    /**
     * 增加报名人数
     * @param id 比赛Id
     * @return
     */
    public int addParticipantsNumber(Long id);
}

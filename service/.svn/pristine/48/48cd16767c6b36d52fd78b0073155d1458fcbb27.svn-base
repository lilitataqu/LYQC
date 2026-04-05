package com.ueit.running.service;

import java.util.List;

import com.ueit.running.domain.Tournament;
import com.ueit.running.domain.TournamentGroupUser;
import com.ueit.running.domain.dto.TournamentGroupUserDto;
import com.ueit.running.domain.dto.TournamentRankSystemDto;
import com.ueit.running.domain.vo.*;

/**
 * 用户比赛跑步数据Service接口
 *
 * @author douwq
 * @date 2022-11-29
 */
public interface ITournamentGroupUserService {
    /**
     * 查询用户比赛跑步数据
     *
     * @param id 用户比赛跑步数据主键
     * @return 用户比赛跑步数据
     */
    public TournamentGroupUser selectTournamentGroupUserById(Long id);

    /**
     * 查询用户比赛跑步数据列表
     *
     * @param tournamentGroupUser 用户比赛跑步数据
     * @return 用户比赛跑步数据集合
     */
    public List<TournamentGroupUser> selectTournamentGroupUserList(TournamentGroupUser tournamentGroupUser);

    /**
     * 新增用户比赛跑步数据
     *
     * @param tournamentGroupUser 用户比赛跑步数据
     * @return 结果
     */
    public int insertTournamentGroupUser(TournamentGroupUser tournamentGroupUser);

    /**
     * 修改用户比赛跑步数据
     *
     * @param tournamentGroupUser 用户比赛跑步数据
     * @return 结果
     */
    public int updateTournamentGroupUser(TournamentGroupUser tournamentGroupUser);

    /**
     * 批量删除用户比赛跑步数据
     *
     * @param ids 需要删除的用户比赛跑步数据主键集合
     * @return 结果
     */
    public int deleteTournamentGroupUserByIds(Long[] ids);

    /**
     * 删除用户比赛跑步数据信息
     *
     * @param id 用户比赛跑步数据主键
     * @return 结果
     */
    public int deleteTournamentGroupUserById(Long id);

    /**
     *  根据参赛状态查询登录用户的比赛列表
     *
     * @param state 参赛状态 0 有效，1无效成绩，2已报名未参赛，null 查询所有
     * @return 比赛信息列表
     */
    public List<TournamentUserVo> selectTournamentByUserAndState(Integer state);

    /**
     * 查询我的比赛记录
     * @return
     */
    public List<TournamentMyVo> selectMyTournamentRecord();

    /**
     * 用户报名
     * @return
     */
    public int registration(Long groupId);

    /**
     * 检查用户是否报名
     * @return true 已报名, false 未报名
     */
    public boolean checkUserRegistration(Long tournamentId);

    /**
     * 根据比赛ID 获取用户是否可以比赛
     * @return true 可以比赛, false 禁止比赛
     */
    public TournamentStateVo checkUserTournament(Long tournamentId);

    /**
     * 保存比赛跑步数据
     * @param tournamentGroupUserDto
     * @return
     */
    public int addUserTournamentRunInfo(TournamentGroupUserDto tournamentGroupUserDto);

    /**
     * 查询比赛分组排名列表
     * @param groupId 比赛分组id
     * @return
     */
    public List<TournamentRankVo> selectTournamentRank(Long groupId);

    /**
     * 后台查询比赛分组排名列表
     * @param tournamentRankSystemDto
     * @return
     */
    public List<TournamentRankSystemVo> selectTournamentRankSystem(TournamentRankSystemDto tournamentRankSystemDto);
}

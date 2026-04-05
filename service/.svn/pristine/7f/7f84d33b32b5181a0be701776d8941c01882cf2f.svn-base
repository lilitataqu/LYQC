package com.ueit.running.mapper;

import java.util.List;

import com.ueit.running.domain.Tournament;
import com.ueit.running.domain.vo.TournamentUserVo;
import org.apache.ibatis.annotations.Param;

/**
 * 比赛管理Mapper接口
 *
 * @author douwq
 * @date 2022-11-29
 */
public interface TournamentMapper {
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
     * 删除比赛管理
     *
     * @param id 比赛管理主键
     * @return 结果
     */
    public int deleteTournamentById(Long id);

    /**
     * 批量删除比赛管理
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteTournamentByIds(Long[] ids);

    /**
     * 根据用户id 和参赛状态查询比赛列表
     *
     * @param userId 用户主键
     * @param state 参赛状态
     * @return 比赛信息列表
     */
    public List<TournamentUserVo> selectTournamentByUserAndState(@Param("userId") Long userId, @Param("state") Integer state);

    /**
     * 增加报名人数
     * @param id 比赛Id
     * @return
     */
    public int updateParticipantsNumber(Long id);
}

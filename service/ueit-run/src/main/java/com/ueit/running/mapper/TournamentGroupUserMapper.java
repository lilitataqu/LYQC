package com.ueit.running.mapper;

import java.util.List;

import com.ueit.running.domain.Tournament;
import com.ueit.running.domain.TournamentGroupUser;
import com.ueit.running.domain.dto.TournamentRankSystemDto;
import com.ueit.running.domain.vo.TournamentMyVo;
import com.ueit.running.domain.vo.TournamentRankSystemVo;
import com.ueit.running.domain.vo.TournamentRankVo;
import org.apache.ibatis.annotations.Param;

/**
 * 用户比赛跑步数据Mapper接口
 *
 * @author douwq
 * @date 2022-11-29
 */
public interface TournamentGroupUserMapper {
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

    public List<TournamentGroupUser> selectTournamentUserByTournamentId(@Param("tournamentId") Long tournamentId, @Param("userId") Long userId, @Param("state") Integer state);

    /**
     * 查询我的比赛记录
     * @return
     */
    public List<TournamentMyVo> selectMyTournamentRecord(Long userId);

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
     * 删除用户比赛跑步数据
     *
     * @param id 用户比赛跑步数据主键
     * @return 结果
     */
    public int deleteTournamentGroupUserById(Long id);

    /**
     * 批量删除用户比赛跑步数据
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteTournamentGroupUserByIds(Long[] ids);
}

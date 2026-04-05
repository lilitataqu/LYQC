package com.ueit.running.mapper;

import java.util.List;

import com.ueit.running.domain.TournamentGroup;
import org.apache.ibatis.annotations.Param;
import org.springframework.security.core.parameters.P;

/**
 * 比赛分组Mapper接口
 *
 * @author douwq
 * @date 2022-11-29
 */
public interface TournamentGroupMapper {
    /**
     * 查询比赛分组
     *
     * @param id 比赛分组主键
     * @return 比赛分组
     */
    public TournamentGroup selectTournamentGroupById(Long id);

    /**
     * 查询比赛分组列表
     *
     * @param tournamentGroup 比赛分组
     * @return 比赛分组集合
     */
    public List<TournamentGroup> selectTournamentGroupList(TournamentGroup tournamentGroup);

    /**
     * 新增比赛分组
     *
     * @param tournamentGroup 比赛分组
     * @return 结果
     */
    public int insertTournamentGroup(TournamentGroup tournamentGroup);

    /**
     * 修改比赛分组
     *
     * @param tournamentGroup 比赛分组
     * @return 结果
     */
    public int updateTournamentGroup(TournamentGroup tournamentGroup);

    /**
     * 删除比赛分组
     *
     * @param id 比赛分组主键
     * @return 结果
     */
    public int deleteTournamentGroupById(Long id);

    /**
     * 批量删除比赛分组
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteTournamentGroupByIds(Long[] ids);
}

package com.ueit.running.service.impl;

import java.util.List;
        import com.ueit.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ueit.running.mapper.TournamentGroupMapper;
import com.ueit.running.domain.TournamentGroup;
import com.ueit.running.service.ITournamentGroupService;

/**
 * 比赛分组Service业务层处理
 *
 * @author douwq
 * @date 2022-11-29
 */
@Service
public class TournamentGroupServiceImpl implements ITournamentGroupService {
    @Autowired
    private TournamentGroupMapper tournamentGroupMapper;

    /**
     * 查询比赛分组
     *
     * @param id 比赛分组主键
     * @return 比赛分组
     */
    @Override
    public TournamentGroup selectTournamentGroupById(Long id) {
        return tournamentGroupMapper.selectTournamentGroupById(id);
    }

    /**
     * 查询比赛分组列表
     *
     * @param tournamentGroup 比赛分组
     * @return 比赛分组
     */
    @Override
    public List<TournamentGroup> selectTournamentGroupList(TournamentGroup tournamentGroup) {
        return tournamentGroupMapper.selectTournamentGroupList(tournamentGroup);
    }

    /**
     * 新增比赛分组
     *
     * @param tournamentGroup 比赛分组
     * @return 结果
     */
    @Override
    public int insertTournamentGroup(TournamentGroup tournamentGroup) {
                    tournamentGroup.setCreateTime(DateUtils.getNowDate());
            return tournamentGroupMapper.insertTournamentGroup(tournamentGroup);
    }

    /**
     * 修改比赛分组
     *
     * @param tournamentGroup 比赛分组
     * @return 结果
     */
    @Override
    public int updateTournamentGroup(TournamentGroup tournamentGroup) {
                    tournamentGroup.setUpdateTime(DateUtils.getNowDate());
        return tournamentGroupMapper.updateTournamentGroup(tournamentGroup);
    }

    /**
     * 批量删除比赛分组
     *
     * @param ids 需要删除的比赛分组主键
     * @return 结果
     */
    @Override
    public int deleteTournamentGroupByIds(Long[]ids) {
        return tournamentGroupMapper.deleteTournamentGroupByIds(ids);
    }

    /**
     * 删除比赛分组信息
     *
     * @param id 比赛分组主键
     * @return 结果
     */
    @Override
    public int deleteTournamentGroupById(Long id) {
        return tournamentGroupMapper.deleteTournamentGroupById(id);
    }
}

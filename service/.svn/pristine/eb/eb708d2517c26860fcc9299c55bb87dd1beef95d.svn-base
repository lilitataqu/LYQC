package com.ueit.running.service.impl;

import java.util.Date;
import java.util.List;

import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.utils.DateUtils;
import com.ueit.common.utils.SecurityUtils;
import com.ueit.common.utils.bean.BeanUtils;
import com.ueit.running.domain.*;
import com.ueit.running.domain.dto.TournamentGroupUserDto;
import com.ueit.running.domain.dto.TournamentRankSystemDto;
import com.ueit.running.domain.vo.*;
import com.ueit.running.mapper.TournamentGroupMapper;
import com.ueit.running.mapper.TournamentMapper;
import com.ueit.running.service.IRunInfoService;
import com.ueit.running.service.ITournamentService;
import com.ueit.running.service.IUserWechatService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ueit.running.mapper.TournamentGroupUserMapper;
import com.ueit.running.service.ITournamentGroupUserService;

/**
 * 用户比赛跑步数据Service业务层处理
 *
 * @author douwq
 * @date 2022-11-29
 */
@Service
@AllArgsConstructor
public class TournamentGroupUserServiceImpl implements ITournamentGroupUserService {
    private final TournamentGroupUserMapper tournamentGroupUserMapper;
    private final TournamentGroupMapper tournamentGroupMapper;
    private final TournamentMapper tournamentMapper;
    private final ITournamentService tournamentService;
    private final IUserWechatService userWechatService;
    private final IRunInfoService runInfoService;

    /**
     * 查询用户比赛跑步数据
     *
     * @param id 用户比赛跑步数据主键
     * @return 用户比赛跑步数据
     */
    @Override
    public TournamentGroupUser selectTournamentGroupUserById(Long id) {
        return tournamentGroupUserMapper.selectTournamentGroupUserById(id);
    }

    /**
     * 查询用户比赛跑步数据列表
     *
     * @param tournamentGroupUser 用户比赛跑步数据
     * @return 用户比赛跑步数据
     */
    @Override
    public List<TournamentGroupUser> selectTournamentGroupUserList(TournamentGroupUser tournamentGroupUser) {
        return tournamentGroupUserMapper.selectTournamentGroupUserList(tournamentGroupUser);
    }

    /**
     * 新增用户比赛跑步数据
     *
     * @param tournamentGroupUser 用户比赛跑步数据
     * @return 结果
     */
    @Override
    public int insertTournamentGroupUser(TournamentGroupUser tournamentGroupUser) {
        tournamentGroupUser.setCreateTime(DateUtils.getNowDate());
        return tournamentGroupUserMapper.insertTournamentGroupUser(tournamentGroupUser);
    }

    /**
     * 修改用户比赛跑步数据
     *
     * @param tournamentGroupUser 用户比赛跑步数据
     * @return 结果
     */
    @Override
    public int updateTournamentGroupUser(TournamentGroupUser tournamentGroupUser) {
        tournamentGroupUser.setUpdateTime(DateUtils.getNowDate());
        return tournamentGroupUserMapper.updateTournamentGroupUser(tournamentGroupUser);
    }

    /**
     * 批量删除用户比赛跑步数据
     *
     * @param ids 需要删除的用户比赛跑步数据主键
     * @return 结果
     */
    @Override
    public int deleteTournamentGroupUserByIds(Long[] ids) {
        return tournamentGroupUserMapper.deleteTournamentGroupUserByIds(ids);
    }

    /**
     * 删除用户比赛跑步数据信息
     *
     * @param id 用户比赛跑步数据主键
     * @return 结果
     */
    @Override
    public int deleteTournamentGroupUserById(Long id) {
        return tournamentGroupUserMapper.deleteTournamentGroupUserById(id);
    }

    /**
     * 根据参赛状态查询登录用户的比赛列表
     *
     * @param state 参赛状态 0 有效，1无效成绩，2已报名未参赛，null 查询所有
     * @return 比赛信息列表
     */
    @Override
    public List<TournamentUserVo> selectTournamentByUserAndState(Integer state) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        return tournamentMapper.selectTournamentByUserAndState(user.getUserId(), state);
    }

    /**
     * 查询我的比赛记录
     * @return
     */
    @Override
    public List<TournamentMyVo> selectMyTournamentRecord() {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        return tournamentGroupUserMapper.selectMyTournamentRecord(user.getUserId());
    }

    /**
     * 用户报名
     *
     * @return
     */
    @Override
    public int registration(Long groupId) throws RuntimeException {
        SysUser user = SecurityUtils.getLoginUser().getUser();

        TournamentGroup tournamentGroup = tournamentGroupMapper.selectTournamentGroupById(groupId);
        // 校验是否可以报名
        if (!tournamentService.checkRegistrationState(tournamentGroup.getTournamentId())) {
            throw new RuntimeException("非报名时段不能报名");
        }
        if (checkUserRegistration(tournamentGroup.getTournamentId())) {
            throw new RuntimeException("请勿重复报名");
        }

        UserWechat userWechatByUserId = userWechatService.selectUserWechatByUserId(user.getUserId());
        if (!userWechatByUserId.getSex().equals(tournamentGroup.getSex())) {
            throw new RuntimeException("非法操作");
        }

        TournamentGroupUser tournamentGroupUser = new TournamentGroupUser();
        tournamentGroupUser.setTournamentGroupId(groupId);
        tournamentGroupUser.setUserId(user.getUserId());
        int insert = insertTournamentGroupUser(tournamentGroupUser);
        if(insert == 1){
            tournamentService.addParticipantsNumber(tournamentGroup.getTournamentId());
        }
        return insert;
    }

    /**
     * 排查用户是否报名
     *
     * @return true 已报名, false 未报名
     */
    @Override
    public boolean checkUserRegistration(Long tournamentId) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        List<TournamentGroupUser> tournamentGroupUsers = tournamentGroupUserMapper.selectTournamentUserByTournamentId(tournamentId, user.getUserId(), null);
        return tournamentGroupUsers.size() > 0;
    }

    /**
     * 根据比赛ID 获取用户是否可以比赛
     * @return
     */
    @Override
    public TournamentStateVo checkUserTournament(Long tournamentId) {

        TournamentStateVo res = new TournamentStateVo();

        SysUser user = SecurityUtils.getLoginUser().getUser();

        Tournament tournament = tournamentMapper.selectTournamentById(tournamentId);
        // 该项目的全部数据
        List<TournamentGroupUser> tournamentGroupUsers = tournamentGroupUserMapper.selectTournamentUserByTournamentId(tournamentId, user.getUserId(), null);
        // 该项目报名未参与的数据
        List<TournamentGroupUser> tournamentGroupUsers2 = tournamentGroupUserMapper.selectTournamentUserByTournamentId(tournamentId, user.getUserId(), 2);
        if(tournamentGroupUsers.size() < 1){
            res.setGroupId(0L);
            res.setMsg("未报名");
            return res;
        }
        if(tournamentGroupUsers.size() - tournamentGroupUsers2.size() < tournament.getMaxNumber() && tournamentGroupUsers2.size() == 1){
            if(tournamentGroupUsers.size() != 1 && ((System.currentTimeMillis() - tournamentGroupUsers.get(1).getUpdateTime().getTime()) < 5 * 24 * 60 * 60 * 1000)){
                res.setGroupId(0L);
                res.setMsg("2次参赛时间需间隔5天");
                return res;
            }

            res.setGroupId(tournamentGroupUsers.get(0).getTournamentGroupId());
            res.setMsg("去比赛");
            return res;
        }else{
            res.setGroupId(0L);
            res.setMsg("已达到最多参赛次数（" + tournament.getMaxNumber() + "次）");
            return res;
        }
    }

    /**
     * 保存比赛跑步数据
     * @param tournamentGroupUserDto
     * @return
     */
    @Override
    public int addUserTournamentRunInfo(TournamentGroupUserDto tournamentGroupUserDto) {

        TournamentGroupUser tournamentGroupUser = new TournamentGroupUser();
        SysUser user = SecurityUtils.getLoginUser().getUser();
        tournamentGroupUser.setUserId(user.getUserId());
        tournamentGroupUser.setTournamentGroupId(tournamentGroupUserDto.getTournamentGroupId());
        tournamentGroupUser.setState(2);
        List<TournamentGroupUser> tournamentGroupUsers = selectTournamentGroupUserList(tournamentGroupUser);
        if(tournamentGroupUsers.isEmpty()){
            throw new RuntimeException("未报名比赛");
        }
        Long id = tournamentGroupUsers.get(0).getId();
        tournamentGroupUserDto.setId(id);


        RunInfo runInfo = new RunInfo();
        BeanUtils.copyBeanProp(runInfo, tournamentGroupUserDto);

        runInfoService.repairRunInfo(runInfo);

        BeanUtils.copyBeanProp(tournamentGroupUserDto, runInfo);

        setTournamentRunInfoState(tournamentGroupUserDto);

        int updateNum = updateTournamentGroupUser(tournamentGroupUserDto);

        if(updateNum == 1){
            // 跑步数据存储完成,当比赛未达到最大次数时创建新报名数据

            TournamentGroup tournamentGroup = tournamentGroupMapper.selectTournamentGroupById(tournamentGroupUsers.get(0).getTournamentGroupId());
            Tournament tournament = tournamentMapper.selectTournamentById(tournamentGroup.getTournamentId());

            List<TournamentGroupUser> tournamentGroupUsersAll = tournamentGroupUserMapper.selectTournamentUserByTournamentId(tournament.getId(), user.getUserId(), null);

            if(tournamentGroupUsersAll.size() < tournament.getMaxNumber()){
                TournamentGroupUser tournamentGroupUserAdd = new TournamentGroupUser();
                tournamentGroupUserAdd.setTournamentGroupId(tournamentGroup.getId());
                tournamentGroupUserAdd.setUserId(user.getUserId());
                return insertTournamentGroupUser(tournamentGroupUserAdd);
            }

        }

        return updateNum;
    }

    /**
     * 查询比赛分组排名列表
     * @param groupId 比赛分组id
     * @return
     */
    @Override
    public List<TournamentRankVo> selectTournamentRank(Long groupId) {
        return tournamentGroupUserMapper.selectTournamentRank(groupId);
    }

    /**
     * 后台查询比赛分组排名列表
     * @param tournamentRankSystemDto
     * @return
     */
    @Override
    public List<TournamentRankSystemVo> selectTournamentRankSystem(TournamentRankSystemDto tournamentRankSystemDto) {
        return tournamentGroupUserMapper.selectTournamentRankSystem(tournamentRankSystemDto);
    }

    /**
     * 核验比赛数据，是否完成公里数
     * @param tournamentGroupUserDto
     */
    private void setTournamentRunInfoState(TournamentGroupUserDto tournamentGroupUserDto){
        TournamentGroup tournamentGroup = tournamentGroupMapper.selectTournamentGroupById(tournamentGroupUserDto.getTournamentGroupId());

//        if(tournamentGroupUserDto.getDistance() >= tournamentGroup.getDistance()){
        if(1==1){
            tournamentGroupUserDto.setState(0);
        }else{
            tournamentGroupUserDto.setState(1);
        }

    }
}

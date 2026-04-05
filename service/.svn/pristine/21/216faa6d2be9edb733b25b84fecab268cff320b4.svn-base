package

        com.ueit.running.service.impl;

import java.util.List;

import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ueit.running.mapper.UserWechatMapper;
import com.ueit.running.domain.UserWechat;
import com.ueit.running.service.IUserWechatService;

/**
 * 系统用户与微信用户关联Service业务层处理
 *
 * @author douwq
 * @date 2022-07-15
 */
@Service
public class UserWechatServiceImpl implements IUserWechatService {
    @Autowired
    private UserWechatMapper userWechatMapper;

    /**
     * 查询系统用户与微信用户关联
     *
     * @param id 系统用户与微信用户关联主键
     * @return 系统用户与微信用户关联
     */
    @Override
    public UserWechat selectUserWechatById(Long id) {
        return userWechatMapper.selectUserWechatById(id);
    }

    /**
     * 查询系统用户与微信用户关联列表
     *
     * @param userWechat 系统用户与微信用户关联
     * @return 系统用户与微信用户关联
     */
    @Override
    public List<UserWechat> selectUserWechatList(UserWechat userWechat) {
        return userWechatMapper.selectUserWechatList(userWechat);
    }

    /**
     * 新增系统用户与微信用户关联
     *
     * @param userWechat 系统用户与微信用户关联
     * @return 结果
     */
    @Override
    public int insertUserWechat(UserWechat userWechat) {
                    userWechat.setCreateTime(DateUtils.getNowDate());
            return userWechatMapper.insertUserWechat(userWechat);
    }

    /**
     * 修改系统用户与微信用户关联
     *
     * @param userWechat 系统用户与微信用户关联
     * @return 结果
     */
    @Override
    public int updateUserWechat(UserWechat userWechat) {
                    userWechat.setUpdateTime(DateUtils.getNowDate());
        return userWechatMapper.updateUserWechat(userWechat);
    }

    /**
     * 批量删除系统用户与微信用户关联
     *
     * @param ids 需要删除的系统用户与微信用户关联主键
     * @return 结果
     */
    @Override
    public int deleteUserWechatByIds(Long[]ids) {
        return userWechatMapper.deleteUserWechatByIds(ids);
    }

    /**
     * 删除系统用户与微信用户关联信息
     *
     * @param id 系统用户与微信用户关联主键
     * @return 结果
     */
    @Override
    public int deleteUserWechatById(Long id) {
        return userWechatMapper.deleteUserWechatById(id);
    }

    /**
     * 根据用户id 查询绑定信息
     * @param userId
     * @return
     */
    @Override
    public UserWechat selectUserWechatByUserId(Long userId) {
        return userWechatMapper.selectUserWechatByUserId(userId);
    }

    /**
     * 绑定用户账号与微信信息
     * @param userWechat
     * @return
     */
    @Override
    public int bindingWx(UserWechat userWechat) {
        UserWechat userWechatByUserId = userWechatMapper.selectUserWechatByUserId(userWechat.getUserId());
        if(userWechatByUserId != null){
            return updateUserWechat(userWechat);
        }else{
            return insertUserWechat(userWechat);
        }
    }

    @Override
    public int updateInfo(UserWechat userWechat, SysUser user) {
        UserWechat userWechatSelect = selectUserWechatByUserId(user.getUserId());
        if(userWechatSelect == null){
            return 0;
        }
        UserWechat userWechatUpdate = new UserWechat();
        userWechatUpdate.setId(userWechatSelect.getId());
        userWechatUpdate.setWeight(userWechat.getWeight());
        userWechatUpdate.setHeight(userWechat.getHeight());
        userWechatUpdate.setDistance(userWechat.getDistance());
        userWechatUpdate.setKcal(userWechat.getKcal());
        userWechatUpdate.setSex(userWechat.getSex());
        return updateUserWechat(userWechatUpdate);
    }
}

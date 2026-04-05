package com.ueit.running.mapper;

import java.util.List;

import com.ueit.running.domain.UserWechat;

/**
 * 系统用户与微信用户关联Mapper接口
 *
 * @author douwq
 * @date 2022-07-15
 */
public interface UserWechatMapper {
    /**
     * 查询系统用户与微信用户关联
     *
     * @param id 系统用户与微信用户关联主键
     * @return 系统用户与微信用户关联
     */
    public UserWechat selectUserWechatById(Long id);

    /**
     * 查询系统用户与微信用户关联列表
     *
     * @param userWechat 系统用户与微信用户关联
     * @return 系统用户与微信用户关联集合
     */
    public List<UserWechat> selectUserWechatList(UserWechat userWechat);

    /**
     * 新增系统用户与微信用户关联
     *
     * @param userWechat 系统用户与微信用户关联
     * @return 结果
     */
    public int insertUserWechat(UserWechat userWechat);

    /**
     * 修改系统用户与微信用户关联
     *
     * @param userWechat 系统用户与微信用户关联
     * @return 结果
     */
    public int updateUserWechat(UserWechat userWechat);

    /**
     * 删除系统用户与微信用户关联
     *
     * @param id 系统用户与微信用户关联主键
     * @return 结果
     */
    public int deleteUserWechatById(Long id);

    /**
     * 批量删除系统用户与微信用户关联
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteUserWechatByIds(Long[] ids);

    /**
     * 根据用户id 查询绑定信息
     * @param userId
     * @return
     */
    public UserWechat selectUserWechatByUserId(Long userId);
}

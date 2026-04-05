package

        com.ueit.system.service.impl;

import java.util.List;

import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import com.ueit.system.mapper.ClassHourUserMapper;
import com.ueit.system.domain.ClassHourUser;
import com.ueit.system.service.IClassHourUserService;

/**
 * 学生与课程关联Service业务层处理
 *
 * @author douwq
 * @date 2022-10-10
 */
@Service
public class ClassHourUserServiceImpl implements IClassHourUserService {
    @Autowired
    private ClassHourUserMapper classHourUserMapper;

    /**
     * 查询学生与课程关联
     *
     * @param userId 学生与课程关联主键
     * @return 学生与课程关联
     */
    @Override
    public ClassHourUser selectClassHourUserByUserId(Long userId) {
        return classHourUserMapper.selectClassHourUserByUserId(userId);
    }

    /**
     * 查询学生与课程关联列表
     *
     * @param classHourUser 学生与课程关联
     * @return 学生与课程关联
     */
    @Override
    public List<ClassHourUser> selectClassHourUserList(ClassHourUser classHourUser) {
        return classHourUserMapper.selectClassHourUserList(classHourUser);
    }

    /**
     * 新增学生与课程关联
     *
     * @param classHourUser 学生与课程关联
     * @return 结果
     */
    @Override
    public int insertClassHourUser(ClassHourUser classHourUser) {
            return classHourUserMapper.insertClassHourUser(classHourUser);
    }

    /**
     * 修改学生与课程关联
     *
     * @param classHourUser 学生与课程关联
     * @return 结果
     */
    @Override
    public int updateClassHourUser(ClassHourUser classHourUser) {
        return classHourUserMapper.updateClassHourUser(classHourUser);
    }

    /**
     * 批量删除学生与课程关联
     *
     * @param userIds 需要删除的学生与课程关联主键
     * @return 结果
     */
    @Override
    public int deleteClassHourUserByUserIds(Long[]userIds) {
        return classHourUserMapper.deleteClassHourUserByUserIds(userIds);
    }

    /**
     * 删除学生与课程关联信息
     *
     * @param userId 学生与课程关联主键
     * @return 结果
     */
    @Override
    public int deleteClassHourUserByUserId(Long userId) {
        return classHourUserMapper.deleteClassHourUserByUserId(userId);
    }

    /**
     * 保存用户与课程关联数据
     * @param classHourUser
     * @return
     */
    @Override
    public int saveInfo(ClassHourUser classHourUser) {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        classHourUser.setUserId(user.getUserId());
        ClassHourUser classHourUser1 = selectClassHourUserByUserId(user.getUserId());
        if(classHourUser1 != null){
            return updateClassHourUser(classHourUser);
        }else{
            return insertClassHourUser(classHourUser);
        }
    }
}

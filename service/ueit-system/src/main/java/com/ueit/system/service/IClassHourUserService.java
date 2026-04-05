package

        com.ueit.system.service;

import java.util.List;

import com.ueit.system.domain.ClassHourUser;

/**
 * 学生与课程关联Service接口
 *
 * @author douwq
 * @date 2022-10-10
 */
public interface IClassHourUserService {
    /**
     * 查询学生与课程关联
     *
     * @param userId 学生与课程关联主键
     * @return 学生与课程关联
     */
    public ClassHourUser selectClassHourUserByUserId(Long userId);

    /**
     * 查询学生与课程关联列表
     *
     * @param classHourUser 学生与课程关联
     * @return 学生与课程关联集合
     */
    public List<ClassHourUser> selectClassHourUserList(ClassHourUser classHourUser);

    /**
     * 新增学生与课程关联
     *
     * @param classHourUser 学生与课程关联
     * @return 结果
     */
    public int insertClassHourUser(ClassHourUser classHourUser);

    /**
     * 修改学生与课程关联
     *
     * @param classHourUser 学生与课程关联
     * @return 结果
     */
    public int updateClassHourUser(ClassHourUser classHourUser);

    /**
     * 批量删除学生与课程关联
     *
     * @param userIds 需要删除的学生与课程关联主键集合
     * @return 结果
     */
    public int deleteClassHourUserByUserIds(Long[] userIds);

    /**
     * 删除学生与课程关联信息
     *
     * @param userId 学生与课程关联主键
     * @return 结果
     */
    public int deleteClassHourUserByUserId(Long userId);

    /**
     * 保存用户与课程关联数据
     * @param classHourUser
     * @return
     */
    public int saveInfo(ClassHourUser classHourUser);
}

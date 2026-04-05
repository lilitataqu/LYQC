package

        com.ueit.running.service;

import java.util.List;

import com.ueit.running.domain.RunInfoExtend;

/**
 * 跑步数据扩展Service接口
 *
 * @author douwq
 * @date 2022-08-23
 */
public interface IRunInfoExtendService {
    /**
     * 查询跑步数据扩展
     *
     * @param id 跑步数据扩展主键
     * @return 跑步数据扩展
     */
    public RunInfoExtend selectRunInfoExtendById(Long id);

    /**
     * 查询跑步数据扩展列表
     *
     * @param runInfoExtend 跑步数据扩展
     * @return 跑步数据扩展集合
     */
    public List<RunInfoExtend> selectRunInfoExtendList(RunInfoExtend runInfoExtend);

    /**
     * 新增跑步数据扩展
     *
     * @param runInfoExtend 跑步数据扩展
     * @return 结果
     */
    public int insertRunInfoExtend(RunInfoExtend runInfoExtend);

    /**
     * 修改跑步数据扩展
     *
     * @param runInfoExtend 跑步数据扩展
     * @return 结果
     */
    public int updateRunInfoExtend(RunInfoExtend runInfoExtend);

    /**
     * 批量删除跑步数据扩展
     *
     * @param ids 需要删除的跑步数据扩展主键集合
     * @return 结果
     */
    public int deleteRunInfoExtendByIds(Long[] ids);

    /**
     * 删除跑步数据扩展信息
     *
     * @param id 跑步数据扩展主键
     * @return 结果
     */
    public int deleteRunInfoExtendById(Long id);
}

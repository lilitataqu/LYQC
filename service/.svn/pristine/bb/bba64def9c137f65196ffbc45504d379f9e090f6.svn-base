package

        com.ueit.running.service.impl;

import java.util.List;
        import com.ueit.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ueit.running.mapper.RunInfoExtendMapper;
import com.ueit.running.domain.RunInfoExtend;
import com.ueit.running.service.IRunInfoExtendService;

/**
 * 跑步数据扩展Service业务层处理
 *
 * @author douwq
 * @date 2022-08-23
 */
@Service
public class RunInfoExtendServiceImpl implements IRunInfoExtendService {
    @Autowired
    private RunInfoExtendMapper runInfoExtendMapper;

    /**
     * 查询跑步数据扩展
     *
     * @param id 跑步数据扩展主键
     * @return 跑步数据扩展
     */
    @Override
    public RunInfoExtend selectRunInfoExtendById(Long id) {
        return runInfoExtendMapper.selectRunInfoExtendById(id);
    }

    /**
     * 查询跑步数据扩展列表
     *
     * @param runInfoExtend 跑步数据扩展
     * @return 跑步数据扩展
     */
    @Override
    public List<RunInfoExtend> selectRunInfoExtendList(RunInfoExtend runInfoExtend) {
        return runInfoExtendMapper.selectRunInfoExtendList(runInfoExtend);
    }

    /**
     * 新增跑步数据扩展
     *
     * @param runInfoExtend 跑步数据扩展
     * @return 结果
     */
    @Override
    public int insertRunInfoExtend(RunInfoExtend runInfoExtend) {
                    runInfoExtend.setCreateTime(DateUtils.getNowDate());
            return runInfoExtendMapper.insertRunInfoExtend(runInfoExtend);
    }

    /**
     * 修改跑步数据扩展
     *
     * @param runInfoExtend 跑步数据扩展
     * @return 结果
     */
    @Override
    public int updateRunInfoExtend(RunInfoExtend runInfoExtend) {
                    runInfoExtend.setUpdateTime(DateUtils.getNowDate());
        return runInfoExtendMapper.updateRunInfoExtend(runInfoExtend);
    }

    /**
     * 批量删除跑步数据扩展
     *
     * @param ids 需要删除的跑步数据扩展主键
     * @return 结果
     */
    @Override
    public int deleteRunInfoExtendByIds(Long[]ids) {
        return runInfoExtendMapper.deleteRunInfoExtendByIds(ids);
    }

    /**
     * 删除跑步数据扩展信息
     *
     * @param id 跑步数据扩展主键
     * @return 结果
     */
    @Override
    public int deleteRunInfoExtendById(Long id) {
        return runInfoExtendMapper.deleteRunInfoExtendById(id);
    }
}

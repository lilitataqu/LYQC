package com.ueit.running.mapper;

import com.ueit.running.domain.dto.DeptWeekStatisticDto;
import com.ueit.running.domain.vo.DeptWeekStatistic;

import java.util.List;

/**
 * 本周各部门运动量Mapper接口
 *
 * @author douwq
 * @date 2022/8/2 10:54
 */
public interface DeptWeekStatisticMapper {

    /**
     * 查询本周各部门运动量列表
     *
     * @return 本周各部门运动量集合
     */
    public List<DeptWeekStatistic> selectDeptWeekStatisticList(DeptWeekStatisticDto deptWeekStatisticDto);

}

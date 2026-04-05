package com.ueit.running.service.impl;

import com.ueit.running.domain.dto.DeptWeekStatisticDto;
import com.ueit.running.domain.vo.DeptWeekStatistic;
import com.ueit.running.mapper.DeptWeekStatisticMapper;
import com.ueit.running.service.IDeptWeekStatisticService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 本周各学院运动量Service业务层处理
 *
 * @author douwq
 * @date 2022-08-02
 */
@Service
@AllArgsConstructor
public class DeptWeekStatisticServiceImpl implements IDeptWeekStatisticService {

    private final DeptWeekStatisticMapper deptWeekStatisticMapper;

    /**
     * 查询本周各学院运动量列表
     *
     * @param deptWeekStatisticDto 查询参数
     * @return 本周各学院运动量集合
     */
    @Override
    public List<DeptWeekStatistic> selectDeptWeekStatisticList(DeptWeekStatisticDto deptWeekStatisticDto) {
        return deptWeekStatisticMapper.selectDeptWeekStatisticList(deptWeekStatisticDto);
    }

}

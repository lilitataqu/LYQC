package com.ueit.running.service;

import com.ueit.running.domain.dto.CountStatisticDto;
import com.ueit.running.domain.dto.DeptWeekStatisticDto;
import com.ueit.running.domain.vo.DeptWeekStatistic;
import com.ueit.running.domain.vo.HomePageListVo;
import com.ueit.running.domain.vo.HomePageSumVo;

import java.util.List;


/**
 * 首页统计Service接口
 *
 * @author douwq
 * @date 2022-08-03
 */
public interface IHomeStatisticService {

    /**
     * 查询本周每日跑步人数
     *
     * @return 统计数据
     */
    public List selectUserCountListByDate(CountStatisticDto countStatisticDto);

    /**
     * 查询首页总和数据
     * @return
     */
    public HomePageSumVo selectHomePageSumInfo();

    /**
     * 查询首页本周和上周跑步数据
     * @return
     */
    public HomePageListVo selectHomePageInfoList();
}

package com.ueit.running.mapper;

import com.ueit.common.annotation.DataScope;
import com.ueit.running.domain.RunInfo;
import com.ueit.running.domain.dto.CountStatisticDto;
import com.ueit.running.domain.dto.DeptWeekStatisticDto;
import com.ueit.running.domain.vo.DeptWeekStatistic;
import com.ueit.running.domain.vo.HomePageSumVo;

import java.util.List;

/**
 * 首页统计Mapper接口
 *
 * @author douwq
 * @date 2022/8/2 10:54
 */
public interface HomeStatisticMapper {

    /**
     * 根据日期查询每日跑步人数
     *
     * @return 统计数据
     */
    public List selectUserCountListByDate(CountStatisticDto countStatisticDto);

    /**
     * 查询首页总和数据
     * @return
     */
    @DataScope(deptAlias = "d")
    public HomePageSumVo selectHomePageSumInfo(RunInfo runInfo);

    /**
     * 查询首页本周跑步数据
     * @return
     */
    @DataScope(deptAlias = "d")
    public List<HomePageSumVo> selectHomePageInfoListWeek(RunInfo runInfo);

    /**
     * 查询首页上周跑步数据
     * @return
     */
    @DataScope(deptAlias = "d")
    public List<HomePageSumVo> selectHomePageInfoListLastWeek(RunInfo runInfo);
}

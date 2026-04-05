package com.ueit.running.service;

import com.ueit.running.domain.RunInfo;
import com.ueit.running.domain.dto.RunInfoListDto;
import com.ueit.running.domain.vo.RunInfoDataVo;

import java.util.List;
import java.util.Map;

public interface IRunInfoDataService {
    /**
     * 查询跑步信息
     *
     * @param id 跑步信息主键
     * @return 跑步信息
     */
    public RunInfoDataVo selectRunInfoDataById(Long id);

    /**
     * 查询跑步信息列表
     *
     * @param runInfo 跑步信息查询项
     * @return 跑步信息集合
     */
    public List<RunInfoDataVo> selectRunInfoDataList(RunInfoListDto runInfo);

    /**
     * 查询跑步信息合计数据
     *
     * @param runInfo 跑步信息查询项
     * @return
     */
    public Map selectRunInfoDataListSum(RunInfoListDto runInfo);
}

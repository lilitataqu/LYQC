package com.ueit.running.service.impl;

import com.ueit.common.constant.SystemConfigKeyConstants;
import com.ueit.common.core.domain.entity.SysRole;
import com.ueit.common.core.domain.entity.SysUser;
import com.ueit.common.utils.SecurityUtils;
import com.ueit.running.domain.RunInfo;
import com.ueit.running.domain.dto.RunInfoListDto;
import com.ueit.running.domain.vo.RunInfoDataVo;
import com.ueit.running.mapper.RunInfoDataMapper;
import com.ueit.running.service.IRunInfoDataService;
import com.ueit.system.service.ISysConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RunInfoDataServiceImpl implements IRunInfoDataService {

    @Autowired
    private  RunInfoDataMapper runInfoDataMapper;
    @Autowired
    private ISysConfigService configService;

    /**
     * 查询跑步信息
     *
     * @param id 跑步信息主键
     * @return 跑步信息
     */
    @Override
    public RunInfoDataVo selectRunInfoDataById(Long id) {



        return runInfoDataMapper.selectRunInfoById(id);
    }

    /**
     * 查询跑步信息列表
     *
     * @param runInfo 跑步信息
     * @return 跑步信息集合
     */
    @Override
    public List<RunInfoDataVo> selectRunInfoDataList(RunInfoListDto runInfo) {
        // 判断用户是否包含教师角色
        SysUser user = SecurityUtils.getLoginUser().getUser();
        String teacherRoleidString = configService.selectConfigByKey(SystemConfigKeyConstants.TEACHER_ROLEID);
        long teacherRoleid = Long.parseLong(teacherRoleidString);
        for (SysRole role : user.getRoles()) {
            if (role.getRoleId() == teacherRoleid){
                runInfo.setTeacher(true);
                runInfo.setTeacherUserId(user.getUserId());
            }
        }

        // 设置学期编码
        String classSemester = configService.selectConfigByKey(SystemConfigKeyConstants.CLASS_SEMESTER);
        runInfo.setSemester(classSemester);
        return runInfoDataMapper.selectRunInfoList(runInfo);
    }

    /**
     * 查询跑步信息合计数据
     *
     * @param runInfo 跑步信息查询项
     * @return
     */
    @Override
    public Map selectRunInfoDataListSum(RunInfoListDto runInfo) {
        return runInfoDataMapper.selectRunInfoListSum(runInfo);
    }
}

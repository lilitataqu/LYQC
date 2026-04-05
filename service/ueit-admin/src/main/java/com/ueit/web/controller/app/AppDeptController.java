package com.ueit.web.controller.app;

import com.ueit.common.core.domain.AjaxResult;
import com.ueit.system.service.ISysDeptService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

/**
 * @Author: douwq
 * @Description: 部门数据接口
 * @Date:Create：in 2022/9/27 11:59
 */
@RestController
@RequestMapping("/appDept")
@AllArgsConstructor
public class AppDeptController {
    private final ISysDeptService sysDeptService;


    /**
     * 查询全部学校
     * @return 学校列表
     */
    @PostMapping("/schoolList")
    public AjaxResult selectSchoolList(){
        return AjaxResult.success(sysDeptService.selectSchoolList());
    }

    /**
     * 根据学校deptId 查询该学校下的全部分院
     * @return 分院列表
     */
    @PostMapping("/branchCourtsList")
    public AjaxResult selectBranchCourtsList(@RequestBody Long deptId){
        return AjaxResult.success(sysDeptService.selectBranchCourtsList(deptId));
    }
}

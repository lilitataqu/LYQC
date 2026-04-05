package com.ueit.web.controller.running;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;

import com.ueit.running.domain.dto.RunInfoListDto;
import com.ueit.running.domain.vo.RunInfoDataVo;
import com.ueit.running.service.IRunInfoDataService;
import com.ueit.system.domain.ClassHour;
import com.ueit.system.service.IClassHourService;
import com.ueit.system.service.IClassHourUserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ueit.common.annotation.Log;
import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import com.ueit.common.enums.BusinessType;
import com.ueit.running.domain.RunInfo;
import com.ueit.running.service.IRunInfoService;
import com.ueit.common.utils.poi.ExcelUtil;
import com.ueit.common.core.page.TableDataInfo;

/**
 * 跑步信息Controller
 *
 * @author douwq
 * @date 2022-07-07
 */
@RestController
@RequestMapping("/running/running")
public class RunInfoController extends BaseController
{
    @Autowired
    private IRunInfoService runInfoService;
    @Autowired
    private IRunInfoDataService runInfoDataService;
    @Autowired
    private IClassHourService classHourService;

    /**
     * 查询跑步信息列表
     * @param runInfo 跑步信息查询项
     * @return
     */
    @PreAuthorize("@ss.hasPermi('running:running:list')")
    @GetMapping("/list")
    public TableDataInfo list(RunInfoListDto runInfo)
    {
        startPage();
        List<RunInfoDataVo> list = runInfoDataService.selectRunInfoDataList(runInfo);
        return getDataTable(list);
    }

    /**
     * 查询跑步信息合计数据
     * @param runInfo 跑步信息查询项
     * @return
     */
    @PreAuthorize("@ss.hasPermi('running:running:list')")
    @GetMapping("/listSum")
    public AjaxResult listSum(RunInfoListDto runInfo)
    {
        Map sumInfo = runInfoDataService.selectRunInfoDataListSum(runInfo);
        return AjaxResult.success(sumInfo);
    }

    /**
     * 导出跑步信息列表
     */
    @PreAuthorize("@ss.hasPermi('running:running:export')")
    @Log(title = "跑步信息", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, RunInfoListDto runInfo)
    {
        List<RunInfoDataVo> list = runInfoDataService.selectRunInfoDataList(runInfo);
        ExcelUtil<RunInfoDataVo> util = new ExcelUtil<RunInfoDataVo>(RunInfoDataVo.class);
        util.exportExcel(response, list, "跑步信息数据");
    }
//    public void export(HttpServletResponse response, RunInfo runInfo)
//    {
//        List<RunInfo> list = runInfoService.selectRunInfoList(runInfo);
//        ExcelUtil<RunInfo> util = new ExcelUtil<RunInfo>(RunInfo.class);
//        util.exportExcel(response, list, "跑步信息数据");
//    }

    /**
     * 获取跑步信息详细信息
     */
    @PreAuthorize("@ss.hasPermi('running:running:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return AjaxResult.success(runInfoService.selectRunInfoById(id));
    }

    /**
     * 新增跑步信息
     */
    @PreAuthorize("@ss.hasPermi('running:running:add')")
    @Log(title = "跑步信息", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody RunInfo runInfo)
    {
        return toAjax(runInfoService.insertRunInfo(runInfo));
    }

    /**
     * 修改跑步信息
     */
    @PreAuthorize("@ss.hasPermi('running:running:edit')")
    @Log(title = "跑步信息", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody RunInfo runInfo)
    {
        return toAjax(runInfoService.updateRunInfo(runInfo));
    }

    /**
     * 删除跑步信息
     */
    @PreAuthorize("@ss.hasPermi('running:running:remove')")
    @Log(title = "跑步信息", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(runInfoService.deleteRunInfoByIds(ids));
    }

    /**
     * 查询当前登录老师的所有课程
     * @return
     */
    @PreAuthorize("@ss.hasPermi('running:running:class')")
    @GetMapping("/getClassHour")
    public AjaxResult getClassHour()
    {
        List<ClassHour> classHourByUserId = classHourService.getClassHourByUserId();
        return AjaxResult.success(classHourByUserId);
    }
}

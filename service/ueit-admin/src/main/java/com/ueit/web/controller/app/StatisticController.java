package com.ueit.web.controller.app;

import com.ueit.common.core.controller.BaseController;
import com.ueit.common.core.domain.AjaxResult;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: douwq
 * @Description: 统计相关接口
 * @Date:Create：in 2022/7/21 15:04
 */

@RestController
@RequestMapping("/statistic" )
@AllArgsConstructor
public class StatisticController extends BaseController {



    /**
     * 获取首页进度信息
     */
    @PreAuthorize("@ss.hasPermi('app')" )
    @PostMapping("/home")
    public AjaxResult home() {
        return AjaxResult.success(null);
    }

}

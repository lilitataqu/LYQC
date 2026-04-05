package com.ueit.running.domain.dto;

import lombok.Data;

/**
 * @Author: douwq
 * @Description: 查询本周各学员运动量参数
 * @Date:Create：in 2022/8/1 17:04
 */
@Data
public class UserWeekStatisticDto {

    private String orderColumn;

    private String orderType;

    private Long deptId;

    private Long userId;
}

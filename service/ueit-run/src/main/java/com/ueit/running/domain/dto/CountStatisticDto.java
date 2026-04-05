package com.ueit.running.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * @Author: douwq
 * @Description: 统计参数
 * @Date:Create：in 2022/8/3 17:58
 */
@Data
public class CountStatisticDto {

    private Date startDate;

    private Date endDate;
}

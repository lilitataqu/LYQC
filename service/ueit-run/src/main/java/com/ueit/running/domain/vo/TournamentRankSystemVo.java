package com.ueit.running.domain.vo;

import com.ueit.common.annotation.Excel;
import lombok.Data;

import java.time.LocalTime;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/12/14 15:03
 */
@Data
public class TournamentRankSystemVo extends TournamentRankVo {

   @Excel(name = "名次")
   private Integer num;

   @Excel(name = "手机号")
   private String phonenumber;
}

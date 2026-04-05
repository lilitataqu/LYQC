package com.ueit.running.domain.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalTime;
import java.util.Date;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/12/14 10:05
 */
@Data
public class TournamentMyVo extends TournamentUserVo {

    /**
     * 比赛用时
     */
    private LocalTime time;

    /**
     * 结束跑步时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss" )
    private Date updateTime;
}

package com.ueit.running.domain.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ueit.common.annotation.Excel;
import lombok.Data;

import java.util.Date;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/12/5 14:45
 */
@Data
public class TournamentUserVo {

    /**
     * 比赛ID
     */
    private Long id;

    /**
     * 分组ID
     */
    private Long groupId;

    /**
     * 比赛名称
     */
    private String name;

    /**
     * 封面地址
     */
    private String cover;

    /**
     * 比赛开始时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date tournamentTimeStart;

    /**
     * 比赛结束时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date tournamentTimeEnd;

    /**
     * 分组名称
     */
    private String groupName;

    /**
     * 0 女， 1 男
     */
    private Integer sex;

    /**
     * 距离（米）
     */
    private Long distance;

    /** 状态 */
    private Integer state;
}

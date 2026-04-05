package com.ueit.running.domain;

import com.alibaba.fastjson2.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ueit.common.annotation.Excel;
import com.ueit.common.core.domain.BaseEntity;

/**
 * 比赛分组对象 tb_tournament_group
 *
 * @author douwq
 * @date 2022-11-30
 */
public class TournamentGroup extends BaseEntity {
    private static final long serialVersionUID = 1L;

    /**
     * 比赛分组ID
     */
    private Long id;

    /**
     * 比赛ID
     */
    @Excel(name = "比赛ID")
    private Long tournamentId;

    /**
     * 分组名称
     */
    @Excel(name = "分组名称")
    private String name;

    /**
     * 0 女， 1 男
     */
    @Excel(name = "0 女， 1 男")
    private Boolean sex;

    /**
     * 距离（米）
     */
    @Excel(name = "距离", readConverterExp = "米=")
    private Long distance;

    /**
     * 0 未删除；1 删除
     */
    @Excel(name = "0 未删除；1 删除")
    private Integer delState;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setTournamentId(Long tournamentId) {
        this.tournamentId = tournamentId;
    }

    public Long getTournamentId() {
        return tournamentId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    public Boolean getSex() {
        return sex;
    }

    public void setDistance(Long distance) {
        this.distance = distance;
    }

    public Long getDistance() {
        return distance;
    }

    public void setDelState(Integer delState) {
        this.delState = delState;
    }

    public Integer getDelState() {
        return delState;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("tournamentId", getTournamentId())
                .append("name", getName())
                .append("sex", getSex())
                .append("distance", getDistance())
                .append("delState", getDelState())
                .append("createBy", getCreateBy())
                .append("createTime", getCreateTime())
                .append("updateBy", getUpdateBy())
                .append("updateTime", getUpdateTime())
                .toString();
    }
}

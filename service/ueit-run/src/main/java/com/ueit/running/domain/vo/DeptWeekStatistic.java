package com.ueit.running.domain.vo;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ueit.common.annotation.Excel;
import com.ueit.common.core.domain.BaseEntity;

/**
 * 统计本周各部门运动量对象 ls_dept_week_statistic
 *
 * @author douwq
 * @date 2022-08-02
 */
public class DeptWeekStatistic extends BaseEntity {
    private static final long serialVersionUID = 1L;

    /**
     * $column.columnComment
     */
    private Long id;

    /**
     * 部门ID
     */
    @Excel(name = "部门ID")
    private Long deptId;

    /**
     * 部门名称
     */
    @Excel(name = "部门名称")
    private String deptName;

    /**
     * 运动距离
     */
    @Excel(name = "运动距离")
    private Long distance;

    /**
     * 消耗卡路里
     */
    @Excel(name = "消耗卡路里")
    private Long kcal;

    /**
     * 运动次数
     */
    @Excel(name = "运动次数")
    private Long runCount;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public Long getDeptId() {
        return deptId;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDistance(Long distance) {
        this.distance = distance;
    }

    public Long getDistance() {
        return distance;
    }

    public void setKcal(Long kcal) {
        this.kcal = kcal;
    }

    public Long getKcal() {
        return kcal;
    }

    public void setRunCount(Long runCount) {
        this.runCount = runCount;
    }

    public Long getRunCount() {
        return runCount;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("deptId", getDeptId())
                .append("deptName", getDeptName())
                .append("distance", getDistance())
                .append("kcal", getKcal())
                .append("runCount", getRunCount())
                .toString();
    }
}

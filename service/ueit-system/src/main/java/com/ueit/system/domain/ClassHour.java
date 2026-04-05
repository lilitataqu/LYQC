package com.ueit.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ueit.common.annotation.Excel;
import com.ueit.common.core.domain.BaseEntity;

/**
 * 课程信息对象 tb_class_hour
 *
 * @author douwq
 * @date 2022-10-09
 */
public class ClassHour extends BaseEntity {
    private static final long serialVersionUID = 1L;

    /**  */
    private Long id;

    /**
     * 教师ID（用户ID）
     */
    @Excel(name = "教师ID")
    private Long userId;

    /**
     * 教师名称
     */
    @Excel(name = "教师")
    private String userNickName;

    /**
     * 课程名称
     */
    @Excel(name = "课程名称")
    private String name;

    /**
     * 星期
     */
    @Excel(name = "星期")
    private String week;

    /**
     * 课程时间
     */
    @Excel(name = "课程时间")
    private String classHour;

    /**
     * 学期（202201表示2022年第一学期）
     */
    @Excel(name = "学期", readConverterExp = "2=02201表示2022年第一学期")
    private String semester;

    /**  */
    @Excel(name = "")
    private String str1;

    /**  */
    @Excel(name = "")
    private String str2;

    /**  */
    @Excel(name = "")
    private Long i1;

    /**
     * $column.columnComment
     */
    @Excel(name = "${comment}", readConverterExp = "$column.readConverterExp()")
    private Long i2;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUserNickName() {
        return userNickName;
    }

    public void setUserNickName(String userNickName) {
        this.userNickName = userNickName;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setWeek(String week) {
        this.week = week;
    }

    public String getWeek() {
        return week;
    }

    public void setClassHour(String classHour) {
        this.classHour = classHour;
    }

    public String getClassHour() {
        return classHour;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getSemester() {
        return semester;
    }

    public void setStr1(String str1) {
        this.str1 = str1;
    }

    public String getStr1() {
        return str1;
    }

    public void setStr2(String str2) {
        this.str2 = str2;
    }

    public String getStr2() {
        return str2;
    }

    public void seti1(Long i1) {
        this.i1 = i1;
    }

    public Long geti1() {
        return i1;
    }

    public void seti2(Long i2) {
        this.i2 = i2;
    }

    public Long geti2() {
        return i2;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("userId", getUserId())
                .append("userNickName", getUserNickName())
                .append("name", getName())
                .append("week", getWeek())
                .append("classHour", getClassHour())
                .append("semester", getSemester())
                .append("str1", getStr1())
                .append("str2", getStr2())
                .append("i1", geti1())
                .append("i2", geti2())
                .toString();
    }
}

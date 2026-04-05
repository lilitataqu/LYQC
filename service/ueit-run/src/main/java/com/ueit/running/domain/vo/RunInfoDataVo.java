package com.ueit.running.domain.vo;

import com.ueit.common.annotation.Excel;
import com.ueit.running.domain.RunInfo;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

//跑步管理-跑步数据
public class RunInfoDataVo extends RunInfo {

    /** 学号 */
    @Excel(name = "学号", sort = 1)
    private String studentId;

    /** 用户name */
    @Excel(name = "姓名", sort = 2)
    private String nickName;


    /** 用户部门名称 */
    @Excel(name = "学院名称", sort = 3)
    private String deptName;

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("nickName", getId())
                .append("deptName", getUserId())
                .toString();
    }
}

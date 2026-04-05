package com.ueit.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ueit.common.annotation.Excel;
import com.ueit.common.core.domain.BaseEntity;

/**
 * 学生与课程关联对象 tb_class_hour_user
 *
 * @author douwq
 * @date 2022-10-10
 */
public class ClassHourUser extends BaseEntity
        {
private static final long serialVersionUID=1L;

    /** 学生ID */
    private Long userId;

    /** 课程ID */
    private Long classId;

    public void setUserId(Long userId)
            {
            this.userId = userId;
            }

    public Long getUserId()
            {
            return userId;
            }
    public void setClassId(Long classId)
            {
            this.classId = classId;
            }

    public Long getClassId()
            {
            return classId;
            }

@Override
public String toString(){
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("userId" ,getUserId())
            .append("classId" ,getClassId())
        .toString();
        }
        }

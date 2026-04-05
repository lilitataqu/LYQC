package com.ueit.running.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ueit.common.annotation.Excel;
import com.ueit.common.core.domain.BaseEntity;

/**
 * 跑步数据扩展对象 tb_run_info_extend
 *
 * @author douwq
 * @date 2022-08-23
 */
public class RunInfoExtend extends BaseEntity
        {
private static final long serialVersionUID=1L;

    /** $column.columnComment */
    private Long id;

    /** run_info表id */
            @Excel(name = "run_info表id" )
    private Long runInfoId;

    /** 加速计数据 */
            @Excel(name = "加速计数据" )
    private String accelerometer;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private String str1;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private String str2;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private Long int1;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private Long int2;

    public void setId(Long id)
            {
            this.id = id;
            }

    public Long getId()
            {
            return id;
            }
    public void setRunInfoId(Long runInfoId)
            {
            this.runInfoId = runInfoId;
            }

    public Long getRunInfoId()
            {
            return runInfoId;
            }
    public void setAccelerometer(String accelerometer)
            {
            this.accelerometer = accelerometer;
            }

    public String getAccelerometer()
            {
            return accelerometer;
            }
    public void setStr1(String str1)
            {
            this.str1 = str1;
            }

    public String getStr1()
            {
            return str1;
            }
    public void setStr2(String str2)
            {
            this.str2 = str2;
            }

    public String getStr2()
            {
            return str2;
            }
    public void setInt1(Long int1)
            {
            this.int1 = int1;
            }

    public Long getInt1()
            {
            return int1;
            }
    public void setInt2(Long int2)
            {
            this.int2 = int2;
            }

    public Long getInt2()
            {
            return int2;
            }

@Override
public String toString(){
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id" ,getId())
            .append("runInfoId" ,getRunInfoId())
            .append("accelerometer" ,getAccelerometer())
            .append("str1" ,getStr1())
            .append("str2" ,getStr2())
            .append("int1" ,getInt1())
            .append("int2" ,getInt2())
            .append("createBy" ,getCreateBy())
            .append("createTime" ,getCreateTime())
            .append("updateBy" ,getUpdateBy())
            .append("updateTime" ,getUpdateTime())
        .toString();
        }
        }

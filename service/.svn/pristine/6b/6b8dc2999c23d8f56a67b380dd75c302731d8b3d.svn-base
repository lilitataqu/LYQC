package com.ueit.running.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ueit.common.annotation.Excel;
import com.ueit.common.core.domain.BaseEntity;

/**
 * 系统用户与微信用户关联对象 user_wechat
 *
 * @author douwq
 * @date 2022-07-15
 */
public class UserWechat extends BaseEntity
        {
private static final long serialVersionUID=1L;

    /** ID */
    private Long id;

    /** 用户表id */
            @Excel(name = "用户表id" )
    private Long userId;

    /** 微信用户openid */
            @Excel(name = "微信用户openid" )
    private String wxOpenid;

    /** 用户在开放平台的唯一标识符 */
            @Excel(name = "用户在开放平台的唯一标识符" )
    private String unionid;

    /** 体重Kg */
            @Excel(name = "体重Kg" )
    private Long weight;

    /** 身高cm */
            @Excel(name = "身高cm" )
    private Long height;

    /** 路程目标 */
            @Excel(name = "路程目标" )
    private Long distance;

    /** 卡路里目标 */
            @Excel(name = "卡路里目标" )
    private Long kcal;

    /** 性别 */
            @Excel(name = "性别" )
    private Boolean sex;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private String str1s;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private String str2s;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private Long int1i;

    /** $column.columnComment */
            @Excel(name = "${comment}" , readConverterExp = "$column.readConverterExp()" )
    private Long int2i;

    public void setId(Long id)
            {
            this.id = id;
            }

    public Long getId()
            {
            return id;
            }
    public void setUserId(Long userId)
            {
            this.userId = userId;
            }

    public Long getUserId()
            {
            return userId;
            }
    public void setWxOpenid(String wxOpenid)
            {
            this.wxOpenid = wxOpenid;
            }

    public String getWxOpenid()
            {
            return wxOpenid;
            }
    public void setUnionid(String unionid)
            {
            this.unionid = unionid;
            }

    public String getUnionid()
            {
            return unionid;
            }
    public void setWeight(Long weight)
            {
            this.weight = weight;
            }

    public Long getWeight()
            {
            return weight;
            }
    public void setHeight(Long height)
            {
            this.height = height;
            }

    public Long getHeight()
            {
            return height;
            }
    public void setDistance(Long distance)
            {
            this.distance = distance;
            }

    public Long getDistance()
            {
            return distance;
            }
    public void setKcal(Long kcal)
            {
            this.kcal = kcal;
            }

    public Long getKcal()
            {
            return kcal;
            }
    public void setSex(Boolean sex)
            {
            this.sex = sex;
            }

    public Boolean getSex()
            {
            return sex;
            }
    public void setStr1s(String str1s)
            {
            this.str1s = str1s;
            }

    public String getStr1s()
            {
            return str1s;
            }
    public void setStr2s(String str2s)
            {
            this.str2s = str2s;
            }

    public String getStr2s()
            {
            return str2s;
            }
    public void setInt1i(Long int1i)
            {
            this.int1i = int1i;
            }

    public Long getInt1i()
            {
            return int1i;
            }
    public void setInt2i(Long int2i)
            {
            this.int2i = int2i;
            }

    public Long getInt2i()
            {
            return int2i;
            }

@Override
public String toString(){
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id" ,getId())
            .append("userId" ,getUserId())
            .append("wxOpenid" ,getWxOpenid())
            .append("unionid" ,getUnionid())
            .append("weight" ,getWeight())
            .append("height" ,getHeight())
            .append("distance" ,getDistance())
            .append("kcal" ,getKcal())
            .append("sex" ,getSex())
            .append("createBy" ,getCreateBy())
            .append("createTime" ,getCreateTime())
            .append("updateBy" ,getUpdateBy())
            .append("updateTime" ,getUpdateTime())
            .append("str1s" ,getStr1s())
            .append("str2s" ,getStr2s())
            .append("int1i" ,getInt1i())
            .append("int2i" ,getInt2i())
        .toString();
        }
        }

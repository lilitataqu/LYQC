package com.ueit.web.controller.vo;

import cn.hutool.json.JSONUtil;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.ueit.common.annotation.Excel;
import lombok.Data;

import java.text.NumberFormat;
import java.time.LocalTime;
import java.util.List;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/12/16 17:27
 */
@Data
public class RunInfoTournamentVo {

    private static final long serialVersionUID = 1L;

    /** $column.columnComment */
    private Long id;

    /** 用户id */
    @Excel(name = "用户id")
    private Long userId;

    /** 跑步时长 */
    @JsonFormat(pattern = "HH:mm:ss")
    @Excel(name = "跑步时长", width = 30, dateFormat = "HH:mm:ss")
    private LocalTime time;

    /** 平均配速 */
    @Excel(name = "平均配速")
    private String speed;

    /** 卡路里 */
    @Excel(name = "卡路里")
    private String kcal;

    /** 距离 */
    @Excel(name = "距离")
    private String distance;

    /** 公里速度 */
    @Excel(name = "公里速度")
    private List kmSpeed;

    /** 路径定位 */
    @Excel(name = "路径定位")
    private List points;

    /** 海拔 */
    @Excel(name = "海拔")
    private List altitude;

    /** 爬升高度 */
    @Excel(name = "爬升高度")
    private Long altitudeSum;

    /** 跑步类型 */
    @Excel(name = "跑步类型")
    private Integer runType;

    public void setKcal(Long kcal) {
        this.kcal = longConverString(kcal);
    }

    public void setDistance(Long distance) {
        this.distance = longConverString(distance);
    }

    public void setKmSpeed(String kmSpeed) {
        this.kmSpeed = JSONUtil.parseArray(kmSpeed);
    }

    public void setPoints(String points) {
        this.points = JSONUtil.parseArray(points);
    }

    public void setAltitude(String altitude) {
        this.altitude = JSONUtil.parseArray(altitude);
    }

    public String longConverString(Long num){
        // 创建一个数值格式化对象
        NumberFormat numberFormat = NumberFormat.getInstance();
        // 设置精确到小数点后2位
        numberFormat.setMaximumFractionDigits(2);
        return numberFormat.format((float)num/(float)1000);
    }
}

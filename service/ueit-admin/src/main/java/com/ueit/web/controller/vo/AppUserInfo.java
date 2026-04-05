package com.ueit.web.controller.vo;

import com.ueit.running.domain.UserWechat;
import lombok.Data;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/7/15 17:03
 */
@Data
public class AppUserInfo extends UserWechat {
    private String nickName;
    private String avatar;
    private String studentId;
    private String deptName;
    private String className;
}

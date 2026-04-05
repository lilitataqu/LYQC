package com.ueit.web.controller.vo;

import com.ueit.common.xss.Xss;
import com.ueit.running.domain.UserWechat;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * @Author: douwq
 * @Description: 用户信息App新增编辑数据传输对象
 * @Date:Create：in 2022/9/26 9:58
 */
@Data
public class UserInfoEditInfoDto extends UserWechat {
    @Xss(message = "用户昵称不能包含脚本字符" )
    @Size(min = 0, max = 10, message = "姓名长度不能超过10个字符" )
    private String nickName;

    @Size(min = 0, max = 30, message = "学号长度不能超过30个字符" )
    private String studentId;

    private Long deptId;
}

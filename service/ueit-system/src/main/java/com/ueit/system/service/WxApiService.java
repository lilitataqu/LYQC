package com.ueit.system.service;

import com.ueit.system.domain.dto.wx.GetUserPhoneNumberParams;

/**
 * 微信API接口
 *
 * @author douwq
 * @date 2022-07-11
 */
public interface WxApiService
{
    /**
     * 获取微信token
     */
    public String getToken();

    /**
     * 获取微信用户手机号
     * @param code
     * @return 不带区号的手机号
     */
    public String getUserPhone(GetUserPhoneNumberParams getUserPhoneNumberParams);
}

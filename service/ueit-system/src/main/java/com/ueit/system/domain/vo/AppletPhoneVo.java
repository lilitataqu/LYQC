package com.ueit.system.domain.vo;

import lombok.Data;

@Data
public class AppletPhoneVo {
   public String encryptedData;
   public String iv;
   public String sessionKey;
   public String uid;
   public String openId;
}

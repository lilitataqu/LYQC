package com.ueit.system.domain.dto.wx;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/7/11 15:21
 */
public class GetUserPhoneNumber {

    /**
     * errcode : 0
     * errmsg : ok
     * phone_info : {"phoneNumber":"18339907936","purePhoneNumber":"18339907936","countryCode":"86","watermark":{"timestamp":1657521830,"appid":"wx2edf46afcf6a0276"}}
     */

    private int errcode;
    private String errmsg;
    private PhoneInfoBean phone_info;

    public int getErrcode() {
        return errcode;
    }

    public void setErrcode(int errcode) {
        this.errcode = errcode;
    }

    public String getErrmsg() {
        return errmsg;
    }

    public void setErrmsg(String errmsg) {
        this.errmsg = errmsg;
    }

    public PhoneInfoBean getPhone_info() {
        return phone_info;
    }

    public void setPhone_info(PhoneInfoBean phone_info) {
        this.phone_info = phone_info;
    }

    public static class PhoneInfoBean {
        /**
         * phoneNumber : 18339907936
         * purePhoneNumber : 18339907936
         * countryCode : 86
         * watermark : {"timestamp":1657521830,"appid":"wx2edf46afcf6a0276"}
         */

        private String phoneNumber;
        private String purePhoneNumber;
        private String countryCode;
        private WatermarkBean watermark;

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
        }

        public String getPurePhoneNumber() {
            return purePhoneNumber;
        }

        public void setPurePhoneNumber(String purePhoneNumber) {
            this.purePhoneNumber = purePhoneNumber;
        }

        public String getCountryCode() {
            return countryCode;
        }

        public void setCountryCode(String countryCode) {
            this.countryCode = countryCode;
        }

        public WatermarkBean getWatermark() {
            return watermark;
        }

        public void setWatermark(WatermarkBean watermark) {
            this.watermark = watermark;
        }

        public static class WatermarkBean {
            /**
             * timestamp : 1657521830
             * appid : wx2edf46afcf6a0276
             */

            private int timestamp;
            private String appid;

            public int getTimestamp() {
                return timestamp;
            }

            public void setTimestamp(int timestamp) {
                this.timestamp = timestamp;
            }

            public String getAppid() {
                return appid;
            }

            public void setAppid(String appid) {
                this.appid = appid;
            }
        }
    }
}

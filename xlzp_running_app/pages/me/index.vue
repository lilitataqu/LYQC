<template>
	<view>
		<view class="bg-white">
			<view v-if="userInfo.nickName == null">
				<view class="flex padding solid-bottom">
					<view class="flex-sub"></view>
					<view class="flex-sub"><button class="cu-btn bg-green round lg" @tap="getUserInfoLogin">授权登录</button></view>
					<view class="flex-sub"></view>
				</view>
			</view>
			<view v-else>
				<view class="flex padding solid-bottom">
					<view class="flex-twice">
						<navigator hover-class="none" @tap="click" url="../setting/index">
							<view class="text-xxl padding-left padding-top-sm">
								<text class="text-black text-bold">{{ userInfo.nickName }}</text>
							</view>
							<view class="padding-left padding-top-xs">
								学号：{{ userInfo.studentId }}
							</view>
						</navigator>
					</view>
					<view style="padding-right: 30rpx;">
						<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar" style="padding:0;">
							<image v-if="userInfo.avatarUrl == ''" class="cu-avatar xl" src="/static/icon/upload_img.png"></image>
							<image v-else class="cu-avatar xl" :src="userInfo.avatarUrl"></image>
						</button>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-list menu sm-border card-menu margin-top">
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" @tap="click" url="../history/index">
					<text class="cuIcon-countdown text-cyan"></text>
					<text class="text-grey">跑步记录</text>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" @tap="click" url="../game/my_game">
					<text class="cuIcon-countdown text-cyan"></text>
					<text class="text-grey">比赛记录</text>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" @tap="click" url="../bmi/index">
					<text class="cuIcon-hot text-red"></text>
					<text class="text-grey">BMI计算</text>
				</navigator>
			</view>
			<!-- <view class="cu-item arrow">
                <navigator class="content" hover-class="none" @tap="click" url="../bmp/index">
                    <text class="cuIcon-like text-pink"></text>
                    <text class="text-grey">心率测量</text>
                </navigator>
            </view> -->
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" @tap="click" url="../setting/index">
					<text class="cuIcon-settings text-grey"></text>
					<text class="text-grey">程序设置</text>
				</navigator>
			</view>
			<!-- <view class="cu-item arrow">
                <button class="cu-btn content" open-type="contact" @tap="click">
                    <text class="cuIcon-service text-olive"></text>
                    <text class="text-grey">联系客服</text>
                </button>
            </view> -->
			<view class="cu-item arrow">
				<navigator class="content" hover-class="none" @tap="click" url="../aboutus/index">
					<text class="cuIcon-info text-orange"></text>
					<text class="text-grey">关于我们</text>
				</navigator>
			</view>
			<!-- <view class="cu-item arrow">
				<navigator class="content" hover-class="none" @tap="click" url="/page_run/distance/distance">
					<text class="cuIcon-info text-orange"></text>
					<text class="text-grey">测试</text>
				</navigator>
			</view> -->
		</view>
	</view>
</template>

<script>
// pages/me/index.js
import { getUserInfoCache } from '@/utils/userInfoUtils.js';
import config from '@/path/config.js';
import { getToken } from '@/path/auth.js';
import { apiUserInfo } from '@/utils/userInfoUtils.js';
const app = getApp();
export default {
	data() {
		return {
			userInfo: {
				nickName: null,
				avatarUrl: '',
				studentId: ''
			},

			hasUserInfo: false
		};
	},
	onLoad: function(options) {
		uni.setNavigationBarTitle({
			title: '我'
		});		
	},
	onShow() {
		let userInfo = getUserInfoCache();
		this.userInfo.nickName = userInfo.userName;
		this.userInfo.studentId = userInfo.studentId != null ? userInfo.studentId : '';
		this.userInfo.avatarUrl = userInfo.avatarUrl;
		if (uni.getStorageInfoSync().keys.indexOf('userInfo') != -1) {
			let userInfo = uni.getStorageSync('userInfo');
			this.setData({
				userInfo: userInfo
			});
		}
	},
	methods: {
		/* getUserInfoLogin() {
            uni.getUserProfile({
                desc: '用于设置页显示昵称与头像'
            }).then((res) => {
                if (res.errMsg == 'getUserProfile:ok') {
                    console.log('* 用户同意授权UserInfo');
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                    uni.setStorageSync('userInfo', res.userInfo);
                } else {
                    console.warn('* 用户拒绝授权UserInfo');
                }
            });
        }, */
		getUserInfoLogin() {
			uni.navigateTo({
				url: '/pages/login/index'
			});
		},

		click() {
			this.vibrateFunc(1);
		},

		vibrateFunc(mode) {
			if (uni.getStorageSync('vibrate')) {
				if (mode == 1) {
					uni.vibrateShort({
						complete: res => {}
					});
				}

				if (mode == 2) {
					uni.vibrateLong({
						complete: res => {}
					});
				}
			}
		},

		/**
		 * 选择头像回调
		 * @param {Object} e
		 */
		onChooseAvatar(e) {
			let url = e.detail.avatarUrl;
			let uploadUrl = config.postUrl + '/userInfo/uploadAvatar';
			uni.uploadFile({
				url: uploadUrl,
				filePath: url,
				name: 'file',
				header: {
					Authorization: 'Bearer ' + getToken()
				},
				success: (uploadFileRes) => {
					console.log(uploadFileRes);
					this.userInfo.avatarUrl = url;
					// setTimeout(function () {
					//     apiUserInfo();
					// }, 500);
				},
				fail(e) {
					console.log(e);
				}
			});
		},
	}
};
</script>
<style>
/* pages/me/index.wxss */
.uploadImg {
	
}
</style>

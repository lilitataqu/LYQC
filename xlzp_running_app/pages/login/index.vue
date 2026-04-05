<template>
	<view>
		<view class="">
			<view class="text-center padding margin-top-xl login-text"><text class="text-grey text-xl" style="color: black"> 遇见更好的 自己</text></view>
			<view class="flex padding margin-top-xl justify-center">
				<!-- <view class="cu-avatar xl round"><text class="cuIcon-people"></text></view> -->
				<view class="cu-avatar xl round"><image class="cu-avatar xl round" src="/static/icon/logo.png" mode="scaleToFill"></image></view>
			</view>
			<view class="flex margin-top padding justify-center">
				<!-- #ifdef APP-PLUS -->
				<input v-model="phoneNum" type="number" placeholder="请输入手机号" />
				<button class="cu-btn bg-green round lg" @click="loginApp">开始使用</button>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<!-- <button class="cu-btn bg-green round lg" @tap="redirect">开始使用</button> -->
				<button class="cu-btn bg-green round lg" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">开始使用</button>
				<!-- #endif -->
			</view>
		</view>

		<view class="flex flex-direction text-center padding margin-top"><text class="text-grey text-xl login-text">跑起来的人生真得很美丽</text>
		<text class="flex flex-direction text-grey text-xl login-text" style="letter-spacing: 10rpx;margin-top: 10rpx;">快乐奔跑  无忧人生</text></view>
	</view>
</template>

<script>
import { login, bindingWx, loginPhone } from '../../api/api.js';
import { setToken, getToken } from '../../path/auth.js';
import { apiUserInfo } from '@/utils/userInfoUtils.js';
export default {
	data() {
		return {
			phoneNum: ''
		};
	},
	methods: {
		redirect(token) {
			this.vibrateFunc(1);
			uni.navigateTo({
				url: './setting?token=' + token
			});
		},

		goHome() {
			this.vibrateFunc(1);
			uni.reLaunch({
				url: './../index/index'
			});
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

		login() {
			uni.login({
				success: function(res) {
					if (res.code) {
						var code = res.code;
						login({ code: code }).then(res => {
							console.log('登录成功');
						});
					} else {
						console.log('登录失败');
					}
				}
			});
		},

		// 获取手机号
		getPhoneNumber(e) {
			uni.showLoading({
				title: '加载中'
			});
			let that = this;
			login({ code: e.detail.code }).then(async function(res) {
				// 登录成功
				if (res.data.userWechat) {
					that.userBindingWx(res.data.access_token, res.data.userInfo.userId);
				} else {
					// 不需要绑定微信账号直接存储登录 token
					setToken(res.data.access_token);
					await apiUserInfo();
					uni.hideLoading();
					that.goHome();
				}
			});
		},

		// 绑定微信账号
		userBindingWx(token, userId) {
			var then = this;
			uni.login({
				success: function(res) {
					console.log(res);
					if (res.code) {
						bindingWx({code: res.code, userId: userId}).then(res => {
							uni.hideLoading();
							// 绑定成功
							then.redirect(token);
						});
					} else {
						console.log('微信登录失败');
					}
				}
			});
		},
		loginApp() {
			loginPhone(this.phoneNum).then(async res => {
				// 登录成功
				setToken(res.data.access_token);
				if (res.data.userWechat) {
					uni.showToast({
						title: '登录失败'
					});
				} else {
					await apiUserInfo();
					uni.hideLoading();
					that.goHome();
				}
			});
		}
	}
};
</script>
<style>
/* pages/login/index.wxss */
</style>

<script>
	//app.js
	import {
		apiUserInfo
	} from '@/utils/userInfoUtils.js'
	export default {
		data() {
			return {};
		},
		onLaunch: function() {
			// let that = this;

			// if (!wx.cloud) {
			//     console.error('请使用 2.2.3 或以上的基础库以使用云能力');
			// } else {
			//     wx.cloud.init({
			//         env: 'lebu-t05b2',
			//         traceUser: true
			//     });
			// } // wx.cloud.callFunction({
			//   name:'getopenid',
			//   complete:res=>{
			//     //记录openid
			//     this.globalData.openid = res.result.openid;
			//   }
			// })

			uni.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			}); // 登录

			// uni.login({
			//     success: (res) => {}
			// }); // 获取用户信息

			// uni.getSetting({
			//     success: (res) => {
			//         if (res.authSetting['scope.userInfo']) {
			//             uni.getUserInfo({
			//                 success: (res) => {
			//                     this.globalData.userInfo = res.userInfo;

			//                     if (this.userInfoReadyCallback) {
			//                         this.userInfoReadyCallback(res);
			//                     }
			//                 }
			//             });
			//         }
			//     }
			// });
		},
		onShow: function() {
			apiUserInfo();
			uni.getStorage({
				key: 'keepScreenOn',
				success: function(res) {
					uni.setKeepScreenOn({
						keepScreenOn: res.data,
						success: function(r) {
							console.log(r);
						}
					});
				}
			});
		},
		globalData: {
			userInfo: null,
			openid: null
		}
	};
</script>
<style>
	@import './colorui/main.css';
	@import './colorui/icon.css';
	@import './colorui/animation.css';

	.scrollPage {
		height: 100vh;
	}

	.nav-list {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40rpx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 30rpx;
		border-radius: 12rpx;
		width: 45%;
		margin: 0 2.5% 40rpx;
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		content: '';
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10rpx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4rpx 4rpx 6rpx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32rpx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40rpx;
		margin-right: 4rpx;
	}

	.nav-name {
		font-size: 28rpx;
		text-transform: Capitalize;
		margin-top: 20rpx;
		position: relative;
	}

	.nav-name::before {
		content: '';
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: '';
		position: absolute;
		display: block;
		width: 100rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36rpx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30rpx;
		top: 30rpx;
		font-size: 52rpx;
		width: 60rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
	}

	.text-light {
		font-weight: 300;
	}
</style>
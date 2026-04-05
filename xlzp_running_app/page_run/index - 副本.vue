<template>
	<view>
		<page-container :show="showMask" @afterleave="afterleave" :overlay="false"></page-container>
		<!-- pages/run/index.wxml -->
		<scroll-view scroll-x class="bg-white nav" v-if="motion_status == 0">
			<view class="flex text-center">
				<view :class="'cu-item flex-sub ' + (runType == 0 ? 'text-blue cur' : '')" @tap="tabSelect" data-id="0">户外跑</view>
				<view :class="'cu-item flex-sub ' + (runType == 1 ? 'text-blue cur' : '')" @tap="tabSelect" data-id="1">室内跑</view>
			</view>
		</scroll-view>
				次数：{{num}}
				型号：{{os}}
				次数2：{{runData.steps}}
		<!-- :circles="circles" -->
		<map
			id="myMap"
			v-if="runType == 0"
			:style="'width: 100%; height: ' + screenHeight + ';'"
			:show-location="false"
			:polyline="polyline"
			:latitude="latitude"
			:longitude="longitude"
			show-location
		>
			<corver-view>
				<corver-view class="cu-card article">
					<corver-view class="cu-item shadow">
						<corver-view class="flex padding-left padding-right justify-center">
							<corver-view class="text-center">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-blue"></text>
										运动时间
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xxl text-bold">{{ time_data }}</corver-view>
							</corver-view>
						</corver-view>
						<corver-view class="flex padding-left padding-right">
							<corver-view class="flex-sub">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-red"></text>
										卡路里
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xl text-bold">{{ kcal_data }} Kcal</corver-view>
							</corver-view>

							<corver-view class="flex-sub">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-orange"></text>
										配速
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xl text-bold">{{ speed_data }}</corver-view>
							</corver-view>

							<corver-view class="flex-sub">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-green"></text>
										里程
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xl text-bold">{{ distance_data }} Km</corver-view>
							</corver-view>
						</corver-view>
					</corver-view>
				</corver-view>
			</corver-view>
			<corver-view style="position: fixed; width: 100%; bottom: 30px; z-index: 1024">
				<corver-view class="flex justify-center">
					<button v-if="motion_status == 0" class="cu-btn bg-green margin-left margin-right round lg" style="padding: 0 40rpx" @tap="startRun">开始跑步</button>
					<button v-if="motion_status == 1" class="cu-btn bg-blue margin-left margin-right round lg" style="padding: 0 40rpx" @tap="pauseRun">暂停跑步</button>
					<button v-if="motion_status == 2" class="cu-btn bg-orange margin-left margin-right round lg" style="padding: 0 40rpx" @tap="reRun">恢复跑步</button>
					<button v-if="motion_status == 1 || motion_status == 2" class="cu-btn bg-red margin-left margin-right round lg" style="padding: 0 40rpx" @longpress="stopRun">
						长按停止
					</button>
				</corver-view>
			</corver-view>
		</map>

		<view v-if="runType == 1">
			<corver-view>
				<corver-view class="cu-card article">
					<corver-view class="cu-item shadow">
						<corver-view class="flex padding-left padding-right justify-center">
							<corver-view class="text-center">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-blue"></text>
										运动时间
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xxl text-bold">{{ time_data }}</corver-view>
							</corver-view>
						</corver-view>
						<corver-view class="flex padding-left padding-right">
							<corver-view class="flex-sub">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-red"></text>
										卡路里
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xl text-bold">{{ kcal_data }} Kcal</corver-view>
							</corver-view>

							<corver-view class="flex-sub">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-orange"></text>
										配速
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xl text-bold">{{ speed_data }}</corver-view>
							</corver-view>

							<corver-view class="flex-sub">
								<corver-view class="cu-bar bg-white">
									<corver-view class="action">
										<text class="cuIcon-title text-green"></text>
										里程
									</corver-view>
								</corver-view>
								<corver-view class="flex margin-left text-xl text-bold">{{ distance_data }} Km</corver-view>
							</corver-view>
						</corver-view>
					</corver-view>
				</corver-view>
			</corver-view>
			<corver-view style="position: fixed; width: 100%; bottom: 30px; z-index: 1024">
				<corver-view class="flex justify-center">
					<button v-if="motion_status == 0" class="cu-btn bg-green margin-left margin-right round lg" style="padding: 0 40rpx" @tap="startRun">开始跑步</button>
					<button v-if="motion_status == 1" class="cu-btn bg-blue margin-left margin-right round lg" style="padding: 0 40rpx" @tap="pauseRun">暂停跑步</button>
					<button v-if="motion_status == 2" class="cu-btn bg-orange margin-left margin-right round lg" style="padding: 0 40rpx" @tap="reRun">恢复跑步</button>
					<button v-if="motion_status == 1 || motion_status == 2" class="cu-btn bg-red margin-left margin-right round lg" style="padding: 0 40rpx" @longpress="stopRun">
						长按停止
					</button>
				</corver-view>
			</corver-view>

			<view class="flex padding-left padding-right justify-center">
				<view class="flex-sub"></view>
				<view class="flex-sub"><image src="/static/icon/runer.svg" style="height: 1500%"></image></view>
				<view class="flex-sub"></view>
			</view>
		</view>
	</view>
</template>

<script>
// pages/run/index.js
import timer from '../../utils/lebu-timer';
import lebu from '../../utils/lebu-core';
import { runInfoAdd, runInfoExtendAdd } from '@/api/runInfo.js';
export default {
	data() {
		return {
			num: 0,
			num2: 0,
			os: uni.getSystemInfoSync().osName,
			screenHeight: 0,

			polyline: [
				{
					points: [],
					color: '#07c160',
					width: 2
				}
			],
			circles: [
				{
					latitude: 0, //纬度
					longitude: 0, //经度
					fillColor: '#427ECD',
					radius: 10,
					// strokeWidth: 10,
					color: '#7EB4EA'
				}
			],

			latitude: 0,
			longitude: 0,
			altitude_data: [],
			time_data: '00:00:00',
			kcal_data: '0.00',
			speed_data: '0\'00"',
			distance_data: '0.00',
			motion_status: 0,
			time_id: 0,
			points_time: parseInt(Date.now() / 1000),
			km_speed_data: [],
			km_distance_data: 0,
			runType: 0,
			altitude: '',
			backButtonPress: 0,
			showMask: false,
			runTime: null,
			runData: {
				steps: 0
			},
			accelerometer: []
		};
	},
	/**
	 * 生命周期函数--监听页面加载
	 */ onLoad: function(options) {},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {
		this.setScreenHeight();
		this.initRun();
		// console.log('进入页面');
		// console.log(this.runType);
		// if (this.runType == 0) {
		// 	let sub_obj = 'polyline[' + 0 + '].points';
		// 	uni.onLocationChange(result => {
		// 		console.log('位置变化了');
		// 		//let ex_steps = result.steps;//获取定位步数
		// 		//lebu.setSteps(ex_steps);
		// 		let points = this.polyline[0].points; //检测距离

		// 		if (this.polyline[0].points.length == 0 || this.checkDistance(result.latitude, result.longitude, parseInt(Date.now() / 1000))) {
		// 			points.push({
		// 				longitude: result.longitude,
		// 				latitude: result.latitude
		// 			});
		// 			this.polyline[0].points = points;
		// 			this.setData({
		// 				longitude: result.longitude,
		// 				latitude: result.latitude
		// 			});
		// 			this.getMap(result.latitude, result.longitude);
		// 		}
		// 	});
		// }
	},
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		console.log("App显示" + this.motion_status + this.runTime);
		this.checkLocation();
		if(this.motion_status == 1 && this.runTime != null){
			console.log("处理时间");
			timer.restore(this.runTime, new Date());
			this.refreshShowTime();
		}
	},
	onHide: function() {
		console.log("隐藏App");
		if(this.motion_status == 1){
			// 记录隐藏App开始时间
			this.runTime = new Date();
		}
		console.log("记录时间" + this.runTime);
		timer.end();
		this.stopRefreshShowTime();
	},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {
		this.stopRefreshShowTime();
		let that = this; //时间计数器重置

		timer.end();
		timer.reset(); //定位停止

		if (this.runType == 0) {
			uni.stopLocationUpdate({
				complete: res => {}
			});
		} 
		//加速度传感器停止监测
		uni.offAccelerometerChange(this.calculateAccelerometer);
		this.setData({
			motion_status: 2
		});
		// uni.stopAccelerometer({
		// 	complete: res => {
		// 		that.setData({
		// 			motion_status: 2
		// 		});
		// 	}
		// }); //跑步模块重置

		lebu.reset();
	},
	methods: {
		getMap(latitude, longitude) {
			console.log('移动地图');
			this.latitude = latitude;
			this.longitude = longitude;
			let obj = uni.createMapContext('myMap');
			this.circles[0].latitude = latitude;
			this.circles[0].longitude = longitude;
			this.setData({
				latitude: latitude,
				longitude: longitude
			});
			obj.moveToLocation({
				//moveToLocation将地图中心移动到当前定位点，需要配合map组件的show-location使用
				latitude: latitude,
				longitude: longitude
			});
		},

		tabSelect(e) {
			this.setData({
				runType: e.currentTarget.dataset.id
			});
		},

		initRun() {
			let sex = uni.getStorageSync('sex');
			let weight = uni.getStorageSync('weight');
			let height = uni.getStorageSync('height');

			// if (sex) {
			//     //男性
			//     weight = 60;
			//     height = 172;
			// } else {
			//     //女性
			//     weight = 52;
			//     height = 166;
			// }

			lebu.setWeight(weight);
			lebu.setHeight(height);
			let that = this;

			if (this.runType == 0) {
				uni.getLocation({
					altitude: true,

					success(res) {
						that.setData({
							latitude: res.latitude,
							longitude: res.longitude,
							altitude: res.altitude
						});
						setTimeout(function() {
							let obj = uni.createMapContext('myMap');
							obj.moveToLocation();
							that.circles[0].latitude = res.latitude;
							that.circles[0].longitude = res.longitude;
						}, 1000);
					},

					fail() {
						that.checkLocation();
					}
				});
			}
		},
		/**
		 * 开始跑步
		 */
		startRun() {
			let that = this;
			this.vibrateFunc(1);
			this.showMask = true;
			uni.showModal({
				title: '提示',
				content: '将手机放置在裤袋当中或抓着手机摆臂跑步,可以获得更加精准的数据统计哦!',
				showCancel: false
			});
			if (this.runType == 0) {
				uni.startLocationUpdateBackground({
					success: res => {
						uni.onLocationChange(this.locationChange);
					},
					fail: res => {
						// console.log(res);
					}
				});
			}
			
			timer.start();
			this.setData({
				motion_status: 1
			});
			uni.onAccelerometerChange(this.calculateAccelerometer);
			/* uni.onAccelerometerChange(res => {
				that.num2++;
				if (uni.getSystemInfoSync().osName != 'ios' && that.num2 % 10 != 0) {
					return;
				}
				that.num++;
				// console.log('监听数据');
				// console.log(res);
				let run_data = lebu.run(res, that.time_data);
				that.runData = run_data;
				that.setData({
					distance_data: run_data.distance,
					kcal_data: run_data.kcal,
					speed_data: run_data.speed
				});
			
				if (run_data.distance - that.km_distance_data >= 1) {
					let km_speed_obj = that.km_speed_data;
					km_speed_obj.push(run_data.speed);
					let altitude_obj = that.altitude_data;
					altitude_obj.push(that.altitude);
					that.setData({
						km_distance_data: run_data.distance,
						km_speed_data: km_speed_obj,
						altitude_data: altitude_obj
					});
				}
			}); */

			// uni.startAccelerometer({
			// 	interval: 'normal',

			// 	success() {
			// 		timer.start();
			// 		that.setData({
			// 			motion_status: 1
			// 		});
			// 		uni.onAccelerometerChange(res => {
			// 			// that.num2++;
			// 			// if (uni.getSystemInfoSync().osName != 'ios' && that.num2 % 10 != 0) {
			// 			// 	return;
			// 			// }
			// 			that.num++;
			// 			console.log('监听数据');
			// 			console.log(res);
			// 			let run_data = lebu.run(res, that.time_data);
			// 			that.setData({
			// 				distance_data: run_data.distance,
			// 				kcal_data: run_data.kcal,
			// 				speed_data: run_data.speed
			// 			});

			// 			if (run_data.distance - that.km_distance_data >= 1) {
			// 				let km_speed_obj = that.km_speed_data;
			// 				km_speed_obj.push(run_data.speed);
			// 				let altitude_obj = that.altitude_data;
			// 				altitude_obj.push(that.altitude);
			// 				that.setData({
			// 					km_distance_data: run_data.distance,
			// 					km_speed_data: km_speed_obj,
			// 					altitude_data: altitude_obj
			// 				});
			// 			}
			// 		});
			// 	}
			// });
			this.refreshShowTime();
			
		},
		/**
		 * 暂停跑步
		 */
		pauseRun() {
			this.vibrateFunc(1);
			let that = this;
			this.runTime = null;
			timer.end();
			this.stopRefreshShowTime();

			if (this.runType == 0) {
				uni.stopLocationUpdate({
					complete: res => {}
				});
			}
			uni.offAccelerometerChange(this.calculateAccelerometer);
			this.setData({
				motion_status: 2
			});
			// uni.stopAccelerometer({
			// 	complete: res => {
			// 		that.setData({
			// 			motion_status: 2
			// 		});
			// 	}
			// });
		},
		/**
		 * 恢复跑步
		 */
		reRun() {
			this.vibrateFunc(1);
			this.refreshShowTime();
			timer.start();
			let that = this;
			if (this.runType == 0) {
				uni.startLocationUpdateBackground({
					success: res => {
						uni.onLocationChange(that.locationChange);
					},
					fail: res => {
						// console.log(res);
					}
				});
			// 	uni.startLocationUpdate({
			// 		success: res => {
			
			// 		},
			// 		fail: res => {
						
			// 		}
			// 	});
			}
			this.setData({
				motion_status: 1
			});
			uni.onAccelerometerChange(this.calculateAccelerometer);
			

			/* uni.startAccelerometer({
				interval: 'normal',

				success() {
					that.setData({
						motion_status: 1
					});
					timer.start();
					uni.onAccelerometerChange(res => {
						that.num2++;
						if (uni.getSystemInfoSync().osName != 'ios' && that.num2 % 10 != 0) {
							return;
						}
						that.num++;
						let run_data = lebu.run(res, that.time_data);
						that.setData({
							distance_data: run_data.distance,
							kcal_data: run_data.kcal,
							speed_data: run_data.speed
						});

						if (run_data.distance - that.km_distance_data >= 1) {
							let obj = that.km_speed_data;
							obj.push(run_data.speed);
							that.setData({
								km_distance_data: run_data.distance,
								km_speed_data: obj
							});
						}
					});
				}
			}); */
		},
		/**
		 * 结束跑步
		 */
		stopRun() {
			this.vibrateFunc(2);
			let that = this;
			timer.end();

			if (this.runType == 0) {
				uni.stopLocationUpdate({
					complete: res => {}
				});
			}
			uni.offAccelerometerChange(this.calculateAccelerometer);
			this.setData({
				motion_status: 2
			});
			// uni.stopAccelerometer({
			// 	complete: res => {
			// 		that.setData({
			// 			motion_status: 2
			// 		});
			// 	}
			// });

			if (this.distance_data == 0) {
				uni.showModal({
					title: '未检测到任何移动',
					content: '继续运动还是舍弃这条记录?',
					cancelText: '舍弃',
					confirmText: '继续',

					success(res) {
						if (res.confirm) {
							that.reRun();
						} else {
							timer.reset();
							uni.switchTab({
								url: '../index/index'
							});
						}
					}
				});
			} else if (this.distance_data < 0.1) {
				uni.showModal({
					title: '移动距离太短',
					content: '继续运动还是舍弃这条记录?',
					cancelText: '舍弃',
					confirmText: '继续',

					success(res) {
						if (res.confirm) {
							that.reRun();
						} else {
							timer.reset();
							uni.switchTab({
								url: '../index/index'
							});
						}
					}
				});
			} else {
				
				this.stopRefreshShowTime();
				// let id = parseInt(Date.now() / 1000);

				// 处理string转Long
				var distanceDataNum = new Number(this.distance_data);
				var kcalDataNum = new Number(this.kcal_data);

				uni.showLoading({
					title: '加载中'
				});
				let then = this;
				// 保存数据至数据库
				runInfoAdd({
					time: this.time_data,
					speed: this.speed_data,
					kcal: kcalDataNum * 1000,
					distance: distanceDataNum * 1000,
					kmSpeed: JSON.stringify(this.km_speed_data),
					points: JSON.stringify(this.polyline[0].points),
					altitude: JSON.stringify(this.altitude_data),
					altitudeSum: this.altitude,
					runType: this.runType,
					step: this.runData.steps
				}).then(res => {
					runInfoExtendAdd({
						runInfoId: res.data,
						accelerometer: JSON.stringify(then.accelerometer)
					})
					lebu.reset();
					uni.hideLoading();
					uni.redirectTo({
						url: './statement?id=' + res.data
					});
				});

				// uni.setStorageSync(
				//     'RunInfo-' + id,
				//     JSON.stringify({
				//         time_data: this.time_data,
				//         speed_data: this.speed_data,
				//         kcal_data: this.kcal_data,
				//         distance_data: this.distance_data,
				//         km_speed_data: this.km_speed_data,
				//         points_data: this.polyline[0].points,
				//         altitude_data: this.altitude_data,
				//         altitude: this.altitude,
				//         runType: this.runType
				//     })
				// );
				// uni.redirectTo({
				//     url: './statement?id=' + id
				// });
			
			}
			
		},
		
		/**
		 * 手机震动
		 * @param {Object} mode
		 */
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

		//设定地图高度为全屏幕高度
		setScreenHeight() {
			let that = this;
			uni.getSystemInfo({
				success: res => {
					that.setData({
						screenHeight: res.screenHeight * 0.901 + 'px'
					});
				}
			});
		},

		//检测是否开启后台定位,并引导用户开启
		checkLocation() {
			if (this.runType == 1) {
				return;
			}
			if(uni.getSystemInfoSync().hostName == "WeChat"){
				uni.getSetting({
					success(res) {
						let ulb = res.authSetting['scope.userLocationBackground']; //console.log(res.authSetting)
				
						if (ulb == false || ulb == undefined || res.authSetting['scope.userLocation'] == false) {
							uni.showModal({
								title: '提示',
								content: '请先设置位置信息为"使用小程序期间和离开小程序后",才可运行跑步模块',
				
								success(res) {
									if (res.confirm) {
										uni.openSetting({});
									} else {
										uni.switchTab({
											url: '../index/index'
										});
									}
								}
							});
						}
					}
				});
			}
			
		},

		checkDistance(lat2, lng2, cur_time) {
			let obj = this.polyline[0].points[this.polyline[0].points.length - 1]; // console.log(this.data.polyline[0].points);

			let lat1 = obj.latitude;
			let lng1 = obj.longitude; // 调用 return的距离单位为m

			let radLat1 = (lat1 * Math.PI) / 180;
			let radLat2 = (lat2 * Math.PI) / 180;
			let a = radLat1 - radLat2;
			let b = (lng1 * Math.PI) / 180 - (lng2 * Math.PI) / 180;
			let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
			s = s * 6378.137; // EARTH_RADIUS;

			s = Math.round(s * 10000) / 10; //m

			let time_differece = cur_time - this.points_time; //秒

			this.points_time = cur_time;

			if (time_differece <= 0) {
				return false;
			}

			let cal_distance = (lebu.getStride() / 100) * time_differece; //cm => m

			if ((s <= cal_distance && s > 0) || (s <= this.distance_data && this.distance > 0) || (s < 35 && s > 0)) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * 拦截页面返回事件
		 */
		afterleave() {
			if (this.motion_status == 1 || this.motion_status == 2) {
				this.backButtonPress++;
				if (this.backButtonPress < 2) {
					uni.showToast({
						icon: 'none',
						title: '再按一次退出跑步',
						duration: 1000
					});
				}
				this.showMask = false;
				let that = this;
				setTimeout(function() {
					that.backButtonPress = 0;
					that.showMask = true;
				}, 2000);
			}
			return false;
		},
		locationChange(result){
			console.log('位置变化了');
			//let ex_steps = result.steps;//获取定位步数
			//lebu.setSteps(ex_steps);
			let points = this.polyline[0].points; //检测距离
			
			if (this.polyline[0].points.length == 0 || this.checkDistance(result.latitude, result.longitude, parseInt(Date.now() / 1000))) {
				points.push({
					longitude: result.longitude,
					latitude: result.latitude
				});
				this.polyline[0].points = points;
				this.setData({
					longitude: result.longitude,
					latitude: result.latitude
				});
				this.getMap(result.latitude, result.longitude);
			}
		},
		// 开始刷新页面时间
		refreshShowTime(){
			this.stopRefreshShowTime();
			let that = this;
			this.time_id = setInterval(function() {
				console.log("触发setInterval");
				let time_data = timer.getTime();
				console.log("展示时间" + time_data);
				that.setData({
					time_data: time_data
				});
			}, 1000);
		},
		// 暂停刷新页面时间
		stopRefreshShowTime(){
			clearInterval(this.time_id);
		},
		/**
		 * 计算加速计数据
		 */
		calculateAccelerometer(res){
			this.accelerometer.push(res);
			this.num2++;
			if (uni.getSystemInfoSync().hostName == "WeChat" && uni.getSystemInfoSync().osName != 'ios' && this.num2 % 10 != 0) {
				return;
			}
			this.num++;
			// console.log('监听数据');
			// console.log(res);
			let run_data = lebu.run(res, this.time_data);
			this.runData = run_data;
			this.setData({
				distance_data: run_data.distance,
				kcal_data: run_data.kcal,
				speed_data: run_data.speed
			});
						
			if (run_data.distance - this.km_distance_data >= 1) {
				let km_speed_obj = this.km_speed_data;
				km_speed_obj.push(run_data.speed);
				let altitude_obj = this.altitude_data;
				altitude_obj.push(this.altitude);
				this.setData({
					km_distance_data: run_data.distance,
					km_speed_data: km_speed_obj,
					altitude_data: altitude_obj
				});
			}
		}
	},
};
</script>
<style>
/* pages/run/index.wxss */
</style>

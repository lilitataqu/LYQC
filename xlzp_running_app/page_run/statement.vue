<template>
	<view>
		<view class="flex justify-center">
			<map id="myMap" v-if="runType == 0" style="width: 100%; height: 300px" show-location :latitude="latitude" :longitude="longitude" :polyline="polyline"></map>
		</view>
		<view class="bg-white margin-sm">
			<view class="flex">
				<view class="flex-sub margin-left margin-right">
					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-titles text-blue"></text>
							<text v-if="runType == 0">户外跑</text>
							<text v-if="runType == 1">室内跑</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white padding margin-sm">
			<view class="flex">
				<view class="flex-sub margin-left margin-right">
					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-title text-blue"></text>
							运动时长
						</view>
					</view>
					<view class="flex">
						<text class="margin-left text-bold text-xxl">{{ time_data }}</text>
					</view>
				</view>
				<view class="flex-sub margin-left margin-right">
					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-title text-green"></text>
							运动距离
						</view>
					</view>
					<view class="flex">
						<text class="margin-left text-bold text-xxl">{{ distance_data }} Km</text>
					</view>
				</view>
			</view>

			<view class="flex">
				<view class="flex-sub margin-left margin-right">
					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-title text-orange"></text>
							平均配速
						</view>
					</view>
					<view class="flex">
						<text class="margin-left text-bold text-xxl">{{ speed_data }}</text>
					</view>
				</view>
				<view class="flex-sub margin-bottom margin-left margin-right">
					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-title text-red"></text>
							卡路里
						</view>
					</view>
					<view class="flex">
						<text class="margin-left text-bold text-xxl">{{ kcal_data }} Kcal</text>
					</view>
				</view>
			</view>
		</view>
		<view style="position: fixed; width: 100%; bottom: 30px; z-index: 1024">
			<view class="flex">
				<button class="flex-sub cu-btn bg-grey round lg margin-left margin-right" style="padding: 0 40rpx" @tap="toDetail">详情</button>
				<!-- <button class="flex-sub cu-btn bg-blue round lg margin-left margin-right" style="padding: 0 40rpx" @tap="toShare">分享</button> -->
			</view>
		</view>
	</view>
</template>

<script>
// pages/run/statement.js
import { runInfoDetail } from '@/api/runInfo.js';
export default {
	data() {
		return {
			polyline: [
				{
					points: [],
					color: '#07c160',
					width: 2
				}
			],

			latitude: 0,
			longitude: 0,
			time_data: '00:00',
			distance_data: '0.00',
			speed_data: '0\'00"',
			kcal_data: '0.00',
			id: '',
			runType: '',
			runInfo: {}
		};
	},
	/**
	 * 生命周期函数--监听页面加载
	 */ onLoad: function(options) {
		uni.setNavigationBarTitle({
			title: '运动结算'
		});
		// let run_data = JSON.parse(uni.getStorageSync('RunInfo-' + options.id));

		// 从数据库获取跑步详情数据
		runInfoDetail(options.id).then(res => {
			let run_data = res.data;
			this.runInfo = res.data;
			
			let time_data = run_data.time;
			let distance_data = run_data.distance;
			let kcal_data = run_data.kcal;
			let points_data = run_data.points;
			let run_type = run_data.runType;
			// let time_split = time_data.split(':');
			// let hours = time_split[0];
			// let minutes = time_split[1];
			// let seconds = time_split[2];
			// let speed_data = (parseFloat(hours) * 60 + parseFloat(minutes) + parseFloat(seconds) / 60) / distance_data;
			// let min_speed = Math.floor(speed_data);
			// let sec_speed = Math.floor((speed_data - min_speed) * 60);
			// speed_data = min_speed + "'" + sec_speed + '"';
			let speed_data = run_data.speed;
			let sub_obj = 'polyline[' + 0 + '].points';
			this.polyline[0].points = points_data;
			this.setData({
				id: options.id,
				time_data: time_data,
				distance_data: distance_data,
				speed_data: speed_data,
				kcal_data: kcal_data,
				runType: run_type
			});
			let that = this;
			uni.getLocation({
				success(res) {
					that.setData({
						latitude: res.latitude,
						longitude: res.longitude
					});
					setTimeout(function() {
						let obj = uni.createMapContext('myMap');
						obj.moveToLocation();
					}, 2000);
				}
			});
		});
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {},
	methods: {
		// 详情按钮
		toDetail() {
			this.vibrateFunc(1);
			let id = this.id;
			uni.navigateTo({
				url: '/pages/history/detail?id=' + id + '&item=' + encodeURIComponent(JSON.stringify(this.runInfo))
			});
		},

		toShare() {
			this.vibrateFunc(1);
			let id = this.id;
			uni.navigateTo({
				url: '../share/index?id=' + id
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
		}
	}
};
</script>
<style>
/* pages/run/statement.wxss */
</style>

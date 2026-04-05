<template>
	<view class="bg-white">
		<view class="flex padding">
			<view class="flex-sub"></view>
			<view class="">
				<!-- 运动进度概览 -->
				<canvas canvas-id="canvasArcbar" id="canvasArcbar" class="charts"></canvas>
			</view>
			<view class="flex-sub"></view>
		</view>
		<view class="flex padding solid-bottom">
			<view class="flex-sub"></view>
			<!-- <view class="flex-twice text-center">
				<button class="cu-btn bg-green round lg" @tap="toRun">开始跑步</button>
			</view> -->
			<view class="flex-twice text-center"><button class="cu-btn bg-green round lg" @tap="test">开始跑步</button></view>
			<view class="flex-sub"></view>
		</view>
		<!-- <view class="cu-bar bg-white solid-bottom margin-top">
		<view class='action'>
			<text class='cuIcon-titles text-green '></text> 每周进度
		</view>
	</view> -->
		<view class="flex padding-left padding-right solid-bottom">
			<view class="flex-sub" @tap="tips" data-type="distance">
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-title text-blue"></text>
						<!-- 运动里程要求 -->
						运动时间要求
						<text class="cuIcon-info lg text-gray"></text>
					</view>
				</view>
				<!-- <view class="flex padding-sm">
					<view class="cu-progress round"><view class="bg-blue" :style="'width:' + (distance_target == 0 ? '100' : prog_distance) + '%;'"></view></view>
					<text class="margin-left">{{ distance_target == 0 ? '100' : prog_distance }}%</text>
				</view> -->
			</view>

			<view class="flex-sub" @tap="tips" data-type="kcal">
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-title text-red"></text>
						<!-- 卡路里消耗 -->
						运动次数要求
						<text class="cuIcon-info lg text-gray"></text>
					</view>
				</view>
				<!-- <view class="padding-sm bg-white">
					<view class="flex">
						<view class="cu-progress round"><view class="bg-red" :style="'width:' + (kcal_target == 0 ? '100' : prog_kcal) + '%;'"></view></view>
						<text class="margin-left">{{ kcal_target == 0 ? '100' : prog_kcal }}%</text>
					</view>
				</view> -->
			</view>
		</view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text>
				最近活动
			</view>
			<view class="action"><text class="text-green" @tap="toHistory">更多</text></view>
		</view>
		<view class="cu-card article">
			<view class="cu-item shadow" style="margin: 0px;">
				<view v-if="runinfo_data.length > 0">
					<view @tap="toDetail" :data-id="runinfo_data[0].id">
						<view class="title">
							<view class="text-cut">{{ runinfo_data[0].createTime }}</view>
						</view>
						<view class="content">
							<image v-if="runinfo_data[0].runType == 0" src="/static/icon/run-sub.png" mode="aspectFit" style="height: 5.4em"></image>
							<image v-else src="/static/icon/indoor.png" mode="aspectFit" style="height: 5.4em"></image>
							<view class="desc">
								<view class="text-content">
									<text>运动里程：{{ runinfo_data[0].distance / 1000 }} Km</text>
								</view>
								<view>
									<view v-if="runinfo_data[0].state == 0" class="cu-tag bg-green light sm round">已达标</view>
									<view v-if="runinfo_data[0].state == 1" class="cu-tag bg-red light sm round">距离未达标</view>
									<view v-if="runinfo_data[0].state == 2" class="cu-tag bg-red light sm round">配速未达标</view>
									<view v-if="runinfo_data[0].state == 3" class="cu-tag bg-red light sm round">时间未达标</view>
									<view v-if="runinfo_data[0].state == 4" class="cu-tag bg-gray light sm round">及格</view>
									<view v-if="runinfo_data[0].state == 5" class="cu-tag bg-yellow light sm round">良好</view>
									<view v-if="runinfo_data[0].state == 6" class="cu-tag bg-green light sm round">优秀</view>
								</view>
								<view>
									<view class="cu-tag bg-green light sm round">{{ runinfo_data[0].time }}</view>
									<view class="cu-tag bg-orange light sm round">{{ runinfo_data[0].speed }}</view>
									<view class="cu-tag bg-red light sm round">{{ runinfo_data[0].kcal / 1000 }} Kcal</view>
									<!-- <view v-if="runinfo_data[0].runType == 0" class="cu-tag bg-blue light sm round">户外跑</view>
									<view v-if="runinfo_data[0].runType == 1" class="cu-tag bg-blue light sm round">室内跑</view> -->
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-else>
					<view class="text-center padding margin-top"><text class="text-grey text-xl">暂无历史运动记录</text></view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text>
				未完成的比赛
			</view>
		</view>
		<view v-for="(item, index) in tournamentUnfinishList_data">
			<view class="cu-card article border-bottom">
				<view class="cu-item shadow" style="margin: 0px;">
					<view @tap="toTournamentDetail" :data-id="item.id">
						<view class="title">
							<view class="text-cut">{{item.name}}</view>
						</view>
						<view class="content">
							<image style="border-radius=10px" :src="item.cover != '' ? imageHead + item.cover : '/static/icon/run-sub.png'" mode="aspectFit"></image>
							<view class="desc">
								<view class="text-content">
									<text class="text-overflow-1">比赛组别：{{item.groupName}}</text>
								</view>
								<view class="text-content">
									组别距离：
									<view class="cu-tag bg-blue light sm round">{{item.distance / 1000}}Km</view>
								</view>
								<view class="text-content">
									<text>开始时间：{{item.tournamentTimeStart}}</text>
								</view>
								<view class="text-content">
									<text>结束时间：{{item.tournamentTimeEnd}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
//index.js
import uCharts from '../../utils/u-charts.min.js'; //获取应用实例
import { runInfoList, statistic } from '@/api/runInfo.js';
import { getUserInfoCache } from '@/utils/userInfoUtils.js';
import { tournamentUnfinishList, getUserTournamentState } from '@/api/tournament.js';
import config from '@/path/config.js';

const app = getApp();
export default {
	data() {
		return {
			distance_target: uni.getStorageSync('distance'),
			kcal_target: uni.getStorageSync('kcal'),
			series: [],
			cur_distance: '',
			cur_kcal: '',
			prog_distance: '',
			prog_kcal: '',
			runinfo_data: '',
			id: '',
			time_format: '',
			distance_data: '',
			time_data: '',
			speed_data: '',
			kcal_data: '',
			runType: 0,
			standardDistance: 0,
			standardNumber: 0,
			standardTime: '00:00:00',
			tournamentUnfinishList_data: [], // 未完成比赛列表
			imageHead: config.postUrl, // 图片前缀
		};
	},
	onShow() {
		this.checkUpdate();
		// if (uni.getStorageInfoSync().keys.length == 0) {
		// 	uni.navigateTo({
		// 		url: '../login/index'
		// 	});
		// }
		this.initSchedule();

		// let end_date = Date.now();
		// let start_date = Date.now() - (new Date().getDay() + 1) * 86400000;
		// let distance_target = parseInt(uni.getStorageSync('distance'));

		// if (isNaN(distance_target)) {
		// 	distance_target = 0;
		// }

		// let kcal_target = parseInt(uni.getStorageSync('kcal'));

		// if (isNaN(kcal_target)) {
		// 	kcal_target = 0;
		// }

		// let cur_distance = 0;
		// let cur_kcal = 0;
		// let storage_key = uni.getStorageInfoSync();
		// storage_key = storage_key.keys;
		// let runinfo_key = [];

		// for (let i = 0; i < storage_key.length; i++) {
		// 	let key = storage_key[i].split('-');

		// 	if (key[0] == 'RunInfo') {
		// 		console.log(start_date / 1000);
		// 		console.log(key);
		// 		console.log(end_date / 1000);

		// 		if (key[1] / 1000 <= end_date && key[1] >= start_date / 1000) {
		// 			runinfo_key.push(key[1]);
		// 		}
		// 	}
		// }

		// for (let i = 0; i < runinfo_key.length; i++) {
		// 	let temp = JSON.parse(uni.getStorageSync('RunInfo-' + runinfo_key[i]));
		// 	cur_distance = cur_distance + parseFloat(temp.distance_data);
		// 	cur_kcal = cur_kcal + parseFloat(temp.kcal_data);
		// }

		// cur_distance = cur_distance.toFixed(2);

		// if (isNaN(cur_distance)) {
		// 	cur_distance = 0;
		// }

		// cur_kcal = cur_kcal.toFixed(2);

		// if (isNaN(cur_kcal)) {
		// 	cur_kcal = 0;
		// }

		// let global_target = (parseFloat(cur_kcal) + parseFloat(cur_distance)) / (kcal_target + distance_target);

		// if (isNaN(global_target)) {
		// 	global_target = 1;
		// }

		// global_target = global_target.toFixed(2);

		// if (global_target > 1) {
		// 	global_target = 1;
		// }

		// let prog_distance = (cur_distance / distance_target) * 100;
		// prog_distance = parseInt(prog_distance);
		// let prog_kcal = (cur_kcal / kcal_target) * 100;
		// prog_kcal = parseInt(prog_kcal);
		// let sort_data = runinfo_key.sort().reverse();

		// if (prog_distance > 100) {
		// 	prog_distance = 100;
		// }

		// if (prog_kcal > 100) {
		// 	prog_kcal = 100;
		// }

		// // 组装圆形进度数据
		// let series = [
		// 	{
		// 		color: '#2fc25b',
		// 		data: global_target,
		// 		index: 0,
		// 		legendShape: 'circle',
		// 		name: '正确率',
		// 		pointShape: 'circle',
		// 		show: true,
		// 		type: 'arcbar'
		// 	}
		// ];

		// this.showArcbar('canvasArcbar', series);

		// 获取跑步数据
		runInfoList({ pageNum: 1, pageSize: 1 }).then(res => {
			let runinfo_data = res.rows;

			this.setData({
				// distance_target: distance_target,
				// kcal_target: kcal_target,
				// cur_distance: cur_distance,
				// cur_kcal: cur_kcal,
				// prog_distance: prog_distance,
				// prog_kcal: prog_kcal,
				runinfo_data: runinfo_data
			});
		});
		this.apiTournamentUnfinishList();
	},
	onLoad: function() {},
	methods: {
		toRun() {
			this.vibrateFunc(1);
			uni.navigateTo({
				url: '/page_run/index'
			});
		},
		test() {
			this.vibrateFunc(1);
			uni.navigateTo({
				url: '/page_run/index_new_algorithm'
			});
		},

		toHistory() {
			this.vibrateFunc(1);
			uni.navigateTo({
				url: '../history/index'
			});
		},

		showArcbar(canvasId, chartData) {
			// console.log(chartData)
			new uCharts({
				$this: this,
				canvasId: canvasId,
				type: 'arcbar',
				fontSize: 11,
				legend: {
					show: false
				},
				background: '#FFFFFF',
				pixelRatio: 1,
				series: chartData,
				animation: true,
				width: 300,
				height: 200,
				dataLabel: true,
				title: {
					name: Math.round(chartData[0].data * 100) + '%',
					color: chartData.color,
					fontSize: 25
				},
				subtitle: {
					name: '本周完成进度',
					color: '#666666',
					fontSize: 15
				},
				extra: {
					arcbar: {
						type: 'default',
						width: 10
					}
				}
			});
		},

		toDetail(e) {
			this.vibrateFunc(1);
			let id = e.currentTarget.dataset.id;

			uni.navigateTo({
				url: '../history/detail?id=' + id
			});
		},
		
		toTournamentDetail(e){
			let id = e.currentTarget.dataset.id; 
			
			// 查询是否可比赛状态
			getUserTournamentState(id).then(res => {
				if(res.data.groupId == 0){
					uni.showModal({
						title: '提示',
						content: res.data.msg,
						showCancel: false
					});
				}else{
					uni.navigateTo({
						url: '/page_run/index_new_algorithm?tournamentGroupId=' + res.data.groupId
					});
				}
			})
			
			
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

		tips(e) {
			this.vibrateFunc(1);
			let type = e.currentTarget.dataset.type;

			switch (type) {
				case 'kcal':
					uni.showModal({
						title: '提示',
						// content: '此进度条表示本周运动次数目标的完成进度,每周一自动归零\n每周' + this.standardNumber + '次',
						content: '每周' + this.standardNumber + '次',
						showCancel: false
					});
					break;

				case 'distance':
					uni.showModal({
						title: '提示',
						content: this.standardTime,
						// content:
						// 	'每周' +
						// 	this.standardNumber +
						// 	'次，\n每次持续' +
						// 	this.standardTime +
						// 	'分钟',
						// 	// this.standardDistance +
						// 	// 'Km\n共计：' +
						// 	// this.standardNumber * this.standardDistance +
						// 	// 'Km',
						showCancel: false
					});
					break;
			}
		},

		// 初始化进度模块
		initSchedule() {
			let userInfo = getUserInfoCache();
			// console.log("缓存数据");
			// console.log(userInfo);
			statistic().then(res => {
				let data = res.data.data;
				// let prog_distance = (data.distance / 1000 / userInfo.distance) * 100;// 根据用户设定的里程目标进行计算
				// 计算本周里程进度
				let prog_distance = 0.0;
				// if (data.distance != 0) {
				// 	prog_distance = (data.distance / 1000 / res.data.distance) * 100;
				// 	// 截取当前数据到小数点后两位,不四舍五入
				// 	prog_distance = parseFloat(prog_distance).toFixed(3);
				// 	prog_distance = prog_distance.substring(0, prog_distance.length - 1);
				// 	prog_distance = prog_distance > 100 ? 100 : prog_distance;
				// }

				// 计算本周卡路里进度
				// let prog_kcal = (data.kcal / 1000 / userInfo.kcal) * 100;// 根据用户设定的卡路里目标进行计算

				//计算本周运动次数进度
				let prog_kcal = (data.count / res.data.number) * 100;
				// 截取当前数据到小数点后两位,不四舍五入
				prog_kcal = parseFloat(prog_kcal).toFixed(3);
				prog_kcal = prog_kcal.substring(0, prog_kcal.length - 1);
				prog_kcal = prog_kcal > 100 ? 100 : prog_kcal;

				// 计算总体进度
				// let sumProgress = (parseFloat(prog_distance) + parseFloat(prog_kcal)) / 200;// 包含距离和次数
				let sumProgress = parseFloat(prog_kcal) / 100;
				sumProgress = sumProgress.toString().substring(0, 4);
				// console.log("总进度" + sumProgress);
				if (sumProgress > 1) {
					sumProgress = 1;
				}

				// 组装圆形进度数据
				let series = [
					{
						color: '#2fc25b',
						data: sumProgress,
						index: 0,
						legendShape: 'circle',
						name: '正确率',
						pointShape: 'circle',
						show: true,
						type: 'arcbar'
					}
				];

				this.showArcbar('canvasArcbar', series);

				this.setData({
					distance_target: userInfo.distance,
					kcal_target: userInfo.kcal,
					cur_distance: data.distance,
					cur_kcal: data.kcal,
					prog_distance: prog_distance,
					prog_kcal: prog_kcal,
					// standardDistance: res.data.distance,
					standardNumber: res.data.number,
					standardTime: res.data.minTime
				});
			});
		},

		/**
		 * 检查更新小程序
		 */
		checkUpdate() {
			console.log('检查更新');
			const updateManager = uni.getUpdateManager();

			updateManager.onCheckForUpdate(function(res) {
				console.log('检查成功回调');
				// 请求完新版本信息的回调
				console.log(res.hasUpdate);
			});

			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});
			});

			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
			});
		},
		
		apiTournamentUnfinishList() {
			tournamentUnfinishList().then(res => {
				this.tournamentUnfinishList_data = res.rows;
			})
		}
	}
};
</script>
<style>
.charts {
	width: 300px;
	height: 170px;
}
</style>

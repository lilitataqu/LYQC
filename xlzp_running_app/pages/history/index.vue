<template>
	<view>
		<z-paging ref="paging" v-model="dataList" @query="getList">
			<view v-for="(item, index) in dataList">
				<view class="cu-card article no-card margin-top" @tap="toDetail" :data-id="item.id">
					<view class="cu-item shadow">
						<view class="title">
							<view class="text-cut">
								<text class="cuIcon-titles text-cyan"></text>
								{{ item.createTime }}
							</view>
						</view>
						<view class="content">
							<image v-if="item.runType == 0" src="/static/icon/run-sub.png" mode="aspectFit" style="height: 5.4em"></image>
							<image v-else src="/static/icon/indoor.png" mode="aspectFit" style="height: 5.4em"></image>
							<view class="desc">
								<view class="text-content">
									<text>运动里程:{{ item.distance / 1000 }} Km</text>
								</view>
								<view>
									<view v-if="item.state == 0" class="cu-tag bg-green light sm round">已达标</view>
									<view v-if="item.state == 1" class="cu-tag bg-red light sm round">距离未达标</view>
									<view v-if="item.state == 2" class="cu-tag bg-red light sm round">配速未达标</view>
									<view v-if="item.state == 3" class="cu-tag bg-red light sm round">时间未达标</view>
									<view v-if="item.state == 4" class="cu-tag bg-gray light sm round">及格</view>
									<view v-if="item.state == 5" class="cu-tag bg-yellow light sm round">良好</view>
									<view v-if="item.state == 6" class="cu-tag bg-green light sm round">优秀</view>
								</view>
								<view>
									<view class="cu-tag bg-green light sm round">{{ item.time }}</view>
									<view class="cu-tag bg-orange light sm round">{{ item.speed }}</view>
									<view class="cu-tag bg-red light sm round">{{ item.kcal / 1000 }} Kcal</view>
									<!-- <view v-if="item.runType == 0" class="cu-tag bg-blue light sm round">户外跑</view>
				                    <view v-if="item.runType == 1" class="cu-tag bg-blue light sm round">室内跑</view> -->
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</z-paging>
		<!-- <view v-if="runinfo_data.length > 0">
            <view v-for="(item, index) in runinfo_data" :key="index">
                <view class="cu-card article no-card margin-top" @tap="toDetail" :data-id="item.id">
                    <view class="cu-item shadow">
                        <view class="title">
                            <view class="text-cut">
                                <text class="cuIcon-titles text-cyan"></text>
                                {{ item.createTime }}
                            </view>
                        </view>
                        <view class="content">
                            <image src="/static/icon/run-sub.png" mode="aspectFit" style="height: 5.4em"></image>
                            <view class="desc">
                                <view class="text-content">
                                    <text>运动里程:{{ item.distance / 1000 }} Km</text>
                                </view>
                                <view>
                                    <view class="cu-tag bg-green light sm round">{{ item.time }}</view>
                                    <view class="cu-tag bg-orange light sm round">{{ item.speed }}</view>
                                    <view class="cu-tag bg-red light sm round">{{ item.kcal / 1000 }} Kcal</view>
                                    <view v-if="item.runType == 0" class="cu-tag bg-blue light sm round">户外跑</view>
                                    <view v-if="item.runType == 1" class="cu-tag bg-blue light sm round">室内跑</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view v-else>
            <view class="text-center padding margin-top">
                <text class="text-grey text-xl">暂无历史运动记录</text>
            </view>
        </view> -->
	</view>
</template>

<script>
// pages/history/index.js
import { runInfoList } from '@/api/runInfo.js';
export default {
	data() {
		return {
			runinfo_data: [],
			dataList: []
		};
	},
	/**
	 * 生命周期函数--监听页面加载
	 */ onShow: function() {
		uni.setNavigationBarTitle({
			title: '历史记录'
		});
		// let storage_key = uni.getStorageInfoSync();
		// storage_key = storage_key.keys;
		// let runinfo_key = [];

		// for (let i = 0; i < storage_key.length; i++) {
		//     let key = storage_key[i].split('-');

		//     if (key[0] == 'RunInfo') {
		//         runinfo_key.push(key[1]);
		//     }
		// }

		// runinfo_key = runinfo_key.sort().reverse();
		// let runinfo_data = [];

		// for (let i = 0; i < runinfo_key.length; i++) {
		//     let temp = JSON.parse(uni.getStorageSync('RunInfo-' + runinfo_key[i]));
		//     temp['id'] = runinfo_key[i];
		//     let now = new Date(parseInt(runinfo_key[i]) * 1000);
		//     let month = now.getMonth() + 1;
		//     let date = now.getDate();
		//     let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
		//     let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
		//     let day = now.getDay(); //获取存储当前日期

		//     let weekday = ['日', '一', '二', '三', '四', '五', '六'];
		//     temp['time_format'] = month + '月' + date + '日 ' + hour + ':' + minute + ' 周' + weekday[day];
		//     runinfo_data.push(temp);
		// }

		// 获取跑步数据
		// runInfoList({ pageNum: 1, pageSize: 1 }).then(res => {
		// 	this.setData({
		// 	    runinfo_data: res.rows
		// 	}); //console.log(JSON.stringify(runinfo_data));
		// });
	},
	methods: {
		toDetail(e) {
			this.vibrateFunc(1);
			let id = e.currentTarget.dataset.id;
			uni.navigateTo({
				url: './detail?id=' + id
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

		// 获取分页数据
		getList(pageNo, pageSize) {
			runInfoList({ pageNum: pageNo, pageSize: pageSize, reasonable: false })
				.then(res => {
					//请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					//如果请求失败写this.$refs.paging.complete(false)，会自动展示错误页面
					//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				});
		}
	}
};
</script>
<style>
/* pages/history/index.wxss */
</style>

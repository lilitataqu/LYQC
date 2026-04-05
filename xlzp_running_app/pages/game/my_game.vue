<template>
	<view>
		<z-paging ref="paging" v-model="dataList" @query="getList">
			<view v-for="(item, index) in dataList">
				<view class="cu-card article no-card margin-top" @tap="toDetail" :data-id="item.id">
					<view class="cu-item shadow" style="margin: 0px;">
						<view class="title">
							<view class="text-cut">
								<text class="cuIcon-titles text-cyan"></text>
								{{item.name}}
							</view>
						</view>
						<view class="content">
							<image :src="item.cover != '' ? imageHead + item.cover : '/static/icon/run-sub.png'" mode="aspectFit"></image>
							<view class="desc">
								<view class="text-content">
									<text class="text-overflow-1">比赛组别：{{item.groupName}}</text>
								</view>
								<view class="text-content">
									组别距离：
									<view class="cu-tag bg-blue light sm round">{{item.distance / 1000}}Km</view>
								</view>
								<view class="text-content">
									<text>比赛用时：{{item.time}}</text>
								</view>
								<view class="text-content">
									<text>完成时间：{{item.updateTime}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	import { tournamentUserList } from '@/api/tournament.js';
	import config from '@/path/config.js';
	export default {
		data() {
			return {
				tournament_data: [],
				dataList: [],
				imageHead: config.postUrl, // 图片前缀
			}
		},
		methods: {
			// 获取分页数据
			getList(pageNo, pageSize) {
				tournamentUserList({ pageNum: pageNo, pageSize: pageSize, reasonable: false })
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
			},
			
			toDetail(e){
				let id = e.currentTarget.dataset.id; // console.log(e);
				
				uni.navigateTo({
					url: '/page_run/statement_tournament?id=' + id
				});
			}
		}
	}
</script>

<style>

</style>

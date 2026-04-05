<style lang="scss">
	.top_bg {
		width: 750rpx;
		height: 700rpx;
		background-size: 810rpx;
		background-position:-20rpx;
		position: relative;
	}

	.one_box {
		width: 750rpx;
		height: 300rpx;
		position: absolute;
		left: 0;
		bottom: 70rpx;
		display: flex;
		justify-content: space-around;
	}
	.one_box .top3 {
		width: 210rpx;
		height: 300rpx;
	}

	.top_name {
		width: 100%;
		height: 55rpx;
		line-height: 60rpx;
		color: #f2f2f2;
		font-size: 26rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy {
		width: 100%;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: rgba(255, 255, 255, .7);
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy span {
		font-size: 20rpx !important;
	}

	.num_one {
		position: relative;
	}

	.huangguan1 {
		width:50px;
		height:50px;
		position: absolute;
		left: 3rpx;
		top: -30rpx;
		image{
			width:100%;
			height:100%;
		}
	}

	.num_one .top3_head {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100%;
		margin: 15rpx 0 0 30rpx;
		border: 4rpx solid #ffdd3c;
	}

	.num_two {
		position: relative;
	}

	.huangguan2 {
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		left: 20rpx;
		top:2px;
		image{
			width:100%;
			height:100%;
		}
	}

	.num_two .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #bcdcdf;
	}

	.num_three {
		position: relative;
	}

	.huangguan3 {
		width: 65rpx;
		height: 65rpx;
		position: absolute;
		left: 30rpx;
		top:7px;
		image{
			width:100%;
			height:100%;
		}
	}

	.num_three .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #e29d85;
	}

	// 第二块
	.number_sy_box {
		width: 700rpx;
		height: 210rpx;
		background-color: #FFFFFF;
		position: absolute;
		left: 25rpx;
		border-radius: 20rpx;
		bottom: -170rpx;
		z-index: 999;
		padding: 22rpx;
		box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1)
	}

	.number_sy_box_title {
		color: #888888;
		// font-weight: 500;
		font-size: 28rpx;
		display: flex;
		z-index: 9999;
		justify-content: space-between;
	}

	.number_sy_main {
		width: 100%;
		height: 124rpx;
		padding-top: 20rpx;
		line-height: 52rpx;
		// background: red;
		display: flex;
		justify-content: space-around;
		position: relative;
	}

	.xiaoding_bg {
		position: absolute;
		right: -22rpx;
		bottom: -30rpx;
		width: 180rpx;
	}

	.number_num1 {
		font-size: 40rpx;
		font-weight: 500;
		color: #2fc04f;
	}

	.number_num2 {
		font-size: 40rpx;
		font-weight: 500;
		color: #4bac7f;
	}

	.danwei {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		// color: #c9c9c9;
	}

	// 列表
	.rankList_box {
		width: 750rpx;
		min-height: 200rpx;
		margin-top: 200rpx;
	}

	.rankItem:last-child {
		border: none;
		margin-bottom:100rpx;
	}

	.rankItem {
		width: 700rpx;
		height: 140rpx;
		margin: 0px auto;
		border-bottom: 1px solid #e9e9e9;
	}

	.rankIndex {
		width: 60rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		color: #CCCCCC;
		font-size: 40rpx;
		float: left;
	}

	.HeardBox {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx;
		overflow: hidden;
		float: left;
		margin-right: 25rpx;
		margin-left: 10rpx !important;
	}

	.HeardBox image {
		width: 80%;
		margin-left:10%;
		margin-top:10%;
		height: 80%;
		border-radius: 100%;
	}

	.NameBox {
		width: 400rpx;
		height: 140rpx;
		float: left;
		padding-top: 10rpx;
		box-sizing: border-box;
	}

	.NameBox view {
		height: 50rpx;
		line-height: 70rpx;
	}

	.userName {
		min-width: 90rpx;
		font-size: 30rpx;
		float: left;
		margin-right: 20rpx;
	}

	.download_box {
		width: 80rpx;
		height: 140rpx;
		// background-color: red;
		float: right;

	}

	.download_box image {
		width: 45rpx;
		margin: 50rpx auto;
		display: block;
	}
</style>
<!-- 排行榜 -->
<template>
	<view>
		<view class="contaier" style="background-color: #FFFFFF;">
			<view class="top_bg" :style="{backgroundImage: 'url(' + srcHead + '/profile/rank.jpg)'}">
				<view class="one_box">
					<!-- 第二名 -->
					<view class="top3">
						<view class="num_two">
							<view class="huangguan2"><image src="../../static/icon/2.png"></image></view>
							<image class="top3_head" :src="getSrc(list.list[1])">    </image>
							<view class="top_name">  {{list.list[1].nickName      || '暂无'}} </view>
							<view class="top_sy">    {{list.list[1].deptName      || '暂无'}} </view>
							<view class="top_sy">    {{list.list[1].distance/1000 || '0'}}KM </view>
						</view>
					</view>

					<!-- 第一名 -->
					<view class="top3">
						<view class="num_one">
							<view class="huangguan1"><image src="../../static/icon/1.png"></image></view>
							<image class="top3_head" :src="getSrc(list.list[0])">   </image>
							<view class="top_name">  {{list.list[0].nickName      || '暂无'}} </view>
							<view class="top_sy">    {{list.list[0].deptName      || '暂无'}} </view>
							<view class="top_sy">  	 {{list.list[0].distance/1000 || '0'}}KM </view>
						</view>
					</view>

					<!-- 第三名 -->
					<view class="top3">
						<view class="num_three">
							<view class="huangguan3"><image src="../../static/icon/3.png"></image></view>
							<image class="top3_head" :src="getSrc(list.list[2])">   </image>
							<view class="top_name">  {{list.list[2].nickName      || '暂无'}} </view>
							<view class="top_sy">    {{list.list[2].deptName      || '暂无'}} </view>
							<view class="top_sy">    {{list.list[2].distance/1000 || '0'}}KM </view>
						</view>
					</view>
				</view>

				<!-- 卡片 -->
				<view class="number_sy_box">
					<view class="number_sy_box_title">
						<text>统计</text>
					</view>
<!-- 					<view class="number_sy_main">
						<view style="width: 50%; text-align: center; border-right: 1px solid #eee;">
							<view class="number_num1">2323KM</view>
							<view class="danwei">总公里</view>
						</view>
						<view style="width: 50%; text-align: center; z-index: 9999;">
							<view class="number_num2">21</view>
							<view class="danwei">我的名次</view>
						</view>

						<image mode="widthFix" class="xiaoding_bg" src="@/static/rank/Intersect.png"></image>
						</view> -->
					<view class="number_sy_main">
						<view style="width: 50%; text-align: center;">
							<view class="number_num1">{{list.sum || 0}}KM</view>
							<view class="danwei">本周全员跑步距离</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 列表 -->
			<view class="rankList_box">
				<view class="rankItem" v-for="(item,index) in list.list.slice(3)" :key="index">
					<!-- 排名 -->
					<view class="rankIndex">
						<text>{{ index + 4 }}</text>
					</view>
					<!-- 头像 -->
					<view class="HeardBox">
						<image class="rankHeard" :src="getSrc(item)"></image>
					</view>
					<!-- 文字 -->
					<view class="NameBox">
						<view class="userName text-bold">{{item.nickName}}</view>
						<view class="userPost text-gray">{{item.deptName}}</view>
						<view class="color_ccc"><text class="text-blue">{{item.distance/1000}}</text>KM</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { appRunInfoRank } from '@/api/runInfo.js';
import config from '@/path/config.js';
	export default {
		data() {
			return {
				srcHead: config.postUrl,
				srcUrl : '../../static/icon/tx.png',
				list   : []
			}
		},
		onShow() {
			appRunInfoRank().then(res => {
				this.list = res.data;
			})
		},
		methods:{
			getSrc(item){
				if(item != null){
					if(item.avatar != ''){
						return this.srcHead + item.avatar
					}else{
						return this.srcUrl
					}
				}else{
					return "";
				}
			
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.box{
		padding-bottom:20px;
	}
	.list{
		width:94%;
		margin: 0 auto;
		margin-top:15px;
		background: #ffffff;
		border-radius:10px;
		overflow: hidden;
		position: relative;
		.topImg{
			height:150px;
			width:100%;
			img{
				width:100%;
				height:100%;
			}
		}
		.title{
			width:90%;
			margin: 0 auto;
			margin-top:10px;
			font-size:17px;
			font-weight:600;
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
		}
		.time{
			width:90%;
			margin: 0 auto;
			margin-top:8px;
			font-size:14px;
			color: #888888;
			font-weight:500;
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
		}
		.part{
			width:90%;
			margin: 0 auto;
			margin-top:20px;
			margin-bottom:20px;
			font-size:14px;
			color: #a6a6a6;
		}
		.btn{
			position: absolute;
			right:15px;
			bottom:13px;
			text-align: center;
			background:#39b54a;
			color: #ffffff;
			font-size:14px;
			height:30px;
			line-height:30px;
			border-radius: 50px;
			width:80px;
		}
	}
</style>

<template>
	<view class="box">
		<div class="listBox" v-for="(item,index) in list" :key="index">
			<view class="list" @click="btn(item.id)">
				<div class="topImg"><img :src="item.cover != '' ? imageHead + item.cover : ''"></div>
				<div class="title" >{{item.name}}</div>
				<div class="time"  >报名时间： {{item.registrationTimeStart}} - {{item.registrationTimeEnd}}</div>
				<div class="part"  >{{item.participantsNumber}} 人已参与</div>
				<div class="btn">查看</div>
			</view>
		</div>
	</view>
</template>

<script>
	import { tournamentList } from '@/api/tournament.js';
	import config from '@/path/config.js';
	export default {
		data() {
			return {
				imageHead: config.postUrl, // 图片前缀
				list:''
			}
		},
		methods:{
			btn(id){
				uni.navigateTo({
					url: '/pages/game/gameName?id='+id
				});
			}
		},
		onShow() {
			tournamentList().then(res => {
				this.list = res.rows
			})
		},
	}
</script>

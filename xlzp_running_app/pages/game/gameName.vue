<style lang="scss" scoped>
	.box{
		padding-bottom:80px;
	}
	.topImg{
		width:90%;
		height:150px;
		overflow: hidden;
		margin-left:5%;
		margin-top:10px;
		border-radius:10px;
	}
	.rule{
		width:90%;
		margin: 0 auto;
		margin-top:10px;
		border-radius:10px;
		background: #fff;
		padding-bottom:15px;
		box-shadow: 2px 2px 10px #e6e6e6;
		.title{
			width:90%;
			margin: 0 auto;
			height:80px;
			border-bottom:1px solid #f3f3f3;
			margin-bottom:10px;
			.top{
				height:40px;
				line-height:60px;
				font-size:17px;
				font-weight:600;
				white-space:nowrap; 
				overflow:hidden; 
				text-overflow:ellipsis;
			}
			.bom{
				height:30px;
				line-height:30px;
				font-size:14px;
				color: #646464;
				text-align: end;
			}
		}
		.li{
			width:90%;
			margin: 0 auto;
			height:28px;
			line-height:28px;
			font-size:14px;
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
		}
	}
	.explain{
		width:90%;
		margin: 0 auto;
		margin-top:10px;
		border-radius:10px;
		background: #fff;
		padding-bottom:15px;
		box-shadow: 2px 2px 10px #e6e6e6;
		.title{
			width:90%;
			margin: 0 auto;
			height:60px;
			line-height:60px;
			border-bottom:1px solid #f3f3f3;
			margin-bottom:10px;
			font-size:17px;
			font-weight:600;
		}
		.text{
			width:90%;
			margin: 0 auto;
			font-size:14px;
			line-height:1.7;
		}
	}
	.rankEntrance{
		width:90%;
		margin: 0 auto;
		margin-top:10px;
		border-radius:10px;
		background: #fff;
		padding-bottom:15px;
		height:50px;
		box-shadow: 2px 2px 10px #e6e6e6;
		line-height:50px;
		font-size:17px;
		font-weight:600;
		padding-left:5%;
		position: relative;
		image{
			position: absolute;
			right:10px;
			bottom:0px;
			height:35px;
			width:70px;
		}
	}
	.btn{
		width:89%;
		position:fixed;
		left:6.5%;
		bottom:25px;
		text-align: center;
		height:45px;
		line-height:45px;
		font-size:14px;
		font-weight:600;
		color: #fff;
		border-radius:10px;
	}
	.btnMay{
		background: #39b54a;
	}
	.btnNo{
		background: #aca7a1;
	}
</style>
<template>
	<view class="box">
		<!-- 顶部图片 -->
		<image :src="data.cover != '' ? imageHead + data.cover : ''" class="topImg"></image>
		<!-- 比赛规则 -->
		<div class="rule">
			<div class="title">
				<div class="top">{{data.name}}</div>
				<div class="bom">参与人数 {{data.participantsNumber}}</div>
			</div>
			<div class="li">报名时间 ：{{data.registrationTimeStart}} - {{data.registrationTimeEnd}}</div>
			<div class="li">比赛时间 ：{{data.tournamentTimeStart}} - {{data.tournamentTimeEnd}}</div>
			<div class="li" v-show="manShow">
				男子组别 ：
				<span v-for="(item,index) in manList">
					{{item}} {{index === manList.length-1?'':'、'}}
				</span> 
			</div>
			<div class="li" v-show="womanShow">
				女子组别 ：
				<span v-for="(item,index) in womanList">
					{{item}} {{index === womanList.length-1?'':'、'}}
				</span>
			</div>
		</div>
		<!-- 排行入口 -->
		<div class="rankEntrance" v-show="rankEntrance" @click="goRank()">
			排行榜
			<image src="../../static/icon/rankBg.png"></image>
		</div>
		<!-- 比赛说明 -->
		<div class="explain">
			<div class="title">比赛说明</div>
			<div class="text">{{data.description}}</div>
		</div>
		<!-- 底部按钮 -->
		<div class="btn" @click="btn" :class="{btnMay:isBtnMay,btnNo:isBtnNo}">{{status}}</div>
	</view>
</template>

<script>
	import { tournamentInfo , getUserRegistrationState,getUserTournamentState} from '@/api/tournament.js';
	import config from '@/path/config.js';
	export default {
		data() {
			return {
				imageHead: config.postUrl,
				// 当前页面id
				id:'',
				// 当前用户是否可以比赛id
				user:'',
				// 页面内容
				data:'',
				// 按钮文字
				status  : '活动未开始',
				// 按钮样式切换
				isBtnNo : true,
				isBtnMay: false,
				// 按钮状态记录  0按钮无法点击  1按钮点击跳转报名页  2按钮点击跳转比赛页
				btnNum:0,
				// 男子组别
				manList:[],
				// 女子组别
				womanList:[],
				// 男女组别详情是否显示
				manShow  :true,
				womanShow:true,
				// 排行榜入口是否显示
				rankEntrance:false
			}
		},
		methods: {
			btn(){
				if(this.btnNum == 0){
					console.log('哪都不能去!');
				}
				else if(this.btnNum == 1){
					// 跳转报名
					uni.navigateTo({
						url: '/pages/game/gameApply?id='+this.id
					});
				}
				else if(this.btnNum == 2){
					getUserTournamentState(this.user.groupId).then(res => {
						// 跳转比赛
						uni.navigateTo({
							url: '/page_run/index_new_algorithm?tournamentGroupId='+this.user.groupId
						});
					})
				}
			},
			goRank(){
				uni.navigateTo({
					url: '/pages/game/gameRank?id='+this.id
				});
			}
		},
		onShow() {
			// 加载组件
			uni.showLoading({
				title: '加载中'
			});
			this.manList = []
			this.womanList = []
			// 请求数据
			tournamentInfo(this.id).then(res => {
				uni.hideLoading();
				this.data = res.data
				uni.setNavigationBarTitle({
					title: res.data.name
				});
				// 判断男子数组状态
				if(this.data.manDistance.length == 0){
					this.manShow = false
				}else{
					this.manShow = true
					this.data.manDistance.forEach(item => {
					    let m = item.distance
						this.manList.push(m/1000 + 'Km')
					});
				}
				// 判断女子数组状态
				if(this.data.womanDistance.length == 0){
					this.womanShow = false
				}else{
					this.womanShow = true
					this.data.womanDistance.forEach(item => {
						let m = item.distance
						this.womanList.push(m/1000 + 'Km')
					});
				}
				// 当前时间
				let nowTime  = new Date(Date.parse(res.data.now))
				// 报名开始时间
				let ApplySta = new Date(Date.parse(res.data.registrationTimeStart))
				// 报名结束时间
				let ApplyEnd = new Date(Date.parse(res.data.registrationTimeEnd))
				// 比赛开始时间
				let gemeSta  = new Date(Date.parse(res.data.tournamentTimeStart))
				// 比赛结束时间
				let gemeEnd  = new Date(Date.parse(res.data.tournamentTimeEnd))
				uni.showLoading({
					title: '加载中'
				});
				// 查询报名状态
				getUserRegistrationState(this.id).then(res =>{
					uni.hideLoading();
					if(res.data == true){
						// console.log('已报名');
						// 如果比赛还未开始
						if(nowTime < gemeSta){
							this.status  = '比赛未开始'
							this.btnNum  = 0
							this.isBtnNo = true
							this.isBtnMay= false
						}
						// 如果比赛已经结束
						else if(nowTime > gemeEnd){
							this.status  = '比赛已结束'
							this.btnNum  = 0
							this.isBtnNo = true
							this.isBtnMay= false
						}
						// 如果比赛已经开始还没结束
						else{
							// 查询是否可比赛状态
							uni.showLoading({
								title: '加载中'
							});
							getUserTournamentState(this.id).then(res => {
								uni.hideLoading();
								if(res.data.groupId == 0){
									this.status  = res.data.msg
									this.btnNum  = 0
									this.isBtnNo = true
									this.isBtnMay= false
								}else{
									this.user  = res.data
									this.status  = '去比赛'
									this.btnNum  = 2
									this.isBtnNo = false
									this.isBtnMay= true
								}
							})
						}
					}
					else{
						// console.log('未报名');
						// 如果报名时间还没开始
						if(nowTime < ApplySta){
							this.status  = '报名未开始'
							this.btnNum  = 0
							this.isBtnNo = true
							this.isBtnMay= false
						}
						// 如果报名时间已经结束
						else if(nowTime > ApplyEnd){
							this.status  = '报名已截至'
							this.btnNum  = 0
							this.isBtnNo = true
							this.isBtnMay= false
						}
						// 如果报名时间已经开始但还没结束
						else{
							this.status  = '现在报名'
							this.btnNum  = 1
							this.isBtnNo = false
							this.isBtnMay= true
						}
						// 隐藏加载
						uni.hideLoading();
					}
				})
				// 查询排行入口是否显示
				if(nowTime > gemeSta){
					this.rankEntrance = true
				}else{
					this.rankEntrance = false
				}
			})
		},
		onLoad(options) {
			this.id = options.id
		}
	}
</script>


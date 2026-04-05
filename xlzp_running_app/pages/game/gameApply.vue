<style lang="scss" scoped>
	.box{
		width:100%;
		height:100vh;
		background: #fff;
		overflow: scroll;
	}
	.title{
		width:90%;
		margin: 0 auto;
		height:50px;
		line-height:55px;
		margin-bottom:10px;
		font-size:17px;
		font-weight:600;
	}
	.li{
		width:90%;
		margin: 0 auto;
		margin-bottom:10px;
		text-align: center;
		height:40px;
		line-height:38px;
		border-radius:12px;
		border:2px solid #f4f4f4;
		font-size:14px;
		position: relative;
		p{
			width:80%;
			margin: 0 auto;
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
		}
		.icon{
			position: absolute;
			width:20px;
			height:20px;
			right:10px;
			top:8.5px;
			display:none;
		}
	}
	.lis{
		animation: lis .3s ease-in-out forwards;
		.icon{
			display: block;
			animation: icon .3s ease-in-out forwards;
			transform: scale(.6);
		}
		@keyframes icon { to{
			transform: scale(1);
		}}
	}
	@keyframes lis { to{
		border:2px solid #39b54a;
	}}
	.btn{
		width:89%;
		background: #39b54a;
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
	.tips{
		width:90%;
		margin: 0 auto;
		margin-top:15px;
		font-size:14px;
		height:28px;
		line-height:28px;
		font-weight:600;
	}
	.empty{
		text-align: center;
		height:35px;
		line-height:35px;
		font-weight:600;
	}
</style>
<template>
	<view class="box">
		<!-- 标题 -->
		<div class="title">选择比赛组别( {{sex}} )</div>
		<!-- 选择列表 -->
		<div class="selectBox" v-for="(item,index) in list">
			<div class="li" :class="{lis:index == isLis}" @click="select(index,item)">
				<p>{{'(' + item.km + ')'}}  {{item.name}}</p>
				<image src="../../static/icon/y.png" class="icon"></image> 
			</div>
		</div>
		<!-- 数据为空时的提示 -->
		<div v-show="empty" class="empty">暂时没有适合您的组别</div>
		<!-- 注 -->
		<div class="tips">
			<div>注:</div>
			<div>1、 请仔细阅读比赛说明</div>
			<div>2、 每个比赛只能报名一种组别</div>
			<div>3、 需要一次完成组别距离才可计入成绩</div>
		</div>
		<!-- 按钮 -->
		<div class="btn" @click="btn" v-show="btnShow">确定报名</div>
	</view>
</template>

<script>
	// 数据请求
	import { tournamentInfo , tournamentRegistration } from '@/api/tournament.js';
	// 男女判断
	import { getUserInfoCache } from '@/utils/userInfoUtils.js';
	export default {
		data() {
			return {
				// 选择的数组数据
				list :[],
				// 当前选择后样式切换
				isLis:null,
				// 当前选择的id
				pitch: '',
				// 显示性别
				sex  :'未知',
				// 显示页面内容
				empty  :true,
				btnShow:false
			}
		},
		methods: {
			// 监听选择
			select(index,item){
				this.isLis = index
				this.pitch = item.id
			},
			btn(){
				if(this.pitch == ''){
					uni.showToast({
						title: '请选择一个组别',
						icon : 'none',
					});
				}else{
					console.log('选择id为:' + this.pitch);
					uni.showToast({
						title: '报名成功',
						icon : 'none'
					});
					tournamentRegistration(this.pitch).then(res => {
						console.log(res);
					})
					// 一秒之后返回页面
					setTimeout(()=>{
						uni.navigateBack({
							delta:1
						});
					},1000)
				}
			}
		},
		onLoad(options) {
			// 请求数据
			tournamentInfo(options.id).then(res => {
				let data = res.data
				
				// 分辨男女
				let userInfo = getUserInfoCache();
				if(userInfo.sex == true){// 男
					this.sex = '男子'
					if(data.manDistance.length == 0){
						console.log('男子为空');
					}else{
						this.btnShow = true
						this.empty   = false
						data.manDistance.forEach(item => {
							this.list.push({
								name: item.name,
								km  : item.distance/1000 + 'Km',
								id  : item.id,
							})
						});
					}
				}
				else{// 女
					this.sex = '女子'
					if(data.womanDistance.length == 0){
						console.log('女子为空');
					}else{
						this.btnShow = true
						this.empty   = false
						data.womanDistance.forEach(item => {
							this.list.push({
								name:item.name,
								km  :item.distance/1000 + 'Km',
								id  :item.id,
							})
						});
					}
				}
			})
		}
	}
</script>

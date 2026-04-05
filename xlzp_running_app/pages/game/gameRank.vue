<style lang="scss" scoped>
	.box{
		width:100%;
		height:100vh;
		background: #fff;
		.head{
			width:90%;
			height:60px;
			margin: 0 auto;
			display: flex;
			position: relative;
			.left{
				font-size:20px;
				font-weight:600;
				line-height:60px;
			}
			.select{
				position: absolute;
				right:0px;
				top:15px;
				width:180px;
				height:30px;
				border:1px solid #ececec;
				border-radius:8px;
				text-align: center;
				font-size:14px;
				font-weight: 600;
				line-height:28px;
				image{
					width:20px;
					height:20px;
					position: absolute;
					right:5px;
					margin-top:5px;
				}
			}
			.selectList{
				position: absolute;
				right:0px;
				top:52px;
				width:180px;
				background: #fff;
				border-radius:8px;
				box-shadow: 2px 2px 10px #ccc;
				padding-bottom:5px;
				animation: select .3s ease-in-out forwards;
				transform: scale(.8);
				opacity:0.3;
				// height:185px;
				// overflow:scroll;
				li{
					border-radius:5px;
					text-align: center;
					font-size:14px;
					font-weight: 600;
					height:40px;
					line-height:40px;
					margin-top:5px;
				}
				li:hover{
					background: #f0f0f0;
				}
			}
			@keyframes select { to{
				transform: scale(1);
				opacity:1;
			}}
		}
		.listNull{
			margin-left:5%;
			font-size:16px;
		}
		.list{
			width:100%;
			height:65px;
			margin-top:10px;
			display:flex;
			padding-left:1%;
			.rank{
				width:10%;
				text-align: center;
				line-height:60px;
				font-weight:600;
				font-size:16px;
			}
			.headPor{
				width:15%;
				border-bottom:1px solid #f8f8f8;
				image{
					height:40px;
					width:40px;
					margin-top:10px;
					margin-left:5px;
					border-radius:50%;
				}
			}
			.right{
				flex: 1;
				border-bottom:1px solid #f8f8f8;
				.top{
					margin-top:10px;
				}
				.bom{
					font-size:14px;
					color: #9e9e9e;
				}
			}
		}
	}
</style>

<template>
	<view class="box">
		<!-- 组件 -->
		<z-paging ref="paging" v-model="list" @query="getList">
			<!-- 没有更多提示 -->
			<!-- <view slot="loadingMoreNoMore"></view> -->
			<!-- 头部 -->
			<div class="head">
				<div class="left">排行榜</div>
				<!-- 下拉选择框 -->
				<div class="select" v-if="group.length !== 0" @click="selectHidden = !selectHidden">
					{{listItem.name}} ( {{listItem.distance/1000 + 'Km'}} )
					<image src="../../static/icon/xl.png"></image> 
				</div>
				<!-- 下拉列表 -->
				<div class="selectList" v-show="selectHidden">
					<li v-for="(item,index) in group" :key="index" @click="selectPitch(item)">
						{{item.name}} ( {{item.distance/1000 + 'Km'}} )
					</li>
				</div>
			</div>
			<!-- 排行列 -->
			<div class="list" v-for="(item,index) in list" :key="index">
				<div class="rank">{{index + 1}}</div>
				<div class="headPor"> 
					<image :src="item.avataer != '' ? imageHead + item.avataer : ''"></image> 
				</div>
				<div class="right">
					<div class="top">{{item.nickName}}</div>
					<div class="bom">次数:{{item.count}} | 累计:{{item.sumTime}} | 平均:{{item.avgTime}}</div>
				</div>
			</div>
		</z-paging>
	</view>
</template>

<script>
	import { tournamentInfo ,tournamentRankList} from '@/api/tournament.js';
	import config from '@/path/config.js';
	export default {
		data() {
			return {
				// 图片前缀
				imageHead: config.postUrl, 
				
				// 排行列表
				list :'',
				// 组别列表
				group:'',
				
				// 选择列表
				selectHidden:false,
				// 选择排行
				listItem:''
			}
		},
		methods: {
			// 选择列表点击事件
			selectPitch(item){
				// 赋值排行列表
				this.listItem = item
				// 刷新请求排行数据
				this.$refs.paging.reload();
				// 隐藏下拉列表
				this.selectHidden = false
			},
			// 数据请求
 			getList(pageNo, pageSize) {
				tournamentRankList({ id: this.listItem.id, pageNum: pageNo, pageSize: pageSize, reasonable: false })
				.then(res => {
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
			}
		},
		onLoad(options) {
			tournamentInfo(options.id).then(res => {
				// 合并男女数组 加入排行切换选择列表
				this.group = res.data.manDistance.concat(res.data.womanDistance)
				// 初始化时 请求的排行为数组第一个
				this.listItem = this.group[0]
			})
		}
	}
</script>

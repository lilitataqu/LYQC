<template>
    <view>
        <view v-if="steps == '1'">
            <view class="">
                <view class="text-center padding-sm margin-top">
                    <text class="text-grey text-xl">欢迎使用小程序</text>
                </view>
                <view class="text-center">
                    <text class="text-grey text-sm">完善您的信息让我们为您提供更精准的服务</text>
                </view>
                <view class="text-center margin-top-xl">
                    <text class="text-grey text-lg">请问您的性别是?</text>
                </view>
                <view class="flex margin-top-md padding justify-center">
                    <button v-if="sex" class="cu-btn bg-blue margin-left margin-right round lg" @tap="changeSex" :data-sex="true">男</button>
                    <button v-if="!sex" class="cu-btn line-blue margin-left margin-right round lg" @tap="changeSex" :data-sex="true">男</button>
                    <button v-if="!sex" class="cu-btn bg-red margin-left margin-right round lg" @tap="changeSex" :data-sex="false">女</button>
                    <button v-if="sex" class="cu-btn line-red margin-left margin-right round lg" @tap="changeSex" :data-sex="false">女</button>
                </view>
            </view>

            <view class="text-center padding margin-top">
                <button class="cu-btn bg-grey round lg" @tap="next" data-steps="2">下一步</button>
            </view>

            <view class="text-center padding margin-top">
                <text class="text-grey text-lg">性别的不同,将会影响卡路里计算的准确性哦。</text>
            </view>
        </view>

        <view v-if="steps == '2'">
            <view class="">
                <view class="text-center margin-top-xl">
                    <text class="text-grey text-lg">请问您的身高和体重是?</text>
                </view>
                <view class="flex margin-top-md padding justify-center bg">
                    <form>
                        <view class="cu-form-group margin-top" style="width: 300px">
                            <view class="title">身高</view>
                            <picker @change="heightSetting" :value="height_index" :range="height_picker">
                                <view class="picker">{{ height_picker[height_index] }} Cm</view>
                            </picker>
                        </view>
                        <view class="cu-form-group margin-top">
                            <view class="title">体重</view>
                            <picker @change="weightSetting" :value="weight_index" :range="weight_picker">
                                <view class="picker">{{ weight_picker[weight_index] }} Kg</view>
                            </picker>
                        </view>
                    </form>
                </view>
            </view>

            <view class="text-center padding margin-top">
                <button class="cu-btn bg-grey margin-left margin-right round lg" @tap="next" data-steps="1">上一步</button>
                <button class="cu-btn bg-grey margin-left margin-right round lg" @tap="next" data-steps="3">下一步</button>
            </view>
            <view class="text-center padding margin-top">
                <text class="text-grey text-lg">身高体重的不同,将会影响卡路里和运动里程,运动配速的计算准确性哦。</text>
            </view>
        </view>

		<view v-if="steps == '3'">
		    <view class="">
		        <view class="text-center margin-top-xl">
		            <text class="text-grey text-lg">请输入您的姓名与学号:</text>
		        </view>
		        <view class="flex margin-top-md padding justify-center bg">
		            <form>
		                <view class="cu-form-group margin-top" style="width: 300px">
		                    <view class="title">姓名</view>
							<input class="uni-input text-right" v-model="name" maxlength="10" placeholder="限制10个字符" />
		                </view>
		                <view class="cu-form-group margin-top">
		                    <view class="title">学号</view>
							<input class="uni-input text-right" v-model="studentId" maxlength="30" placeholder="限制30个字符" />
		                </view>
						<view class="cu-form-group margin-top">
						    <view class="title">学校</view>
							 <uni-data-picker :localdata="schoolList" popup-title="请选择学校" 
								 @change="schoolListChange" :map="{text: 'deptName', value: 'deptId'}"
								 :clear-icon="false" :border="false">
							 </uni-data-picker>
						</view>
						<view class="cu-form-group margin-top" v-show="showBranchCourts">
						    <view class="title">学院</view>
							<uni-data-picker ref="branchCourtsChoose" :localdata="branchCourtsList" popup-title="请选择学院"
								@change="branchCourtsListChange" @popupopened="branchCourtOpen"
								:map="{text: 'deptName', value: 'deptId'}"
								:clear-icon="false" :border="false">
							</uni-data-picker>
						</view>
		            </form>
		        </view>
		        <view class="text-center padding margin-top">
		            <text class="text-grey text-lg">请准确输入，将会影响成绩统计。</text>
		        </view>
		    </view>
		
		    <view class="text-center padding margin-top">
		        <button class="cu-btn bg-grey margin-left margin-right round lg" @tap="next" data-steps="2">上一步</button>
		        <button class="cu-btn bg-grey margin-left margin-right round lg" @tap="next" data-steps="4">完成</button>
		    </view>
		</view>
		
		<!-- 旧版设置里程与卡路里 -->
        <!-- <view v-if="steps == '3'">
            <view class="">
                <view class="text-center margin-top-xl">
                    <text class="text-grey text-lg">请设定您的路程和卡路里目标:</text>
                </view>
                <view class="flex margin-top-md padding justify-center bg">
                    <form>
                        <view class="cu-form-group margin-top" style="width: 300px">
                            <view class="title">路程</view>
                            <picker @change="distanceSetting" :value="distance_index" :range="distance_picker">
                                <view class="picker">{{ distance_picker[distance_index] }} Km</view>
                            </picker>
                        </view>
                        <view class="cu-form-group margin-top">
                            <view class="title">卡路里</view>
                            <picker @change="kcalSetting" :value="kcal_index" :range="kcal_picker">
                                <view class="picker">{{ kcal_picker[kcal_index] }} Kcal</view>
                            </picker>
                        </view>
                    </form>
                </view>
                <view class="text-center padding margin-top">
                    <text class="text-grey text-lg">每周目标的完成进度,将在每周日自动重置。</text>
                </view>
            </view>

            <view class="text-center padding margin-top">
                <button class="cu-btn bg-grey margin-left margin-right round lg" @tap="next" data-steps="2">上一步</button>
                <button class="cu-btn bg-grey margin-left margin-right round lg" @tap="next" data-steps="4">完成</button>
            </view>
        </view> -->
    </view>
</template>

<script>
// pages/login/setting.js
import {updateWechat} from './@/api/userInfo.js'
import { apiUserInfo } from '@/utils/userInfoUtils.js';
import settingConstant from '@/constant/setting_constant.js';
import { setToken } from '@/path/auth.js';
import { getSchoolList, getBranchCourtsList } from '@/api/deptApi.js';
export default {
    data() {
        return {
            steps: '1',
            sex: true,
            weight_index: 0,
            weight_picker: [],
            height_index: 0,
            height_picker: [],
            distance_picker: [],
            distance_index: 0,
            kcal_picker: [],
            kcal_index: 0,
			userToken: "",
			name: "",
			studentId: "",
			schoolList: [],
			schoolDeptId: null,
			branchCourtsList: [],
			branchCourtsDeptId: null,
			showBranchCourts: false, //是否显示学院选择
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
		this.userToken = options.token;
        let weight = [];
        let height = [];
        let distance = [];
        let kcal = [];
        for (let i = settingConstant.weightBegin; i <= settingConstant.weightEnd; i++) {
            weight.push(i);
        }

        for (let i = settingConstant.heightBegin; i <= settingConstant.heightEnd; i++) {
            height.push(i);
        }

        for (let i = settingConstant.distanceBegin; i <= settingConstant.distanceEnd; i++) {
            distance.push(i);
        }

		for (let i = settingConstant.kcalBegin, j = (settingConstant.kcalBegin * 100); i <= settingConstant.kcalEnd; j = (i + 1) * 100, i++) {
       	kcal.push(j);
       }

        this.setData({
            weight_picker: weight,
            height_picker: height,
            distance_picker: distance,
            kcal_picker: kcal
        });
		
		this.apiGetSchoolList();
		
        uni.setNavigationBarTitle({
            title: '设定计划[1/3]'
        });
    },
    methods: {
        weightSetting(e) {
            if (this.vibrate) {
                uni.vibrateShort({});
            }

            this.setData({
                weight_index: e.detail.value
            });
        },

        heightSetting(e) {
            if (this.vibrate) {
                uni.vibrateShort({});
            }

            this.setData({
                height_index: e.detail.value
            });
        },

        distanceSetting(e) {
            if (this.vibrate) {
                uni.vibrateShort({});
            }

            this.setData({
                distance_index: e.detail.value
            });
        },

        kcalSetting(e) {
            if (this.vibrate) {
                uni.vibrateShort({});
            }

            this.setData({
                kcal_index: e.detail.value
            });
        },

        settingMenu() {
            this.vibrateFunc(1);
            uni.openSetting({});
        },

        changeSex(e) {
			console.log(e);
            this.vibrateFunc(1);
            this.setData({
                sex: e.currentTarget.dataset.sex == true ? true : false
            });
        },

        next(e) {
            this.vibrateFunc(1);

            if (e.currentTarget.dataset.steps == 4) {
				if(!(this.name != null && this.name != "")){
					uni.showToast({
						icon: 'error',
						title: '请填写姓名',
						duration: 2000
					});
					return;
				}
				if(!(this.studentId != null && this.studentId != "")){
					uni.showToast({
						icon: 'error',
						title: '请填写学号',
						duration: 2000
					});
					return;
				}
				if(this.showBranchCourts){
					if(!(this.branchCourtsDeptId != null && this.branchCourtsDeptId != "")){
						uni.showToast({
							icon: 'error',
							title: '请选择学院',
							duration: 2000
						});
						return;
					}
				}else{
					if(!(this.schoolDeptId != null && this.schoolDeptId != "")){
						uni.showToast({
							icon: 'error',
							title: '请选择学校',
							duration: 2000
						});
						return;
					}
					this.branchCourtsDeptId = this.schoolDeptId;
				}
				
				setToken(this.userToken);
				// 存储用户基本信息
				updateWechat({
					weight : this.weight_picker[this.weight_index],
					height : this.height_picker[this.height_index],
					distance : this.distance_picker[this.distance_index],
					kcal : this.kcal_picker[this.kcal_index],
					sex : this.sex,
					nickName: this.name,
					studentId: this.studentId,
					deptId: this.branchCourtsDeptId
				}).then(async function(res){
					await apiUserInfo();
					uni.switchTab({
						url: '../index/index'
					});
				})
				
                // uni.setStorageSync('weight', this.weight_picker[this.weight_index]);
                // uni.setStorageSync('height', this.height_picker[this.height_index]);
                // uni.setStorageSync('distance', this.distance_picker[this.distance_index]);
                // uni.setStorageSync('kcal', this.kcal_picker[this.kcal_index]);
                // uni.setStorageSync('sex', this.sex);
                // uni.switchTab({
                //     url: '../index/index'
                // });
            }

            this.setData({
                steps: e.currentTarget.dataset.steps
            });

            if (this.steps == '1') {
                uni.setNavigationBarTitle({
                    title: '设定计划[1/3]'
                });
            } else if (this.steps == '2') {
                uni.setNavigationBarTitle({
                    title: '设定计划[2/3]'
                });
            } else if (this.steps == '3') {
                uni.setNavigationBarTitle({
                    title: '设定计划[3/3]'
                });
            }
        },

        vibrateFunc(mode) {
            if (uni.getStorageSync('vibrate')) {
                if (mode == 1) {
                    uni.vibrateShort({
                        complete: (res) => {}
                    });
                }

                if (mode == 2) {
                    uni.vibrateLong({
                        complete: (res) => {}
                    });
                }
            }
        },
		
		/**
		 * 选择学校后回调
		 */
		schoolListChange(e){
			this.schoolDeptId = e.detail.value[0].value;
			this.apiGetBranchCourtsList();
		},
		
		/**
		 * 打开学院选择回调
		 */
		branchCourtOpen(){
			if(!(this.schoolDeptId != null && this.schoolDeptId != "")){
				this.$refs.branchCourtsChoose.hide()
				uni.showToast({
					icon: 'error',
					title: '请先选择学校',
					duration: 2000
				});
			}
		},
		
		/**
		 * 选择学院后回调
		 */
		branchCourtsListChange(e){
			this.branchCourtsDeptId = e.detail.value[0].value;
			console.log(this.branchCourtsDeptId);
		},
		
		/**
		 * 获取学校列表
		 */
		apiGetSchoolList(){
			getSchoolList().then(res => {
				this.schoolList = res.data;
			})
		},
		
		/**
		 * 选择学校后获取学院列表
		 */
		apiGetBranchCourtsList(){
			getBranchCourtsList(this.schoolDeptId).then(res => {
				if(res.data.length > 0){
					this.showBranchCourts = true;
					this.branchCourtsList = res.data;
				}else{
					this.showBranchCourts = false;
				}
			})
		}
		
    }
};
</script>
<style>
/* pages/login/setting.wxss */
</style>

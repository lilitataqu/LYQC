<template>
	<view>
		<form>
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input class="uni-input text-right" v-model="nickName" maxlength="10" placeholder="编辑姓名" @click="opneEditName" disabled />
			</view>
			<view class="cu-form-group">
				<view class="title">学号</view>
				<input class="uni-input text-right" v-model="studentId" maxlength="30" placeholder="编辑学号" @click="opneEditStudentId" disabled />
			</view>
			<view class="cu-form-group">
				<view class="title">学校</view>
				<input class="uni-input text-right" v-model="deptName" placeholder="编辑学校" @click="openEditSchool" disabled />
			</view>
			<view class="cu-form-group" v-show="deptName.includes('河南财经政法大学')">
				<view class="title">授课老师</view>
				<input class="uni-input text-right" v-model="className" placeholder="编辑课程" @click="openEditClass" disabled />
			</view>

			<view class="cu-form-group margin-top">
				<view class="title">性别</view>
				<picker @change="sexSetting" :value="sex_index" :range="sex_picker">
					<view class="picker">{{ sex_picker[sex_index] }}</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">体重</view>
				<picker @change="weightSetting" :value="weight_index" :range="weight_picker">
					<view class="picker">{{ weight_picker[weight_index] }} Kg</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">身高</view>
				<picker @change="heightSetting" :value="height_index" :range="height_picker">
					<view class="picker">{{ height_picker[height_index] }} Cm</view>
				</picker>
			</view>
			<!-- 		<view class="cu-form-group margin-top">
				<view class="title">路程目标</view>
				<picker @change="distanceSetting" :value="distance_index" :range="distance_picker">
					<view class="picker">{{ distance_picker[distance_index] }} Km</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">卡路里目标</view>
				<picker @change="kcalSetting" :value="kcal_index" :range="kcal_picker">
					<view class="picker">{{ kcal_picker[kcal_index] }} Kcal</view>
				</picker>
			</view> -->

			<view class="cu-form-group margin-top">
				<view class="title">屏幕常亮</view>
				<switch :checked="keepScreenOn" @tap="keepScreenOnSwitch"></switch>
			</view>
			<view class="cu-form-group">
				<view class="title">手机震动</view>
				<switch :checked="vibrate" @tap="vibrateSwitch"></switch>
			</view>
			<view class="cu-form-group arrow">
				<view class="title">后台定位</view>
				<button class="cu-btn bg-orange" @tap="settingMenu">设置</button>
			</view>

			<!-- <view class="cu-form-group margin-top">
				<view class="title">清空数据</view>
				<button class="cu-btn bg-red" @tap="clearStorage">清除</button>
			</view> -->
		</form>

		<view>
			<!-- 修改姓名 -->
			<uni-popup ref="nameInputDialog" type="dialog">
				<uni-popup-dialog
					ref="inputClose"
					mode="input"
					title="修改姓名"
					v-model="nickName"
					placeholder="请输入姓名"
					@close="closeEditName"
					:before-close="true"
					@confirm="editName"
				></uni-popup-dialog>
			</uni-popup>
		</view>
		<view>
			<!-- 修改学号 -->
			<uni-popup ref="studentIdInputDialog" type="dialog">
				<uni-popup-dialog
					ref="inputClose"
					mode="input"
					title="修改学号"
					v-model="studentId"
					placeholder="请输入学号"
					@close="closeEditStudentId"
					:before-close="true"
					@confirm="editStudentId"
				></uni-popup-dialog>
			</uni-popup>
		</view>
		<view>
			<!-- 修改学校、学院 -->
			<uni-popup ref="deptDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="修改学校、学院 " @close="closeEditSchool" :before-close="true" @confirm="editSchool">
					<view class="cu-chat" style="width: 100%;">
						<view class="cu-form-group">
							<view class="title">学校</view>
							<uni-data-picker
								ref="schoolChoose"
								:localdata="schoolList"
								popup-title="请选择学校"
								@change="schoolListChange"
								:map="{ text: 'deptName', value: 'deptId' }"
								:clear-icon="false"
								:border="false"
							></uni-data-picker>
						</view>
						<view class="cu-form-group" v-show="showBranchCourts">
							<view class="title">学院</view>
							<uni-data-picker
								ref="branchCourtsChoose"
								:localdata="branchCourtsList"
								popup-title="请选择学院"
								@change="branchCourtsListChange"
								@popupopened="branchCourtOpen"
								:map="{ text: 'deptName', value: 'deptId' }"
								:clear-icon="false"
								:border="false"
							></uni-data-picker>
						</view>
					</view>
				</uni-popup-dialog>
			</uni-popup>
		</view>
		<view>
			<!-- 修改课时与老师 -->
			<uni-popup ref="classDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="修改课程、老师" @close="closeEditClass" :before-close="true" @confirm="editClass">
					<view class="cu-chat" style="width: 100%;">
						<view class="cu-form-group">
							<view class="title">星期</view>
							<uni-data-picker
								ref="schoolChoose"
								:localdata="weekInfo"
								popup-title="请选择星期"
								@change="weekChange"
								:map="{ text: 'dictLabel', value: 'dictValue' }"
								:clear-icon="false"
								:border="false"
							></uni-data-picker>
						</view>
						<view class="cu-form-group">
							<view class="title">时间</view>
							<uni-data-picker
								ref="classNumber"
								:localdata="classNumber"
								popup-title="请选择上课时间"
								@change="classNumberChange"
								@popupopened="classNumberOpen"
								:map="{ text: 'dictLabel', value: 'dictValue' }"
								:clear-icon="false"
								:border="false"
							></uni-data-picker>
						</view>
						<view class="cu-form-group">
							<view class="title">老师</view>
							<uni-data-picker
								ref="teacherList"
								:localdata="teacherList"
								popup-title="请选择老师"
								@change="teacherChange"
								@popupopened="teacherChooseOpen"
								:map="{ text: 'userNickName', value: 'id' }"
								:clear-icon="false"
								:border="false"
							></uni-data-picker>
						</view>
					</view>
				</uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
// pages/setting/index.js
import { getUserInfo, updateWechat } from '../../api/userInfo.js';
import { apiUserInfo } from '@/utils/userInfoUtils.js';
import settingConstant from '@/constant/setting_constant.js';
import { getSchoolList, getBranchCourtsList } from '@/api/deptApi.js';
import { getWeekInfo, getClassNumber, getTeacherList, saveClass } from '@/api/classApi.js';
export default {
	data() {
		return {
			sex_picker: ['女', '男'],
			sex_index: 0,
			weight_index: 0,
			weight_picker: [0],
			height_index: 0,
			height_picker: [0],
			distance_picker: [0],
			distance_index: 0,
			kcal_picker: [0],
			kcal_index: 0,
			keepScreenOn: false,
			vibrate: false,
			sex: false, //false是女性,true是男性
			nickName: '',
			studentId: '',
			deptName: '',
			className: '',
			schoolList: [],
			schoolDeptId: null,
			schoolDeptName: '',
			branchCourtsList: [],
			branchCourtsDeptId: null,
			branchCourtsDeptName: '',
			weekInfo: [],
			weekInfoName: '',
			weekInfoValue: null,
			classNumber: [],
			classNumberName: '',
			classNumberValue: null,
			teacherList: [],
			teacherName: '',
			classId: null,
			showBranchCourts: false, //是否显示学院选择
		};
	},
	/**
	 * 生命周期函数--监听页面加载
	 */ onLoad: function(options) {
		uni.setNavigationBarTitle({
			title: '程序设置'
		});

		uni.showLoading({
			title: '加载中'
		});

		var weight = [];
		var height = [];
		var distance = [];
		var kcal = [];
		for (let i = settingConstant.weightBegin; i <= settingConstant.weightEnd; i++) {
			weight.push(i);
		}

		for (let i = settingConstant.heightBegin; i <= settingConstant.heightEnd; i++) {
			height.push(i);
		}

		for (let i = settingConstant.distanceBegin; i <= settingConstant.distanceEnd; i++) {
			distance.push(i);
		}

		for (let i = settingConstant.kcalBegin, j = settingConstant.kcalBegin * 100; i <= settingConstant.kcalEnd; j = (i + 1) * 100, i++) {
			kcal.push(j);
		}

		this.apiGetSchoolList();
		this.apiGetWeekInfoAndClassNumber();

		// let weight_index;
		// let height_index;
		// let distance_index;
		// let kcal_index;
		getUserInfo().then(res => {
			let data = res.data;

			let weight_index = weight.indexOf(data.weight);
			let height_index = height.indexOf(data.height);
			let distance_index = distance.indexOf(data.distance);
			let kcal_index = kcal.indexOf(data.kcal);

			if (weight_index < 0) {
				weight_index = 0;
			}

			if (height_index < 0) {
				height_index = 0;
			}

			if (distance_index < 0) {
				distance_index = 4;
			}

			if (kcal_index < 0) {
				kcal_index = 0;
			}

			this.setData({
				weight_picker: weight,
				height_picker: height,
				distance_picker: distance,
				kcal_picker: kcal,
				weight_index: weight_index,
				height_index: height_index,
				distance_index: distance_index,
				kcal_index: kcal_index,
				sex_index: data.sex ? 1 : 0,
				vibrate: uni.getStorageSync('vibrate'),
				keepScreenOn: uni.getStorageSync('keepScreenOn'),
				nickName: data.nickName,
				studentId: data.studentId,
				deptName: data.deptName,
				className: data.className
			});
			uni.hideLoading();
		});

		// let weight_index = weight.indexOf(uni.getStorageSync('weight'));
		// let height_index = height.indexOf(uni.getStorageSync('height'));
		// let distance_index = distance.indexOf(uni.getStorageSync('distance'));
		// let kcal_index = kcal.indexOf(uni.getStorageSync('kcal'));

		// if (weight_index < 0) {
		// 	weight_index = 0;
		// }

		// if (height_index < 0) {
		// 	height_index = 0;
		// }

		// if (distance_index < 0) {
		// 	distance_index = 4;
		// }

		// if (kcal_index < 0) {
		// 	kcal_index = 0;
		// }

		// this.setData({
		// 	weight_picker: weight,
		// 	height_picker: height,
		// 	distance_picker: distance,
		// 	kcal_picker: kcal,
		// 	weight_index: weight_index,
		// 	height_index: height_index,
		// 	distance_index: distance_index,
		// 	kcal_index: kcal_index,
		// 	sex_index: uni.getStorageSync('sex') ? 0 : 1,
		// 	vibrate: uni.getStorageSync('vibrate'),
		// 	keepScreenOn: uni.getStorageSync('keepScreenOn')
		// });
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {},
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {},
	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {},
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {
		apiUserInfo();
		// uni.setStorageSync('weight', this.weight_picker[this.weight_index]);
		// uni.setStorageSync('height', this.height_picker[this.height_index]);
		// uni.setStorageSync('distance', this.distance_picker[this.distance_index]);
		// uni.setStorageSync('kcal', this.kcal_picker[this.kcal_index]);
		// uni.setStorageSync('vibrate', this.vibrate);
		// uni.setStorageSync('keepScreenOn', this.keepScreenOn);
		// uni.setStorageSync('sex', this.sex_index == 0 ? true : false);
	},
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {},
	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {},
	methods: {
		keepScreenOnSwitch() {
			if (this.vibrate) {
				uni.vibrateShort({});
			}

			this.setData({
				keepScreenOn: !this.keepScreenOn
			});
			uni.setKeepScreenOn({
				keepScreenOn: this.keepScreenOn
			});
			uni.setStorageSync('keepScreenOn', this.keepScreenOn);
		},

		vibrateSwitch() {
			if (!this.vibrate) {
				uni.vibrateShort({});
			}

			this.setData({
				vibrate: !this.vibrate
			});
		},

		sexSetting(e) {
			if (this.vibrate) {
				uni.vibrateShort({});
			}
			this.apiUpdateWechat({ sex: e.detail.value });
			this.setData({
				sex_index: e.detail.value
			});
		},

		weightSetting(e) {
			if (this.vibrate) {
				uni.vibrateShort({});
			}

			this.apiUpdateWechat({ weight: this.weight_picker[e.detail.value] });

			this.setData({
				weight_index: e.detail.value
			});
		},

		heightSetting(e) {
			if (this.vibrate) {
				uni.vibrateShort({});
			}

			this.apiUpdateWechat({ height: this.height_picker[e.detail.value] });

			this.setData({
				height_index: e.detail.value
			});
		},

		distanceSetting(e) {
			if (this.vibrate) {
				uni.vibrateShort({});
			}

			this.apiUpdateWechat({ distance: this.distance_picker[e.detail.value] });

			this.setData({
				distance_index: e.detail.value
			});
		},

		kcalSetting(e) {
			if (this.vibrate) {
				uni.vibrateShort({});
			}

			this.apiUpdateWechat({ kcal: this.kcal_picker[e.detail.value] });

			this.setData({
				kcal_index: e.detail.value
			});
		},

		clearStorage() {
			if (this.vibrate) {
				uni.vibrateShort({});
			}

			uni.showModal({
				title: '提示',
				content: '确定要清空数据?清空后将无法撤回!',

				success(res) {
					if (res.confirm) {
						uni.clearStorage({
							complete: res => {
								uni.showToast({
									title: '清空成功',
									icon: 'success'
								});
							}
						});
					} else {
						uni.showToast({
							title: '取消清空'
						});
					}
				}
			});
		},

		settingMenu() {
			uni.openSetting({});
		},

		apiUpdateWechat({ sex = null, weight = null, height = null, distance = null, kcal = null, nickName = null, studentId = null, deptId = null }) {
			let userInfo = {};
			if (sex != null) {
				userInfo.sex = parseInt(sex);
			}
			if (weight != null) {
				userInfo.weight = parseInt(weight);
			}
			if (height != null) {
				userInfo.height = parseInt(height);
			}
			if (distance != null) {
				userInfo.distance = parseInt(distance);
			}
			if (kcal != null) {
				userInfo.kcal = parseInt(kcal);
			}
			if (nickName != null && nickName != '') {
				userInfo.nickName = nickName;
			}
			if (studentId != null && studentId != '') {
				userInfo.studentId = studentId;
			}
			if (deptId != null) {
				userInfo.deptId = deptId;
			}
			var that = this;
			updateWechat(userInfo).then(res => {
				apiUserInfo();
				if (nickName != null && nickName != '') {
					that.nickName = nickName;
				}
				if (studentId != null && studentId != '') {
					that.studentId = studentId;
				}
				if (deptId != null) {
					that.deptName = that.showBranchCourts ? that.schoolDeptName + '-' + that.branchCourtsDeptName : that.schoolDeptName;
				}
			});
		},

		/**
		 * 打开姓名编辑弹窗
		 */
		opneEditName() {
			this.$refs.nameInputDialog.open();
		},

		/**
		 * 关闭姓名编辑弹窗
		 */
		closeEditName() {
			this.$refs.nameInputDialog.close();
		},

		/**
		 * 修改姓名
		 */
		editName(val) {
			if (val != null && val != '') {
				if (val.length > 10) {
					uni.showToast({
						title: '请输入10字符以内的姓名',
						icon: 'error'
					});
					return;
				}
				this.apiUpdateWechat({ nickName: val });
				this.closeEditName();
			} else {
				uni.showToast({
					title: '请输入姓名',
					icon: 'error'
				});
				return;
			}
		},

		/**
		 * 打开学号编辑弹窗
		 */
		opneEditStudentId() {
			this.$refs.studentIdInputDialog.open();
		},

		/**
		 * 关闭姓名编辑弹窗
		 */
		closeEditStudentId() {
			this.$refs.studentIdInputDialog.close();
		},

		/**
		 * 修改学号
		 */
		editStudentId(val) {
			if (val != null && val != '') {
				if (val.length > 30) {
					uni.showToast({
						title: '请输入30字符以内的学号',
						icon: 'error'
					});
					return;
				}
				this.apiUpdateWechat({ studentId: val });
				this.closeEditStudentId();
			} else {
				uni.showToast({
					title: '请输入学号',
					icon: 'error'
				});
				return;
			}
		},

		/**
		 * 打开学校、学院选择
		 */
		openEditSchool() {
			this.$refs.deptDialog.open();
		},

		/**
		 * 关闭学校、学院选择
		 */
		closeEditSchool() {
			this.$refs.deptDialog.close();
		},

		/**
		 * 选择学校后回调
		 */
		schoolListChange(e) {
			this.schoolDeptId = e.detail.value[0].value;
			this.schoolDeptName = e.detail.value[0].text;
			this.apiGetBranchCourtsList();
		},

		/**
		 * 打开学院选择回调
		 */
		branchCourtOpen() {
			if (!(this.schoolDeptId != null && this.schoolDeptId != '')) {
				this.$refs.branchCourtsChoose.hide();
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
		branchCourtsListChange(e) {
			this.branchCourtsDeptId = e.detail.value[0].value;
			this.branchCourtsDeptName = e.detail.value[0].text;
		},

		/**
		 * 修改学校、学院
		 */
		editSchool() {
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
			
			this.apiUpdateWechat({ deptId: this.branchCourtsDeptId });
			this.closeEditSchool();
			
			// if (this.branchCourtsDeptId != null && this.branchCourtsDeptId != '') {
			// 	this.apiUpdateWechat({ deptId: this.branchCourtsDeptId });
			// 	this.closeEditSchool();
			// } else {
			// 	uni.showToast({
			// 		title: '请选择学院',
			// 		icon: 'error'
			// 	});
			// 	return;
			// }
		},
		
		/**
		 * 打开课程与老师选择
		 */
		openEditClass() {
			this.$refs.classDialog.open();
		},
		
		/**
		 * 关闭课程与老师选择
		 */
		closeEditClass() {
			this.$refs.classDialog.close();
		},
		
		/**
		 * 选择星期后回调
		 */
		weekChange(e) {
			this.weekInfoValue = e.detail.value[0].value;
			this.weekInfoName = e.detail.value[0].text;
		},
		
		/**
		 * 打开课程时间选择后回调
		 */
		classNumberOpen() {
			if (!(this.weekInfoValue != null && this.weekInfoValue != '')) {
				this.$refs.classNumber.hide();
				uni.showToast({
					icon: 'error',
					title: '请先选择星期',
					duration: 2000
				});
				return;
			}
		},
		
		/**
		 * 选择课程时间后回调
		 */
		classNumberChange(e) {
			this.classNumberValue = e.detail.value[0].value;
			this.classNumberName = e.detail.value[0].text;
			this.apiGetTeacherList();
		},
		
		/**
		 * 选择老师后回调
		 */
		teacherChange(e) {
			this.teacherName = e.detail.value[0].text;
			this.classId = e.detail.value[0].value;
			console.log(this.classId);
		},
		
		/**
		 * 打开老师选择回调
		 */
		teacherChooseOpen() {
			if (!(this.classNumberValue != null && this.classNumberValue != '')) {
				this.$refs.teacherList.hide();
				uni.showToast({
					icon: 'error',
					title: '请先选择时间',
					duration: 2000
				});
			}
		},
		
		/**
		 * 修改课程、老师
		 */
		editClass() {
			if (this.classId != null && this.classId != '') {
				this.apiSaveClass();
				this.closeEditClass();
			} else {
				uni.showToast({
					title: '请选择老师',
					icon: 'error'
				});
				return;
			}
		},

		/**
		 * 获取学校列表
		 */
		apiGetSchoolList() {
			getSchoolList().then(res => {
				this.schoolList = res.data;
			});
		},

		/**
		 * 选择学校后获取学院列表
		 */
		apiGetBranchCourtsList() {
			getBranchCourtsList(this.schoolDeptId).then(res => {
				if(res.data.length > 0){
					this.showBranchCourts = true;
					this.branchCourtsList = res.data;
				}else{
					this.showBranchCourts = false;
				}
			});
		},
		
		/**
		 * 获取星期与课程时间列表
		 */
		apiGetWeekInfoAndClassNumber() {
			getWeekInfo().then(res => {
				this.weekInfo = res.data;
			});
			getClassNumber().then(res => {
				this.classNumber = res.data;
			});
		},
		
		/**
		 * 根据星期与课程时间获取教师列表
		 */
		apiGetTeacherList() {
			getTeacherList({week: this.weekInfoValue, classHour: this.classNumberValue}).then(res => {
				this.teacherList = res.data;
			});
		},
		
		apiSaveClass() {
			let that = this;
			saveClass({classId: this.classId}).then(res => {
				that.className = that.weekInfoName + '-' + that.classNumberName + '-' + that.teacherName;
			});
		}
	}
};
</script>
<style>
/* pages/setting/index.wxss */
</style>

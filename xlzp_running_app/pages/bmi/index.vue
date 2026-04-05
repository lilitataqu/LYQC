<template>
    <view>
        <view class="margin-xl bg-white padding-xl radius shadow-lg">
            <view class="text-center margin-bottom text-lg text-grey">BMI计算</view>
            <view class="text-content">
                <view class="text-center">
                    您的BMI为:
                    <text class="text-bold text-red">{{ bmi }}</text>
                </view>
            </view>
        </view>

        <view class="margin-xl bg-white padding-xl radius shadow-lg">
            <view class="text-center margin-bottom text-lg text-grey">计算方法</view>
            <view class="text-content">
                <view class="margin-top-sm text-center">BMI = 体重(公斤) / 身高^2(米^2)</view>
            </view>
        </view>

        <view class="margin-xl bg-white padding-xl radius shadow-lg">
            <view class="text-center margin-bottom text-lg text-grey">参考范围</view>
            <view class="text-content text-center">
                <view class="text-bold">体重过轻</view>
                <view class="margin-top-sm">BMI ＜ 18.5</view>
                <view class="margin-top-sm text-bold">正常范围</view>
                <view class="margin-top-sm">18.5 ≦ BMI ＜ 24</view>
                <view class="margin-top-sm text-bold">体重过重</view>
                <view class="margin-top-sm">24 ≦ BMI ＜ 27</view>
                <view class="margin-top-sm text-bold">轻度肥</view>
                <view class="margin-top-sm">27 ≦ BMI ＜ 30</view>
                <view class="margin-top-sm text-bold">中度肥</view>
                <view class="margin-top-sm">30 ≦ BMI ＜ 35</view>
                <view class="margin-top-sm text-bold">重度肥</view>
                <view class="margin-top-sm">BMI ≧ 35</view>
            </view>
        </view>
    </view>
</template>

<script>
// pages/bmi/index.js
import {getUserInfo} from '../../api/userInfo.js';
export default {
    data() {
        return {
            bmi: 0
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        uni.setNavigationBarTitle({
            title: 'BMI计算'
        });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.calBMI();
    },
    methods: {
        calBMI() {
			getUserInfo().then(res => {
				let weight = res.data.weight;
				let height = res.data.height / 100;
				let bmi = weight / Math.pow(height, 2);
				bmi = bmi.toFixed(1);
				this.setData({
				    bmi:'sss'
				});
			});
            // //BMI = 体重(公斤) / 身高^2(米^2)
            // let weight = uni.getStorageSync('weight');
            // let height = uni.getStorageSync('height') / 100;
            // let bmi = weight / Math.pow(height, 2);
            // bmi = bmi.toFixed(1);
            // this.setData({
            //     bmi: bmi
            // });
        }
    }
};
</script>
<style>
/* pages/bmi/index.wxss */
</style>

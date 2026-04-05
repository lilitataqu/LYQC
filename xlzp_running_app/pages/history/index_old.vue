<template>
    <view>
        <view v-if="runinfo_data.length > 0">
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
        </view>
    </view>
</template>

<script>
// pages/history/index.js
import { runInfoList } from '@/api/runInfo.js';
export default {
    data() {
        return {
            runinfo_data: []
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onShow: function () {
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
		runInfoList({ pageNum: 1, pageSize: 1 }).then(res => {			
			this.setData({
			    runinfo_data: res.rows
			}); //console.log(JSON.stringify(runinfo_data));
		});

       
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
                        complete: (res) => {}
                    });
                }

                if (mode == 2) {
                    uni.vibrateLong({
                        complete: (res) => {}
                    });
                }
            }
        }
    }
};
</script>
<style>
/* pages/history/index.wxss */
</style>

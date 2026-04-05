<template>
  <div class="dashboard-editor-container">

    <!--<img src="../assets/images/a503c8c189c4d9b33500b6f55efd0d5.jpg" width="100%" />-->

    <h2>本周跑步数据总计</h2>
    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <h2>本周与上周对比曲线图</h2>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

     <!--<el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>-->


  </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup'
import LineChart from './dashboard/LineChart'
import RaddarChart from './dashboard/RaddarChart'
import PieChart from './dashboard/PieChart'
import BarChart from './dashboard/BarChart'
import { getListInfo } from "@/api/index";

// const lineChartData = {
//   userList: {
//     expectedData: [100, 120, 161, 134, 105, 160, 165],
//     actualData: [120, 82, 91, 154, 162, 140, 145]
//   },
//   countList: {
//     expectedData: [200, 192, 120, 144, 160, 130, 140],
//     actualData: [180, 160, 151, 106, 145, 150, 130]
//   },
//   distanceList: {
//     expectedData: [80, 100, 121, 104, 105, 90, 100],
//     actualData: [120, 90, 100, 138, 142, 130, 130]
//   },
//   kcalList: {
//     expectedData: [130, 140, 141, 142, 145, 150, 160],
//     actualData: [120, 82, 91, 154, 162, 140, 130]
//   }
// }

var lineChartData = {
  userList: {
    expectedData: [],
    actualData: []
  },
  countList: {
    expectedData: [],
    actualData: []
  },
  distanceList: {
    expectedData: [],
    actualData: []
  },
  kcalList: {
    expectedData: [],
    actualData: []
  }
}

export default {
  name: 'Index',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart
  },
  created(){
    this.apiGetListInfo();
  },
  data() {
    return {
      lineChartData: lineChartData.userList,
      lineChartDataInfo: {
        userList: {
          expectedData: [],
          actualData: []
        },
        countList: {
          expectedData: [],
          actualData: []
        },
        distanceList: {
          expectedData: [],
          actualData: []
        },
        kcalList: {
          expectedData: [],
          actualData: []
        }
      },
      // lineChartDataInit: lineChartData.distanceList
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = this.lineChartDataInfo[type]
    },
    apiGetListInfo(){
      getListInfo().then(res => {
        let data = res.data;
        this.lineChartDataInfo.userList.expectedData = data.userNumberList;
        this.lineChartDataInfo.userList.actualData = data.userNumberListLastWeek;
        this.lineChartDataInfo.countList.expectedData = data.countNumberList;
        this.lineChartDataInfo.countList.actualData = data.countNumberListLastWeek;
        this.lineChartDataInfo.distanceList.expectedData = data.distanceNumberList;
        this.lineChartDataInfo.distanceList.actualData = data.distanceNumberListLastWeek;
        this.lineChartDataInfo.kcalList.expectedData = data.kcalNumberList;
        this.lineChartDataInfo.kcalList.actualData = data.kcalNumberListLastWeek;
        this.lineChartData = this.lineChartDataInfo.userList;
        console.log(this.lineChartData);

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>

<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="160px">
      <el-form-item label="比赛名称：" prop="name">
        <div style="color: #20a0ff">{{tournamentName}}</div>
      </el-form-item>
      <el-form-item label="比赛分组" prop="groupId">
        <el-select ref='selectLabel' v-model="queryParams.groupId" placeholder="请选择" @change="changeGroup">
          <el-option
            v-for="item in groupList"
            :key="item.id"
            :label="item.name + '（' + item.distance / 1000 + 'Km）'"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="'达到最大次数（' + this.tournamentMaxNumber + '次）'" prop="isMaxNumber">
        <el-select v-model="queryParams.isMaxNumber" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['running:tournamentGroupUser:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="tournamentGroupUserList">
      <el-table-column label="姓名" align="center" prop="nickName" />
      <el-table-column label="比赛次数" align="center" prop="count" />
      <el-table-column label="累计时间" align="center" prop="sumTime" />
      <el-table-column label="平均时间" align="center" prop="avgTime" />
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

  </div>
</template>

<script>
import { listTournamentGroupUser, getTournamentGroupUser, delTournamentGroupUser, addTournamentGroupUser, updateTournamentGroupUser } from "@/api/running/tournamentGroupUser";
import { listTournamentGroup } from "@/api/running/tournamentGroup";
import { getTournament, listRank } from "@/api/running/tournament";

export default {
  name: "TournamentGroupUser",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户比赛跑步数据表格数据
      tournamentGroupUserList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        groupId: null,
        isMaxNumber: 0,
        maxNumber: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      // 分组数据查询参数
      groupQueryParams: {
        pageNum: 1,
        pageSize: 100000,
        tournamentId: null
      },
      groupName: "",
      // 分组数据
      groupList: [],
      // 比赛名称
      tournamentName: "",
      tournamentMaxNumber: 0,
      // 比赛分组id
      tournamentGroupId: null,
      options: [{
        value: 0,
        label: '否'
      }, {
        value: 1,
        label: '是'
      }],
    };
  },
  created() {
    const tournamentId = this.$route.params && this.$route.params.tournamentId;
    this.groupQueryParams.tournamentId = tournamentId;
    this.getInfo();
    this.getGroupList();
  },
  methods: {
    /* 查询比赛信息 */
    getInfo() {
      getTournament(this.groupQueryParams.tournamentId).then(response => {
        this.tournamentName = response.data.name;
        this.tournamentMaxNumber = response.data.maxNumber;
      });
    },

    /** 查询比赛分组列表 */
    getGroupList() {
      this.loading = true;
      listTournamentGroup(this.groupQueryParams).then(response => {
        this.groupList = response.rows;
        this.queryParams.groupId = response.rows[0].id;
        this.groupName = response.rows[0].name + '（' + response.rows[0].distance / 1000 + 'Km）';
        console.log(this.groupName);
        this.loading = false;
        this.getList();
      });
    },

    changeGroup(){
      this.$nextTick(()=>{
        this.groupName = this.$refs.selectLabel.selected.label;
        console.log(this.$refs.selectLabel.selected.label);
      })
      // this.groupName = this.$refs.groupInfo.selected.label;
    },

    /** 查询用户比赛跑步数据列表 */
    getList() {
      this.loading = true;
      listRank(this.queryParams).then(response => {
        this.tournamentGroupUserList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
      // listTournamentGroupUser(this.queryParams).then(response => {
      //   this.tournamentGroupUserList = response.rows;
      //   this.total = response.total;
      //   this.loading = false;
      // });
    },

    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      if (this.queryParams.isMaxNumber == 1){
        this.queryParams.maxNumber = this.tournamentMaxNumber;
        console.log("true");
      }else{
        this.queryParams.maxNumber = null;
        console.log("false");
      }
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },

    /** 导出按钮操作 */
    handleExport() {
      this.download('running/tournamentGroupUser/rankExport', {
        ...this.queryParams
      }, `${this.tournamentName}_${this.groupName}_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

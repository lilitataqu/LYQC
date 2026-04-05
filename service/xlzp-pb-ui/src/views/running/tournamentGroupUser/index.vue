<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="比赛分组ID" prop="tournamentGroupId">
        <el-input
          v-model="queryParams.tournamentGroupId"
          placeholder="请输入比赛分组ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="用户ID" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入用户ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-input
          v-model="queryParams.state"
          placeholder="请输入状态"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="删除状态" prop="delState">
        <el-input
          v-model="queryParams.delState"
          placeholder="请输入删除状态"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['running:tournamentGroupUser:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['running:tournamentGroupUser:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['running:tournamentGroupUser:remove']"
        >删除</el-button>
      </el-col>
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

    <el-table v-loading="loading" :data="tournamentGroupUserList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="参赛ID" align="center" prop="id" />
      <el-table-column label="比赛分组ID" align="center" prop="tournamentGroupId" />
      <el-table-column label="用户ID" align="center" prop="userId" />
      <el-table-column label="跑步时长" align="center" prop="time" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.time, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="平均配速" align="center" prop="speed" />
      <el-table-column label="卡路里" align="center" prop="kcal" />
      <el-table-column label="距离" align="center" prop="distance" />
      <el-table-column label="公里速度" align="center" prop="kmSpeed" />
      <el-table-column label="路径定位" align="center" prop="points" />
      <el-table-column label="海拔" align="center" prop="altitude" />
      <el-table-column label="爬升高度" align="center" prop="altitudeSum" />
      <el-table-column label="跑步类型" align="center" prop="runType" />
      <el-table-column label="步数" align="center" prop="step" />
      <el-table-column label="状态" align="center" prop="state" />
      <el-table-column label="删除状态" align="center" prop="delState" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['running:tournamentGroupUser:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['running:tournamentGroupUser:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改用户比赛跑步数据对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="比赛分组ID" prop="tournamentGroupId">
          <el-input v-model="form.tournamentGroupId" placeholder="请输入比赛分组ID" />
        </el-form-item>
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="跑步时长" prop="time">
          <el-date-picker clearable
            v-model="form.time"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择跑步时长">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="平均配速" prop="speed">
          <el-input v-model="form.speed" placeholder="请输入平均配速" />
        </el-form-item>
        <el-form-item label="卡路里" prop="kcal">
          <el-input v-model="form.kcal" placeholder="请输入卡路里" />
        </el-form-item>
        <el-form-item label="距离" prop="distance">
          <el-input v-model="form.distance" placeholder="请输入距离" />
        </el-form-item>
        <el-form-item label="公里速度" prop="kmSpeed">
          <el-input v-model="form.kmSpeed" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="路径定位" prop="points">
          <el-input v-model="form.points" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="海拔" prop="altitude">
          <el-input v-model="form.altitude" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="爬升高度" prop="altitudeSum">
          <el-input v-model="form.altitudeSum" placeholder="请输入爬升高度" />
        </el-form-item>
        <el-form-item label="步数" prop="step">
          <el-input v-model="form.step" placeholder="请输入步数" />
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-input v-model="form.state" placeholder="请输入状态" />
        </el-form-item>
        <el-form-item label="删除状态" prop="delState">
          <el-input v-model="form.delState" placeholder="请输入删除状态" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listTournamentGroupUser, getTournamentGroupUser, delTournamentGroupUser, addTournamentGroupUser, updateTournamentGroupUser } from "@/api/running/tournamentGroupUser";

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
        tournamentGroupId: null,
        userId: null,
        state: null,
        delState: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询用户比赛跑步数据列表 */
    getList() {
      this.loading = true;
      listTournamentGroupUser(this.queryParams).then(response => {
        this.tournamentGroupUserList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        tournamentGroupId: null,
        userId: null,
        time: null,
        speed: null,
        kcal: null,
        distance: null,
        kmSpeed: null,
        points: null,
        altitude: null,
        altitudeSum: null,
        runType: null,
        step: null,
        state: null,
        delState: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加用户比赛跑步数据";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getTournamentGroupUser(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改用户比赛跑步数据";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateTournamentGroupUser(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addTournamentGroupUser(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除用户比赛跑步数据编号为"' + ids + '"的数据项？').then(function() {
        return delTournamentGroupUser(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('running/tournamentGroupUser/export', {
        ...this.queryParams
      }, `tournamentGroupUser_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

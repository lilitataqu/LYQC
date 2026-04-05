<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="部门ID" prop="deptId">
        <!-- <el-input
          v-model="queryParams.deptId"
          placeholder="请输入部门ID"
          clearable
          @keyup.enter.native="handleQuery"
        /> -->
        <el-select v-model="queryParams.deptId" filterable placeholder="请选择" clearable>
          <el-option
            v-for="item in deptList"
            :key="item.deptId"
            :label="item.deptName"
            :value="item.deptId">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="部门名称" prop="deptName">
        <el-input
          v-model="queryParams.deptName"
          placeholder="请输入部门名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="运动距离" prop="distance">
        <el-input
          v-model="queryParams.distance"
          placeholder="请输入运动距离"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="消耗卡路里" prop="kcal">
        <el-input
          v-model="queryParams.kcal"
          placeholder="请输入消耗卡路里"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="运动次数" prop="runCount">
        <el-input
          v-model="queryParams.runCount"
          placeholder="请输入运动次数"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <!-- <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['running:deptWeekStatistic:add']"
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
          v-hasPermi="['running:deptWeekStatistic:edit']"
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
          v-hasPermi="['running:deptWeekStatistic:remove']"
        >删除</el-button>
      </el-col> -->
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['running:deptWeekStatistic:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="deptWeekStatisticList" @selection-change="handleSelectionChange" @sort-change="sout" :default-sort = "{prop: 'distance', order: 'descending'}">
      <!-- <el-table-column type="selection" width="55" align="center" /> -->
      <!-- <el-table-column label="${comment}" align="center" prop="id" /> -->
      <el-table-column label="序号" width="60" type="index"></el-table-column>
      <!-- <el-table-column label="部门ID" align="center" prop="deptId" /> -->
      <el-table-column label="部门名称" align="center" prop="deptName" />
      <el-table-column label="运动距离(Km)" align="center" prop="distance"  sortable="custom" >
        <template slot-scope="scope">
          {{scope.row.distance / 1000}}
        </template>
      </el-table-column>
      <el-table-column label="消耗卡路里(Kcal)" align="center" prop="kcal"  sortable="custom" >
        <template slot-scope="scope">
          {{scope.row.kcal / 1000}}
        </template>
      </el-table-column>
      <el-table-column label="运动次数" align="center" prop="runCount" />
      <!-- <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['running:deptWeekStatistic:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['running:deptWeekStatistic:remove']"
          >删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改统计本周各部门运动量对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="部门ID" prop="deptId">
          <el-input v-model="form.deptId" placeholder="请输入部门ID" />
        </el-form-item>
        <el-form-item label="部门名称" prop="deptName">
          <el-input v-model="form.deptName" placeholder="请输入部门名称" />
        </el-form-item>
        <el-form-item label="运动距离" prop="distance">
          <el-input v-model="form.distance" placeholder="请输入运动距离" />
        </el-form-item>
        <el-form-item label="消耗卡路里" prop="kcal">
          <el-input v-model="form.kcal" placeholder="请输入消耗卡路里" />
        </el-form-item>
        <el-form-item label="运动次数" prop="runCount">
          <el-input v-model="form.runCount" placeholder="请输入运动次数" />
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
import { listDeptWeekStatistic, deptList } from "@/api/running/deptWeekStatistic";

export default {
  name: "DeptWeekStatistic",
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
      // 统计本周各部门运动量表格数据
      deptWeekStatisticList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        deptId: null,
        deptName: null,
        distance: null,
        kcal: null,
        runCount: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      deptList: []
    };
  },
  created() {
    this.getList();
    this.getDeptList();
  },
  methods: {
    /** 查询统计本周各部门运动量列表 */
    getList() {
      this.loading = true;
      listDeptWeekStatistic(this.queryParams).then(response => {
        this.deptWeekStatisticList = response.rows;
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
        deptId: null,
        deptName: null,
        distance: null,
        kcal: null,
        runCount: null
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
      this.title = "添加统计本周各部门运动量";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getDeptWeekStatistic(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改统计本周各部门运动量";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateDeptWeekStatistic(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addDeptWeekStatistic(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除统计本周各部门运动量编号为"' + ids + '"的数据项？').then(function() {
        return delDeptWeekStatistic(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('running/deptWeekStatistic/export', {
        ...this.queryParams
      }, `deptWeekStatistic_${new Date().getTime()}.xlsx`)
    },
     /** 排序监听事件 */
    sout(value){
      if(value.order == null){
        this.queryParams.orderColumn = null;
        this.queryParams.orderType = null;
      }else if(value.order == "ascending"){
        this.queryParams.orderType = "asc";
        this.queryParams.orderColumn = value.prop;
      }else if(value.order == "descending"){
        this.queryParams.orderColumn = value.prop;
        this.queryParams.orderType = "desc";
      }
      this.getList();
    },
     /** 获取部门list */
    getDeptList(){
      deptList().then(res => {
        this.deptList = res.data;
      })
    }
  }
};
</script>

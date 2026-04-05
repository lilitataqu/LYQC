<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <!--<el-form-item label="用户id" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入用户id"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="0 未删除；1 删除" prop="delState">
        <el-input
          v-model="queryParams.delState"
          placeholder="请输入0 未删除；1 删除"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>-->
       <el-form-item label="用户名称" prop="nickName">
         <el-input
           v-model="queryParams.nickName"
           placeholder="请输入用户名称"
           clearable
           style="width: 240px"
           @keyup.enter.native="handleQuery"
         />
       </el-form-item>
       <el-form-item label="学号" prop="studentId">
         <el-input
           v-model="queryParams.studentId"
           placeholder="请输入学号"
           clearable
           style="width: 240px"
           @keyup.enter.native="handleQuery"
         />
       </el-form-item>
       <el-form-item label="达标状态" prop="state">
         <el-select
           v-model="queryParams.state"
           placeholder="请选择达标状态"
           clearable
           style="width: 240px"
         >
           <el-option
             v-for="dict in dict.type.app_run_state"
             :key="dict.value"
             :label="dict.label"
             :value="dict.value"
           />
         </el-select>
       </el-form-item>
      <el-form-item label="课程" prop="state" v-hasPermi="['running:running:class']">
        <el-select
          v-model="queryParams.classId"
          placeholder="请选择课程"
          clearable
          style="width: 240px"
        >
          <el-option
            v-for="classItem in classHourList"
            :key="classItem.value"
            :label="classItem.text"
            :value="classItem.value"
          />
        </el-select>
       </el-form-item>
       <el-form-item label="跑步时间">
         <el-date-picker
           v-model="dateRange"
           style="width: 240px"
           value-format="yyyy-MM-dd"
           type="daterange"
           range-separator="-"
           start-placeholder="开始日期"
           end-placeholder="结束日期"
         ></el-date-picker>
       </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="20" class="mb8" v-hasPermi="['running:running:sum']">
      <el-col :span="4.8">
        <el-card class="box-card">
          人数合计：{{sumInfo.user}}（人）
        </el-card>
      </el-col>
      <el-col :span="4.8">
        <el-card class="box-card">
          次数合计：{{sumInfo.count}}（次）
        </el-card>
      </el-col>
      <el-col :span="4.8">
        <el-card class="box-card">
          达标次数合计：{{sumInfo.conformCount}}（次）
        </el-card>
      </el-col>
      <el-col :span="4.8">
        <el-card class="box-card">
          距离合计：{{sumInfo.distance}}（Km）
        </el-card>
      </el-col>
      <el-col :span="4.8">
        <el-card class="box-card">
          卡路里合计：{{sumInfo.kcal}}（kcal）
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mb8">
      <!-- <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['running:running:add']"
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
          v-hasPermi="['running:running:edit']"
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
          v-hasPermi="['running:running:remove']"
        >删除</el-button>
      </el-col> -->
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['running:running:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="runningList" @selection-change="handleSelectionChange">
      <!-- <el-table-column type="selection" width="55" align="center" /> -->
      <!-- <el-table-column label="${comment}" align="center" prop="id" /> -->
      <!-- <el-table-column label="用户id" align="center" prop="userId" /> -->
      <el-table-column label="序号" width="60" type="index"></el-table-column>
      <el-table-column label="跑步时长" align="center" prop="time" width="180"></el-table-column>
      <el-table-column label="学号" align="center" prop="studentId" width="180"></el-table-column>
      <el-table-column label="姓名" align="center" prop="nickName" width="180"></el-table-column>
      <el-table-column label="学院名称" align="center" prop="deptName" width="180">
        <!-- <template slot-scope="scope">
          <span>{{ parseTime(scope.row.time, '{y}-{m}-{d}') }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="平均配速" align="center" prop="speed" />
      <el-table-column label="距离(Km)" align="center" prop="distance" >
        <template slot-scope="scope">
          {{scope.row.distance / 1000}}
        </template>
      </el-table-column>
      <el-table-column label="卡路里(kcal)" align="center" prop="kcal" >
         <template slot-scope="scope">
          {{scope.row.kcal / 1000}}
        </template>
      </el-table-column>
      <el-table-column label="达标状态" align="center" prop="runType" >
        <template slot-scope="scope">
        <dict-tag :options="dict.type.app_run_state" :value="scope.row.state"/>
        </template>
      </el-table-column>
      <el-table-column label="跑步时间" align="center" prop="createTime" width="180"></el-table-column>
      <!-- <el-table-column label="公里速度" align="center" prop="kmSpeed" /> -->
      <!-- <el-table-column label="路径定位" align="center" prop="points" /> -->
      <!-- <el-table-column label="海拔" align="center" prop="altitude" /> -->
      <!-- <el-table-column label="爬升高度" align="center" prop="altitudeSum" /> -->
      <!--<el-table-column label="跑步类型" align="center" prop="runType" >-->
        <!--<template slot-scope="scope">-->
          <!--<dict-tag :options="dict.type.app_run_type" :value="scope.row.runType"/>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!-- <el-table-column label="0 未删除；1 删除" align="center" prop="delState" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['running:running:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['running:running:remove']"
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

    <!-- 添加或修改跑步信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户id" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入用户id" />
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
          <el-input v-model="form.kmSpeed" placeholder="请输入公里速度" />
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
        <el-form-item label="0 未删除；1 删除" prop="delState">
          <el-input v-model="form.delState" placeholder="请输入0 未删除；1 删除" />
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
import { listRunning, listRunningSum, getRunning, delRunning, addRunning, updateRunning, getClassHour } from "@/api/running/running";
import { checkPermi } from "@/utils/permission"; // 权限判断函数

export default {
  name: "Running",
  dicts: ['app_run_type', 'app_run_state', 'week_info', 'class_number' ],
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
      // 跑步信息表格数据
      runningList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        runType: null,
        delState: null,
        nickName: null,
        studentId: null,
        state: undefined,
        classId: null
      },
      sumInfo: {
        user: 0,
        count: 0,
        distance: 0,
        kcal: 0,
        conformCount: 0,
      },
      // 日期范围
      dateRange: [],
      // 课程列表
      classHourList: [],
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
    if(checkPermi(["running:running:class"])){
      this.getClassHourList();
    }
  },
  methods: {
    /** 查询跑步信息列表 */
    getList() {
      this.loading = true;
      listRunning(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
        this.runningList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
      listRunningSum(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
        let data = response.data;
        this.sumInfo.user = data.user;
        this.sumInfo.count = data.count;
        this.sumInfo.conformCount = data.conformCount;
        this.sumInfo.distance = data.distance;
        this.sumInfo.kcal = data.kcal;
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
        userId: null,
        nickName:null,
        deptName:null,
        time: null,
        speed: null,
        kcal: null,
        distance: null,
        kmSpeed: null,
        points: null,
        altitude: null,
        altitudeSum: null,
        runType: null,
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
      this.dateRange = [];
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
      this.title = "添加跑步信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getRunning(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改跑步信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateRunning(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addRunning(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除跑步信息编号为"' + ids + '"的数据项？').then(function() {
        return delRunning(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('running/running/export', {
        ...this.queryParams
      }, `running_${new Date().getTime()}.xlsx`)
    },
    getClassHourList(){
      getClassHour().then(res =>{
        // this.classHourList = res.data;
        let list = [];
        let resList = res.data;
        for (let i = 0; i < resList.length; i++){
          let text = this.selectDictLabel(this.dict.type.week_info, resList[i].week) + '(' + this.selectDictLabel(this.dict.type.class_number, resList[i].classHour) + ')';
          list.push({text: text, value: resList[i].id})
        }
        this.classHourList = list;
      })
    },

    // weekFormat(value) {
    //   return this.selectDictLabel(this.dict.type.week_info, value).toString();
    // },
    // weekFormat(row, column) {
    //   return this.selectDictLabel(this.dict.type.字典类型, value);
    // },
  }
};
</script>

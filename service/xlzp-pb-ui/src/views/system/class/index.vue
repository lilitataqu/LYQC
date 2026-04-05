<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <!--<el-form-item label="课程名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入课程名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>-->
      <el-form-item label="星期" prop="week">
        <el-select v-model="queryParams.week" placeholder="请选择星期" clearable>
          <el-option
            v-for="dict in dict.type.week_info"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="课程时间" prop="classHour">
        <el-select v-model="queryParams.classHour" placeholder="请选择课程时间" clearable>
          <el-option
            v-for="dict in dict.type.class_number"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="学期" prop="semester">
        <el-select v-model="queryParams.semester" placeholder="请选择学期" clearable>
          <el-option
            v-for="dict in dict.type.class_semester"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <!--<el-form-item label="" prop="str1">
        <el-input
          v-model="queryParams.str1"
          placeholder="请输入"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="" prop="str2">
        <el-input
          v-model="queryParams.str2"
          placeholder="请输入"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="" prop="i1">
        <el-input
          v-model="queryParams.i1"
          placeholder="请输入"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="${comment}" prop="i2">
        <el-input
          v-model="queryParams.i2"
          placeholder="请输入${comment}"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>-->
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
          v-hasPermi="['system:class:add']"
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
          v-hasPermi="['system:class:edit']"
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
          v-hasPermi="['system:class:remove']"
        >删除</el-button>
      </el-col>
      <!--<el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:class:export']"
        >导出</el-button>
      </el-col>-->
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="classList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="序号" width="60" type="index"></el-table-column>
      <!--<el-table-column label="" align="center" prop="id" />-->
      <!--<el-table-column label="教师" align="center" prop="userId" />-->
      <el-table-column label="教师" align="center" prop="userNickName" />
      <!--<el-table-column label="课程名称" align="center" prop="name" />-->
      <el-table-column label="星期" align="center" prop="week">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.week_info" :value="scope.row.week"/>
        </template>
      </el-table-column>
      <el-table-column label="课程时间" align="center" prop="classHour">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.class_number" :value="scope.row.classHour"/>
        </template>
      </el-table-column>
      <el-table-column label="学期" align="center" prop="semester">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.class_semester" :value="scope.row.semester"/>
        </template>
      </el-table-column>
<!--      <el-table-column label="" align="center" prop="str1" />
      <el-table-column label="" align="center" prop="str2" />
      <el-table-column label="" align="center" prop="i1" />
      <el-table-column label="${comment}" align="center" prop="i2" />-->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:class:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:class:remove']"
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

    <!-- 添加或修改课程信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <!--<el-form-item label="课程名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入课程名称" />
        </el-form-item>-->
        <el-form-item label="教师" prop="userId">
          <el-select v-model="form.userId" placeholder="请选择教师">
            <el-option
              v-for="teacher in teacherList"
              :key="teacher.userId"
              :label="teacher.nickName"
              :value="teacher.userId"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="星期" prop="week">
          <el-select v-model="form.week" placeholder="请选择星期">
            <el-option
              v-for="dict in dict.type.week_info"
              :key="dict.value"
              :label="dict.label"
:value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程时间" prop="classHour">
          <el-select v-model="form.classHour" placeholder="请选择课程时间">
            <el-option
              v-for="dict in dict.type.class_number"
              :key="dict.value"
              :label="dict.label"
:value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学期" prop="semester">
          <el-select v-model="form.semester" placeholder="请选择学期">
            <el-option
              v-for="dict in dict.type.class_semester"
              :key="dict.value"
              :label="dict.label"
:value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item label="" prop="str1">
          <el-input v-model="form.str1" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="" prop="str2">
          <el-input v-model="form.str2" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="" prop="i1">
          <el-input v-model="form.i1" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="${comment}" prop="i2">
          <el-input v-model="form.i2" placeholder="请输入${comment}" />
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listClass, listTeacher, getClass, delClass, addClass, updateClass } from "@/api/system/class";

export default {
  name: "Class",
  dicts: ['class_semester', 'week_info', 'class_number'],
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
      // 课程信息表格数据
      classList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 教师列表
      teacherList: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        name: null,
        week: null,
        classHour: null,
        semester: null,
        str1: null,
        str2: null,
        i1: null,
        i2: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        userId: [
          { required: true, message: "教师不能为空", trigger: "change" }
        ],
        week: [
          { required: true, message: "星期不能为空", trigger: "change" }
        ],
        classHour: [
          { required: true, message: "课程时间不能为空", trigger: "change" }
        ],
        semester: [
          { required: true, message: "学期不能为空", trigger: "change" }
        ],
      }
    };
  },
  created() {
    this.getList();
    this.getTeacherList();
  },
  methods: {
    /** 查询课程信息列表 */
    getList() {
      this.loading = true;
      listClass(this.queryParams).then(response => {
        this.classList = response.rows;
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
        userId: null,
        name: null,
        week: null,
        classHour: null,
        semester: null,
        str1: null,
        str2: null,
        i1: null,
        i2: null
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
      this.title = "添加课程信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getClass(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改课程信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateClass(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addClass(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除课程信息编号为"' + ids + '"的数据项？').then(function() {
        return delClass(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/class/export', {
        ...this.queryParams
      }, `class_${new Date().getTime()}.xlsx`)
    },
    getTeacherList() {
      listTeacher().then(response => {
        this.teacherList = response.rows;
      })
    }
  }
};
</script>

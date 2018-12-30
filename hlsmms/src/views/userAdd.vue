<template>
  <el-container id="home">
    <!-- 左侧 -->
    <left></left>
    <!-- 右侧 -->
    <el-container id="buju">
      <!-- 顶部 -->
      <RightHeader></RightHeader>
      <!-- 中间 -->
      <el-main>
        <el-card class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <h3>添加管理员账号</h3>
          </div>

          <div id="main">
            <!-- 模板的内容 -->
            <!-- 表单组件：登录的表单 -->
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              label-position="top"
            >
              <el-form-item
                label="账号"
                prop="username"
              >
                <el-input
                  type="text"
                  v-model="ruleForm2.username"
                  autocomplete="off"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="密码"
                prop="pass"
              >
                <el-input
                  type="password"
                  v-model="ruleForm2.pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <!-- "确认密码"    添加属性方法-->
              <el-form-item
                label="确认密码"
                prop="passOk"
              >
                <el-input
                  type="password"
                  v-model="ruleForm2.passOk"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <!--   用户组 添加属性方法-->
              <el-form-item
                label="用户组"
                prop="usergroup"
              >
                <el-select
                  v-model="ruleForm2.usergroup"
                  placeholder="请选择"
                >
                  <el-option
                    label="超级管理员"
                    value="超级管理员"
                  ></el-option>
                  <el-option
                    label="普通管理员"
                    value="普通管理员"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm2')"
                >登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
      <!-- 底部 -->
      <foot></foot>
    </el-container>
  </el-container>
</template>

<script>
//ying ru导航组件
import left from "../components/left";
import RightHeader from "../components/RightHeader";
import foot from "../components/foot";

export default {
  // 暴露一个模块
  data() {
    //自定义验证2次密码是否一致
    var validatePassword = (rule, value, callback) => {
      if (value !== this.ruleForm2.pass) {
        //与 pass: "",进行比较
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      //数据对象
      ruleForm2: {
        pass: "",
        username: "",
        passOk: "",
        usergroup: ""
      },
      //验证规则
      rules2: {
        username: [
          //required: true 必填     trigger: 'blur' 失去焦点的事件触发     message: "出错信息"
          { required: true, trigger: "blur", message: "用户名必须填写" },
          //min: 6 最小长度   max: 18 最大长度
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        pass: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        passOk: [
          { required: true, trigger: "blur", message: "两次密码必须填写一致" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          },
          //调用自定义的验证方法验证两次密码是否一致  validator 验证器
          { validator: validatePassword, trigger: "blur" }
        ],
        // 用户组接受的数据法法
        usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
        ]
      }
    };
  },
  // 引用的公共路径
  components: {
    left,
    RightHeader,
    foot
  },
  methods: {
    //提交表单的方法
    submitForm(formName) {
      //调用组件的验证方法提交表单是验证
      this.$refs[formName].validate(valid => {
        //valid参数表示验证的结果，true表示验证通过，false验证失败
        if (valid) {
          alert("√ 表单验证成功!");
          //发起ajax请求去后端做数据库的验证
          this.$router.push("/"); //使用路由对象的push实现跳转
        } else {
          alert("× 表单验证失败!");
          return false;
        }
      });
    },
    //重置表单的方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style >
</style>

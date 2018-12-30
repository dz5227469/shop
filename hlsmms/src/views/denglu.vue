<template>
  <div id="loginbox">
        <!-- 卡片组件： 登录的外框 -->
        <el-card class="box-card" id="login">
            <div slot="header" class="clearfix">
            <h2>用户登录</h2>
            </div>
            <div class="text item">
            <!-- 表单组件：登录的表单 -->
            <el-form
                :model="ruleForm2"
                status-icon
                :rules="rules2"
                ref="ruleForm2"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
            </div>
        </el-card>
  </div>



</template>

<script>
// 暴露一个模块： 登录组件
export default {
    
}
</script>


<style lang="">
    
</style>
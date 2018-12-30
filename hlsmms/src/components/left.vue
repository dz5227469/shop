<template>
  <!-- 左侧 -->
  <el-aside width="230px">
    <div id="leftTitle">
      <h1>华联超市管理系统</h1>
      <p>你好，Admin</p>
      <p>
        <router-link to="/">管理首页|</router-link>
        <a>退出系统</a>
      </p>
    </div>

    <!-- 获取了访问的链接的路径 $route.path-->
    <!-- 左侧菜单 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
    >
      <!-- 第1个菜单 -->
      <el-submenu index="1">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>分类管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项2</el-menu-item>
      </el-submenu>

      <!-- 第2个菜单 -->
      <el-submenu index="2">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>商品管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项2</el-menu-item>
      </el-submenu>

      <!-- 第3个菜单 -->
      <el-submenu index="3">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>进货管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项2</el-menu-item>
      </el-submenu>

      <!-- 第4个菜单 -->
      <el-submenu index="4">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>出货管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项2</el-menu-item>
      </el-submenu>

      <!-- 第5个菜单 -->
      <el-submenu index="5">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>统计管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项2</el-menu-item>
      </el-submenu>

      <!-- 第6个菜单 -->
      <el-submenu index="6">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>会员管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项2</el-menu-item>
      </el-submenu>

      <!-- 第7个菜单 -->
      <el-submenu index="7">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>账号管理</span>
        </template>
        <el-menu-item index="/userAdd">
          <router-link to="/userAdd">添加账户</router-link>
        </el-menu-item>
        <el-menu-item index="/userManage">
          <router-link to="/userManage">账户管理</router-link>
        </el-menu-item>
        <el-menu-item index="/userPwd">
          <router-link to="/userPwd">修改密码</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  //菜单展开和收起的方法
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>

<style >
</style>
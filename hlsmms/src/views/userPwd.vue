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
          <div slot="header" class="clearfix">
            <h3>修改账号密码</h3>
          </div>

          <div id="main">
            <!-- 模板的内容 -->
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
    return {};
  },
  components: {
    left,
    RightHeader,
    foot
  }
};
</script>


<style >
</style>

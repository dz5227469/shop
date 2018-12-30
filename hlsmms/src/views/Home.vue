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
            <h3>系统信息</h3>
          </div>
          <div id="main">
            <el-alert title="成功提示的文案" type="success"></el-alert>
            <el-alert title="消息提示的文案" type="info"></el-alert>
            <!-- 一行两列 -->
            <el-row :gutter="40">
              <!-- 左侧 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>销售排行</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="tableData" stripe style="width: 100%">
                      <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                      <el-table-column prop="salenum" label="销量"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
              <!-- 右侧 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货商品</h3>
                  </div>
                  <div class="text item">222222222222222222222222222222</div>
                </el-card>
              </el-col>
            </el-row>
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
    return {
      isOpened: true, //只打开一个
      tableData: [
        { goodsname: "测试商品1", salenum: 20 },
        { goodsname: "测试商品2", salenum: 10 },
        { goodsname: "测试商品3", salenum: 20 },
        { goodsname: "测试商品4", salenum: 30 },
        { goodsname: "测试商品5", salenum: 50 }
      ]
    };
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

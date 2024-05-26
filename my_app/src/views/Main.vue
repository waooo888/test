<template>
  <div>
    <el-container>
      <el-aside width="auto"><CommonAside></CommonAside></el-aside>
      <el-container>
        <el-header><CommonHeader></CommonHeader></el-header>
        <CommonTag></CommonTag>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";

import CommonTag from "../components/CommonTag.vue";
export default {
  name: "MyMain",
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
};
</script>

<style>
.el-aside {
  overflow: hidden;
}
.el-header {
  padding: 0;
  margin: 0;
}
</style>
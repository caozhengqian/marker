
<template>
<div>
  <el-menu
      style="position: fixed;width:100%;height:60px;"
      :default-active="index"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item index="1" style="font-size: 22px">前端</el-menu-item>
    <el-menu-item index="2" style="font-size: 22px">计算机语言</el-menu-item>
    <el-menu-item index="3" style="font-size: 22px">代理转发</el-menu-item>
    <el-menu-item index="4" style="font-size: 22px">linux</el-menu-item>
    <el-menu-item index="5" style="font-size: 22px">SQL</el-menu-item>
    <el-menu-item index="6" style="font-size: 22px">人体工程学</el-menu-item>
  </el-menu>
  <div style="padding-top: 60px">
    <WebRouter v-if="index === '1'"/>
  </div>
</div>

</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import WebRouter from "@/views/web/WebRouter.vue";
import { ref } from 'vue'
export default {
  components: {
          RouterLink,
          RouterView,
    WebRouter,
  },
  name: 'App',
  props: {
  },
  computed: {
  },
  data() {
    return {
      index:'1',
    }
  },
  methods: {
    _c(v) {
      this.$router.push(v)
    },
    handleSelect(key,keyPath){
      this.index = key
    }
  }

}

</script>
<style scoped>
.f22{
  font-size: 22px;
}
</style>

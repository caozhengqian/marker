
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
    <el-menu-item index="1" style="font-size: 22px">前端架构</el-menu-item>
    <el-menu-item index="2" style="font-size: 22px">前端配置化</el-menu-item>
    <el-menu-item index="3" style="font-size: 22px">计算机语言</el-menu-item>
    <el-menu-item index="4" style="font-size: 22px">linux</el-menu-item>
    <el-menu-item index="5" style="font-size: 22px">SQL</el-menu-item>
    <el-menu-item index="6" style="font-size: 22px">人体工程学</el-menu-item>
  </el-menu>
  <div style="padding-top: 60px">
    <Web1 v-if="index === '1'"/>
    <PeiZhi2 v-if="index === '2'"/>
    <JiSuanJi3 v-if="index === '3'"/>
    <Linux v-if="index === '4'"/>
    <SQL v-if="index === '5'"/>
    <RenTi v-if="index === '6'"/>
  </div>
</div>

</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Web1 from "@/views/Web1.vue";
import { ref } from 'vue'
import PeiZhi2 from "@/views/PeiZhi2.vue";
import JiSuanJi3 from "@/views/JiSuanJi3.vue";
import Linux from "@/views/Linux.vue";
import SQL from "@/views/SQL.vue";
import RenTi from "@/views/RenTi.vue";
export default {
  components: {
    RenTi,
    SQL,
    Linux,
    JiSuanJi3,
    PeiZhi2,
          RouterLink,
          RouterView,
    Web1,
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

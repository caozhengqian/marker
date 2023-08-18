<template>
  <div class="about">

    <div style="display: flex;flex-direction: row">
      <div style="background: #545c64;height:100%;overflow-y:scroll;width:200px;position: fixed;top:60px">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            default-active="1"
            class="el-menu-vertical-demo"
            text-color="#fff"
            @open="_menuOpen"
            @close="_menuClose"
        >
          <el-menu-item @click="_menuItem" index="3-1">逻辑处理</el-menu-item>
          <el-menu-item @click="_menuItem" index="3-2">变量操作</el-menu-item>
          <el-menu-item @click="_menuItem" index="3-3">与前端交互</el-menu-item>
          <el-menu-item @click="_menuItem" index="3-4">与数据交互</el-menu-item>
        </el-menu>
      </div>
      <div style="margin-left: 220px;margin-top: 10px" >
        <LuoJi v-if="index === '3-1'"/>
        <BianLiang v-else-if="index === '3-2'"/>
        <QianDuanJiaoHu v-else-if="index === '3-3'"/>
        <ShuJuJiaoHu v-else-if="index === '3-4'"/>

      </div>
    </div>
  </div>
</template>

<script>
import LuoJi from "@/components/jisuanji/LuoJi.vue";
import BianLiang from "@/components/jisuanji/BianLiang.vue";
import QianDuanJiaoHu from "@/components/jisuanji/QianDuanJiaoHu.vue";
import ShuJuJiaoHu from "@/components/jisuanji/ShuJuJiaoHu.vue";

export default {
  name: "JiSuanJi3",
  components: {ShuJuJiaoHu, QianDuanJiaoHu, BianLiang, LuoJi},
  computed: {
  },
  data() {
    return {
      index:'0'
    }
  },
  methods: {
    _menuOpen(key,keyPath) {
      // this.index = key
    },
    _menuClose(key,keyPath) {
      console.log(key,keyPath)
      // this.index = key
    },
    _menuItem(dom) {
      console.log(JSON.stringify(dom.index))
      this.index = dom.index
    },
  }
}
</script>

<style scoped>
.one-title{
  font-size: 18px;
}
</style>
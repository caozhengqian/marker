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
          <el-menu-item @click="_menuItem" index="5-1">库操作</el-menu-item>
          <el-menu-item @click="_menuItem" index="5-2">表操作</el-menu-item>
          <el-menu-item @click="_menuItem" index="5-3">多表操作</el-menu-item>
          <el-menu-item @click="_menuItem" index="5-4">函数使用</el-menu-item>
        </el-menu>
      </div>
      <div style="margin-left: 220px;margin-top: 10px" >
        <KuSql v-if="index === '5-1'"/>
        <BiaoSql v-else-if="index === '5-2'"/>
        <DuoBiao v-else-if="index === '5-3'"/>
        <HanShu v-else-if="index === '5-4'"/>
      </div>
    </div>
  </div>
</template>

<script>
import KuSql from "@/components/sql/KuSql.vue";
import BiaoSql from "@/components/sql/BiaoSql.vue";
import DuoBiao from "@/components/sql/DuoBiao.vue";
import HanShu from "@/components/sql/HanShu.vue";

export default {
  name: "SQL",
  components: {HanShu, DuoBiao, BiaoSql, KuSql},
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
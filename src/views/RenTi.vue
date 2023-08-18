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
          <el-menu-item @click="_menuItem" index="6-1">常见病及预防</el-menu-item>
          <el-menu-item @click="_menuItem" index="6-2">体检项分析</el-menu-item>
          <el-menu-item @click="_menuItem" index="6-3">总结</el-menu-item>
        </el-menu>
      </div>
      <div style="margin-left: 220px;margin-top: 10px" >
        <ChangJianBing v-if="index === '6-1'"/>
        <TiJian v-else-if="index === '6-2'"/>
        <Zongjie v-else-if="index === '6-3'"/>
      </div>
    </div>
  </div>
</template>

<script>
import ChangJianBing from "@/components/renti/ChangJianBing.vue";
import TiJian from "@/components/renti/TiJian.vue";
import Zongjie from "@/components/renti/Zongjie.vue";

export default {
  name: "RenTi",
  components: {Zongjie, TiJian, ChangJianBing},
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
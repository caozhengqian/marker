<template>
  <div class="about">

    <div style="display: flex;flex-direction: row">
      <div style="background: #545c64;height:100%;overflow-y:scroll;width:200px;position: fixed;top:60px">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            default-active="2-4"
            class="el-menu-vertical-demo"
            text-color="#fff"
            @open="_menuOpen"
            @close="_menuClose"
        >
          <el-menu-item @click="_menuItem" index="2-4">公用组件</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-2">低代码插件</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-1">css架构</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-5">webpack</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-6">积累工程</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-3">一键生成nginx配置</el-menu-item>
        </el-menu>
      </div>
      <div style="margin-left: 220px;margin-top: 10px" >
        <PeiCss v-if="index === '2-1'"/>
        <PeiJiaoShou v-else-if="index === '2-2'"/>
        <PeiNginx v-else-if="index === '2-3'"/>
        <PeiGongYong v-else-if="index === '2-4'"/>
        <PeiCDN v-else-if="index === '2-5'"/>
        <PeiJiShu v-else-if="index === '2-6'"/>
      </div>
    </div>
  </div>

</template>

<script>
import PeiCss from "@/components/peizhi/PeiCss.vue";
import PeiJiaoShou from "@/components/peizhi/PeiJiaoShou.vue";
import PeiNginx from "@/components/peizhi/PeiNginx.vue";
import PeiGongYong from "@/components/peizhi/PeiGongYong.vue";
import PeiCDN from "@/components/peizhi/PeiCDN.vue";
import PeiJiShu from "@/components/peizhi/PeiJiShu.vue";

export default {
  name: "PeiZhi2",
  components: {PeiCDN, PeiGongYong, PeiNginx, PeiJiaoShou, PeiCss,PeiJiShu},
  computed: {
  },
  data() {
    return {
      index:'0'
    }
  },
  created(){
    this._menuItem({"index":"2-4","indexPath":["2-4"],"active":true})
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
      console.log(JSON.stringify(dom))
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

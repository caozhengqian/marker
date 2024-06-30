<template>
  <div class="about">

    <div style="display: flex;flex-direction: row">
      <div style="background: #545c64;height:100%;overflow-y:scroll;width:200px;position: fixed;top:60px">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            default-active="2-2"
            class="el-menu-vertical-demo"
            text-color="#fff"
            @open="_menuOpen"
            @close="_menuClose"
        >
          <el-menu-item @click="_menuItem" index="2-1">配置css架构</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-2">配置低代码页面</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-3">配置nginx</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-4">配置webpack</el-menu-item>
          <el-menu-item @click="_menuItem" index="2-5">配置CDN</el-menu-item>

        </el-menu>
      </div>
      <div style="margin-left: 220px;margin-top: 10px" >
        <PeiCss v-if="index === '2-1'"/>
        <PeiJiaoShou v-else-if="index === '2-2'"/>
        <PeiNginx v-else-if="index === '2-3'"/>
        <PeiGongYong v-else-if="index === '2-4'"/>
        <PeiCDN v-else-if="index === '2-5'"/>
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

export default {
  name: "PeiZhi2",
  components: {PeiCDN, PeiGongYong, PeiNginx, PeiJiaoShou, PeiCss},
  computed: {
  },
  data() {
    return {
      index:'0'
    }
  },
  created(){
    this._menuItem({"index":"2-2","indexPath":["2-2"],"active":true})
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

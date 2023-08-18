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
          <el-menu-item @click="_menuItem" index="4-1">操作系统</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-2">文件操作</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-3">用户组和密码</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-4">文件权限</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-5">进程管理</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-6">网络管理</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-7">ssh</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-8">软件管理</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-9">防火墙管理</el-menu-item>
          <el-menu-item @click="_menuItem" index="4-10">磁盘管理</el-menu-item>
        </el-menu>
      </div>
      <div style="margin-left: 220px;margin-top: 10px" >
        <CaoZuo v-if="index === '4-1'"/>
        <WenJianCaoZuo v-if="index === '4-2'"/>
        <YongHuZu v-else-if="index === '4-3'"/>
        <WenJianQuanXian v-else-if="index === '4-4'"/>
        <JinCheng v-else-if="index === '4-5'"/>
        <WangLuo v-else-if="index === '4-6'"/>
        <SSH v-else-if="index === '4-7'"/>
        <RuanJian v-else-if="index === '4-8'"/>
        <FangHuoQiang v-else-if="index === '4-9'"/>
        <CiPan v-else-if="index === '4-10'"/>
      </div>
    </div>
  </div>
</template>

<script>
import CaoZuo from "@/components/linux/CaoZuo.vue";
import WenJianQuanXian from "@/components/linux/WenJianQuanXian.vue";
import YongHuZu from "@/components/linux/YongHuZu.vue";
import WenJianCaoZuo from "@/components/linux/WenJianCaoZuo.vue";
import JinCheng from "@/components/linux/JinCheng.vue";
import WangLuo from "@/components/linux/WangLuo.vue";
import SSH from "@/components/linux/SSH.vue";
import RuanJian from "@/components/linux/RuanJian.vue";
import FangHuoQiang from "@/components/linux/FangHuoQiang.vue";
import CiPan from "@/components/linux/CiPan.vue";

export default {
  name: "Linux",
  components: {CiPan, FangHuoQiang, RuanJian, SSH, WangLuo, JinCheng, WenJianCaoZuo, YongHuZu, WenJianQuanXian, CaoZuo},
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
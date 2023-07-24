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
            <el-sub-menu index="1">
              <template #title>
                <span class="one-title">技术驱动业务</span>
              </template>
              <el-sub-menu index="1-1">
                <template #title>业务埋点</template>
                <el-menu-item @click="_menuItem" index="1-1-1">按钮点击</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-1-2">接口</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-1-3">表单事件</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-1-4">路由跳转</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-1-5">socket</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="1-2">
                <template #title>交互优化</template>
                <el-menu-item @click="_menuItem" index="1-2-1">流程梳理</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-2-2">尽量接口输入</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-2-3">表单优化</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <span class="one-title">公司架构</span>
              </template>
              <el-sub-menu index="2-1">
                <template #title>前端安全</template>
                <el-menu-item @click="_menuItem" index="2-1-1">输入控制</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-2">安全配置</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-3">反爬虫</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-4">cookie加固</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-5">csrf</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-6">前端路由不允许出现数据库的增删改查</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2-2">
                <template #title>前端性能</template>
                <el-menu-item @click="_menuItem" index="2-2-1">图片</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-2-2">js</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-2-3">css</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2-3">
                <template #title>高并发</template>
                <el-menu-item @click="_menuItem" index="2-3-1">前端负载均衡</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-3-2">后端集群</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-3-3">HTTP配置</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-3-4">dockerfile</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2-4">
                <template #title>灾备</template>
                <el-menu-item @click="_menuItem" index="2-4-1">监控预警</el-menu-item>
                <el-menu-item @click="_menuItem"  index="2-4-2">备份</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-4-3">容灾</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <span class="one-title">提高员工效率</span>
              </template>
                <el-menu-item @click="_menuItem" index="3-1-1">快捷键和代码块</el-menu-item>
                <el-menu-item @click="_menuItem"  index="3-1-2">数据库生成页面</el-menu-item>
                <el-menu-item @click="_menuItem" index="3-1-3">页面拖拉拽</el-menu-item>
                <el-menu-item @click="_menuItem" index="3-1-3">设计稿生成页面</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <span class="one-title">人员培训和管理</span>
              </template>
              <el-menu-item @click="_menuItem" index="3-1-1">面试题</el-menu-item>
              <el-menu-item @click="_menuItem"  index="3-1-2">练习素材</el-menu-item>
              <el-menu-item @click="_menuItem" index="3-1-3">vue/react</el-menu-item>
              <el-menu-item @click="_menuItem" index="3-1-3">基础知识</el-menu-item>
              <el-menu-item @click="_menuItem" index="3-1-3">业务考试</el-menu-item>
              <el-menu-item @click="_menuItem" index="3-1-3">新功能开发和考试</el-menu-item>
              <el-menu-item @click="_menuItem" index="3-1-3">硬件js</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                <span class="one-title">公司技术积累</span>
              </template>
              <el-menu-item @click="_menuItem" index="5-1-1">面试题</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-2">练习素材</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-3">vue/react</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-4">基础知识</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-5">新功能开发和考试</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-6">硬件js</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-7">npm架设</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-8">配置CSS架构及其网站</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-9">配置打包工具</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-10">公用组件+网站</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-11">util+网站</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-12">测试ex</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-13">兼容</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
        <div style="margin-left: 220px;margin-top: 10px">
          <p v-if="index === '0'">1、有些数据缓存在前端，比如产品，不然后端挂了就挂了2 、前端安全输入网址，文本，等出现select和where等直接发送接口给管理人员
            前端路由不允许出现数据库的增删改查 </p>
          <ButtonClick v-else-if="index === '1-1-1'"/>
          <JieKou v-else-if="index === '1-1-2'"/>
          <FromEvent v-else-if="index === '1-1-3'"/>
          <RouterJumper v-else-if="index === '1-1-4'"/>
          <SocketEvent v-else-if="index === '1-1-5'"/>
          <FlowCheck v-else-if="index === '1-2-1'"/>
          <JieKouIn v-else-if="index === '1-2-2'"/>
          <FromNews v-else-if="index === '1-2-3'"/>



        </div>
      </div>
  </div>
</template>
<script>
import ButtonClick from '@/components/web/maiDian/buttonClicks.vue'
import JieKou from '@/components/web/maiDian/jiekou.vue'
import FromEvent from '@/components/web/maiDian/FromEvent.vue'
import RouterJumper from '@/components/web/maiDian/RouterJumper.vue'
import SocketEvent from '@/components/web/maiDian/SocketEvent.vue'
import FlowCheck from '@/components/web/jiaohu/FlowCheck.vue'
import JieKouIn from '@/components/web/jiaohu/JieKouIn.vue'
import FromNews from '@/components/web/jiaohu/FromNews.vue'
export default {
  components: {
    ButtonClick,JieKou, FromEvent, RouterJumper, SocketEvent, FlowCheck,
    JieKouIn,FromNews
  },
  name: 'WebRouter',
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
<style>
.one-title{
  font-size: 18px;
}
</style>

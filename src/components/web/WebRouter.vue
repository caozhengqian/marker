<template>
  <div class="about">
    <main>
      <el-button type="primary" @click="_c('css')">业务埋点</el-button>
      <p>按钮点击</p>
      <p>接口失败</p>
      <p>表单事件</p>
      <p>路由跳转</p>
      <p>socket</p>
      <el-button type="primary" @click="_c('css')">基础架构</el-button>
      <p>配置CSS架构</p>
      <p>dockerfile</p>
      <p>npm架设</p>
      <p>配置打包工具</p>
      <p>公用组件</p>
      <p>服务器性能</p>
      <el-button type="primary" @click="_c('css')">前端安全</el-button>
      <el-button type="primary" @click="_c('css')">前端性能</el-button>
      <p>图片</p>
      <p>js体积</p>
      <p>css体积</p>
      <p>html</p>
      <p></p>

      <el-button type="primary" @click="_c('css')">提升效率</el-button>
      <p>练习素材</p>
      <el-button type="primary" @click="_c('css')">人员管理</el-button>

      <el-button type="primary" @click="_c('css')"></el-button>
      <el-button type="primary">util</el-button>
      <el-button type="primary">开发工具</el-button>
      <el-button type="primary">vue/react</el-button>
      <el-button type="primary"></el-button>
      <el-button type="primary"></el-button>
      <el-button type="primary">数据库基本用法</el-button>
      <el-button type="primary">性能</el-button>
      <el-button type="primary">监控服务器+埋点</el-button>
      <el-button type="primary">安全配置</el-button>
      <el-button type="primary">拖拽公用组件</el-button>
      <el-button type="primary">基础知识</el-button>
      <el-button type="primary">功能</el-button>
      <el-button type="primary">硬件js</el-button>
      <el-button type="primary">检测</el-button>
      <el-button type="primary">架构</el-button>
      <el-button type="primary">兼容</el-button>
      <el-button type="primary">效率</el-button>
    </main>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    RouterLink,
    RouterView,
  },
  name: 'WebRouter',

  computed: {
  },
  data() {
    return {}
  },
  methods: {
    _c(v) {
      this.$router.push('/web/'+v)
    },
  }

}

</script>
<style>

</style>

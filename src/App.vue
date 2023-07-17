
<template>
<div>
  <el-button type="primary" @click="_c('/linux')">linux</el-button>
  <el-button type="primary" @click="_c('/SQL')">SQL</el-button>
  <el-button type="primary" @click="_c('/nginx')">代理转发</el-button>
  <el-button type="primary" @click="_c('/java')">计算机语言</el-button>
  <el-button type="primary" @click="_c('/web/css')">前端</el-button>
  <el-button type="primary" @click="_c('/web/css')">人体工程学</el-button>
  <RouterView />
</div>

</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
          RouterLink,
          RouterView,
  },
  name: 'App',
  props: {
    keyValue: Number
  },
  computed: {
  },
  data() {
    return {}
  },
  methods: {
    _c(v) {
      this.$router.push(v)
    },
  }

}

</script>
<style scoped>

</style>

<template>
  <el-row style="padding:20px">
    <el-col :span="6">
      <el-input
          v-model="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="Please input"
      />
      <el-button type="primary" @click="_c">提交</el-button>
      <span>{{index2}}</span>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "InsertData",
  props: {
  },
  computed: {
  },
  created() {
    if (typeof(Storage) !== "undefined") {
      // 针对 localStorage/sessionStorage 的代码
      this.index2 = '支持localStorage'
    } else {
      // 抱歉！不支持 Web Storage ..
      this.index2 = '不支持localStorage'
    }
  },
  data() {
    return {
      textarea:'',
      index2:'',
    }
  },
  methods: {
    _c(v) {
      let list = localStorage.listData || []
      console.info(list)
      list.push({time:Date.now(),test:this.textarea})

      localStorage.setItem("listData", list);
    }
  }
}
</script>

<style scoped>

</style>

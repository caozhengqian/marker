<template>
记忆
  <div v-for="(item, index) in list">
    {{ index }} - {{ item.time }}
  </div>
</template>

<script>
export default {
  name: "JiYi",
  props: {
  },
  computed: {
  },
  created() {
    this.list = localStorage.list || []
    },
  data() {
    return {
      index:'1',
      list:[]
    }
  },
  methods: {
    _c(v) {
    }}
}
</script>

<style scoped>

</style>

<template>
  <div class="about">
    <main>
      <WebRouter/>
      <h1>web里面的CSS</h1>
    </main>

  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import WebRouter from "@/components/web/WebRouter.vue";
export default {
  components: {
    RouterLink,
    RouterView,
    WebRouter,
  },
  name: 'css',
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
<style>

</style>

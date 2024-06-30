<template>
  <div class="readmes">
  <h1>公用组件的开发、编译、生成文档全流程架构，编写组件只需四步。
    <br/><a href="https://github.com/caozhengqian/vue3-coms" target="_blank">公用组件架构git地址</a>
    <a style="margin-left: 50px" href="http://www.daqianaierzi.com:81/" target="_blank">组件预览地址</a>
  </h1>
  <h2>一：编写组件</h2>
    <p>在src中完成组件功能</p>
  <h2>二：打包组件</h2>
    <p>copy组件到packages</p>
    <p>在packages/index.ts引入组件</p>
    <p>npm run lib生成lib文件</p>
  <h2>三：发布组件</h2>
    <p>修改command/package.josn的version版本号</p>
    <p>拷贝command/index.d.ts和command/package.json到lib目录下</p>
    <p>npm publish上传npm</p>
  <h2>四：完善文档（必写）</h2>
    <p>进入docs/.vitepress/config编写路由</p>
    <p>新增组件的演示、code和API</p>
    <p>打包发布</p>
  </div>
</template>

<script>
export default {
  name: "PeiGongYong"
}
</script>

<style scoped>
.readmes{
  line-height: 1.5;
}
h2{
  margin-top: 20px;
}
p{
  line-height: 2;
  padding-left: 20px;
  font-size: 20px;
}
</style>

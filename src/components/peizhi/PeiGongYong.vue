<template>
  <div class="readmes">
    <p class="titles">1、解决公司公用组件开发问题，涵盖组件开发全流程（开发、编译、生成文档）</p>
    <p class="titles">2、专为新手研发，简化开发流程，让小白轻松编写组件。</p>
    <br/><a href="https://github.com/caozhengqian/vue3-coms" target="_blank">公用组件架构git地址</a>
    <a style="margin-left: 50px" href="http://www.daqianaierzi.com:81/" target="_blank">组件预览地址</a>
  <h3>一：编写组件</h3>
    <p>在src中完成组件功能</p>
  <h3>二：打包组件</h3>
    <p>copy组件到packages</p>
    <p>在packages/index.ts引入组件</p>
    <p>npm run lib生成lib文件</p>
  <h3>三：发布组件</h3>
    <p>修改command/package.josn的version版本号</p>
    <p>拷贝command/index.d.ts和command/package.json到lib目录下</p>
    <p>npm publish上传npm</p>
  <h3>四：完善文档（必写）</h3>
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
.titles{
  padding-left: 0;
  color: #1677ff;
  line-height: 1.5;
  font-size: 20px;
}
h3{
  margin-top: 20px;
  padding-left: 50px;
}
p{
  line-height: 1.8;
  padding-left: 70px;
  font-size: 18px;
}
</style>

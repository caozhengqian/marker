<template>
  <div class="readmes">
    <p class="titles">为什么要开发公用组件和简化开发流程（<a style="" href="http://www.daqianaierzi.com:81/" target="_blank">组件预览地址</a>和<a href="https://github.com/caozhengqian/vue3-coms" target="_blank">github地址</a> ）</p>
    <p class="titles1">1、每个部门都要实现一遍<span class="b">重复的业务逻辑</span>（搜索工号、搜索部门等）</p>
    <p class="titles1">2、公用组件都由架构部完成，<span class="b">无法理解</span>各个产品线<span class="b">真实需要</span></p>
    <p class="titles1">3、组件<span class="b">无法快速普及</span>，公司技术平台（比如wiki）<span class="b">无法生动展示组件</span>（elementui能展示组件使用、组件代码、组件API）</p>
    <br/>

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
  line-height: 1.5;
  font-size: 20px;
  color: #1677ff;
}
.titles1{
  padding-left: 50px;
  color: black;
  line-height: 1.5;
  font-size: 20px;
}
.b{
  color: red;
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

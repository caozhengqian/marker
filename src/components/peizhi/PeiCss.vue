<template>
  <div class="readme">
    <h1>开箱即用，可复制，可扩展的css架构：<a href="https://github.com/caozhengqian/css-frame" target="_blank">css架构项目git地址</a></h1>
    <h2>1. Settings基础样式层，颜色、边框、、阴影、层级等</h2>
    <p>* 根据设计稿定义基础样式，在项目settings文件夹下定义变量</p>
    <p>* 在vite.config.js中引入全局</p>
    <h2>2. Tools层（function和mixin）</h2>
    <p>* 引入SCSS框架到tools文件夹</p>
    <p>* 使用框架比如SassMagic</p>
    <p>* 在vite.config.js中引入全局</p>
    <h2>3. Base层去除各大浏览器自带样式，定义基础元素默认样式（a,button等)</h2>
    <p>* 安装normal.css,在main.js引入全局</p>
    <p> * 根据设计稿设置基础元素样式，写入base文件夹，必写（img，p，a）非必写form基本要设置</p>
    <h2>4. Components层定义样式组件，类似栅格</h2>
    <p>* 样式组件(栅格，layout，居中，文本样式等)</p>
    <p>* class用BEM规则，button-waring--fontsize</p>
    <h2>5. Acss层定义固定属性样式</h2>
    <p>* 宽度、高度、圆角、颜色、字体大小，边框</p>
    <p>* 内边距、外边距、z-index,背景色，背景色+透明度</p>
    <p>* 段落省略号等等</p>
    <h2>6. Theme层</h2>
    <p>* html标签上设置</p>
    <p>* theme文件夹创建多个主题</p>
  </div>

</template>

<script>
export default {
  name: "PeiCss"
}
</script>

<style scoped>
.readme{
  line-height: 1.5;
}
h2{
  margin-top: 20px;
}
p{
  font-size: 20px;
}

</style>

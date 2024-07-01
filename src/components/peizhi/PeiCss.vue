<template>
  <div class="readme" style="width: 100%">
    <p class="titles">1、解决各种前端样式架构问题;</p>
    <p class="titles">2、架构思路可延伸至android、IOS、小程序、鸿蒙等未来新技术;</p>
    <br/><a href="https://github.com/caozhengqian/css-frame" target="_blank">样式架构git地址</a>
    <h3>1. Settings基础样式层，颜色、边框、、阴影、层级等</h3>
    <p>1） 根据设计稿定义基础样式，在项目settings文件夹下定义变量</p>
    <p>2） 在vite.config.js中引入全局</p>
    <h3>2. Tools层（function和mixin）</h3>
    <p>1）引入SCSS框架到tools文件夹</p>
    <p>2） 使用框架比如SassMagic</p>
    <p>2） 在vite.config.js中引入全局</p>
    <h3>3. Base层去除各大浏览器自带样式，定义基础元素默认样式（a,button等)</h3>
    <p>1）安装normal.css,在main.js引入全局</p>
    <p> 2） 根据设计稿设置基础元素样式，写入base文件夹，必写（img，p，a）非必写form基本要设置</p>
    <h3>4. Components层定义样式组件，类似栅格</h3>
    <p>1）样式组件(栅格，layout，居中，文本样式等)</p>
    <p>2） class用BEM规则，button-waring--fontsize</p>
    <h3>5. Acss层定义固定属性样式</h3>
    <p>1）宽度、高度、圆角、颜色、字体大小，边框</p>
    <p>2） 内边距、外边距、z-index,背景色，背景色+透明度</p>
    <p>3） 段落省略号等等</p>
    <h3>6. Theme层</h3>
    <p>1）html标签上设置</p>
    <p>2） theme文件夹创建多个主题</p>
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

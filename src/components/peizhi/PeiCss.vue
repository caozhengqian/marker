<template>
  <div class="readme" style="width: 100%">
    <p class="titles">为什么要做CSS架构（<a href="https://github.com/caozhengqian/css-frame" target="_blank">github地址</a>）</p>
    <p class="titles1"><span class="b">1、多人编写项目，</span>样式重复、<span class="b">互相</span>阅读有障碍</p>
    <p class="titles1"><span class="b">2、class</span>命名混乱</p>
    <p class="titles1"><span class="b">3、css</span>功能未提炼，<span class="b">每个人都要实现一遍，比如（清除浮动、图片间隙等）</span></p>
    <p class="titles1"><span class="b">4、前端</span>没有样式积累</p>
    <p class="titles1"><span class="b">5、</span>未抽出布局理念<span class="b">，不能适应android、IOS、小程序、鸿蒙等未来新技术</span></p>
    <br/>
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
  color: #1677ff;
  padding-left: 0;
  line-height: 1.5;
  font-size: 20px;
}
.titles1{
  padding-left: 50px;
  color: red;
  line-height: 1.5;
  font-size: 20px;
}
.b{
  color:black;
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
span{
  color:red
}

</style>

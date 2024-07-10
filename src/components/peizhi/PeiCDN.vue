<template>
  <div class="readme">
    <p class="titles">解决新的打包工具问世带来的兼容和学习问题，抽出打包工具通用流程（<a href="https://github.com/caozhengqian/webstemplate" target="_blank">github地址</a>）</p>
    <p class="titles1"> 1、任何打包技术都是将各种文件打包成html、css、js和文件(图片)</p>
    <p class="titles1"> 2、开发环境和生产环境分开，开发的热跟新、生产的优化，举例webpack4</p>
    <h3>webpack4构建流程</h3>
    <p> 1. 单页面中同时构建`vue`、`react`和`typscript`</p>
    <p> 2. `构建优化`+`生产优化`</p>
    <h3>1. 基本编译配置</h3>
      <p>1） html编译（`HtmlWebpackPlugin`）</p>
      <p>2） css编译</p>
        <p class="p30">* less编译（`less-loader`）</p>
        <p class="p30"> * scss编译（`scss-loader`）</p>
        <p class="p30">* vue样式编译（`vue-style-loader`）</p>
        <p class="p30">* css编译（`css-loader`、`style-loader`）</p>
        <p class="p30">* 多浏览器兼容（`postcss-loader`）</p>
      <p>3） js编译</p>
        <p class="p30">* vue编译(`vue-loader`)</p>
        <p class="p30">* react编译(`babel-loader`)</p>
        <p class="p30">* babel-loader</p>
        <p class="p30">* 预设，比如箭头函数转为function(`@babel/preset-env`、`@babel/preset-react`)</p>
        <p class="p30">* 新语法补丁polyfill，比如(`core.js`,`generator`)</p>
        <p class="p30">* 按需引入polyfill（`useBuiltIns`、`corejs`）</p>
        <p class="p30">* 是否是第三方库，写页面无需配置（`run-time`）</p>
      <p>4） img编译（`file-loader`）</p>
    <h3>2. 开发环境编译配置</h3>
      <p>1）热更新，热部署（`HotModuleReplacementPlugin`）</p>
      <p>2） 加速编译dll(`webpack/lib/DllPlugin`、`webpack/lib/DllReferencePlugin`)</p>
      <p>3） html、css、js、img按照基本配置</p>
      <p></p>
    <h3>3. 生产环境编译配置</h3>
      <p>1）html编译压缩+hash（`HtmlWebpackPlugin`）</p>
      <p>2）css编译压缩+hash</p>
        <p class="p30">* 抽离并hash(`MiniCssExtractPlugin`)</p>
        <p class="p30">* 压缩css（`TerserJSPlugin`,`OptimizeCSSAssetsPlugin`)</p>
      <p>3）js编译压缩+hash</p>
        <p class="p30">* 抽离公共代码(`splitChunks`)</p>
        <p class="p30">* 忽略不常更新的包，比如react.min.js(`noParse`)</p>
        <p class="p30">* 删除包内不需要的，比如只留moment的中文包(`IgnorePlugin`)</p>
        <p class="p30">* 多进程打包、压缩（`HappyPack`、`UglifyJS`)</p>
        <p class="p30">* 删除无用js（`treeshaking`自带）</p>
        <p class="p30">* 减少闭包scopeHosting(`ModuleConcatenationPlugin`)</p>
      <p>4）img编译压缩(`url-loader`)</p>
  </div>

</template>

<script>
export default {
  name: "PeiCDN"
}
</script>

<style scoped>
.readme{
  line-height: 1.5;
}
.titles{
  padding-left: 0;
  line-height: 1.5;
  font-size: 20px;
}
.titles1{
  padding-left: 50px;
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
.p30{
  margin-left: 30px;
}
</style>

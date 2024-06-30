<template>
  <div class="readme">
    <h1>为公司沉淀技术、各种技术试验等，构建公司前端技术一体化
      <a href="https://github.com/caozhengqian/webscli" target="_blank">项目积累架构git地址</a>
    </h1>
    <h2>一：快速使用</h2>
    <p>1）安装：npm i -g @webscli/c</p>
    <p>2）执行：webscli-c init</p>
    <p>3）选择公司积累的项目或页面</p>
    <p>4）完成下载</p>
    <h2>二：积累项目流程</h2>
    <p>1）选出优秀技术和功能，放入模板git地址，并发布到npm</p>
    <p>2）wescliI的createTemplate新增模板选项</p>
    <p>3）集成到wescliI和webscliC，发布到npm</p>
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
  line-height: 2;
  padding-left: 20px;
  font-size: 20px;
}

</style>

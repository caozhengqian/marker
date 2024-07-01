<template>
  <div class="readme">
    <p class="titles">为公司沉淀技术、各种技术试验等，也可为公司可能用到的技术做积累。</p>
    <br/><a href="https://github.com/caozhengqian/webscli" target="_blank">项目积累架构git地址</a>
    <h3>一：快速使用(已发布npm)</h3>
    <el-row>
      <el-col :span="14">
        <p>1）安装：npm i -g @webscli/c</p>
        <p>2）执行：webscli-c init</p>
        <p>3）选择公司积累的项目或页面</p>
        <p>4）完成下载</p>
      </el-col>
      <el-col :span=6>
          <img
              src="./img/webcli.png"
              style="width: 300px;"
          />
      </el-col>
    </el-row>


    <h3>二：积累项目流程</h3>
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

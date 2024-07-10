<template>
  <div class="readme">
    <p class="titles">为什么需要做积累工程（<a href="https://github.com/caozhengqian/webscli" target="_blank">github地址</a>）</p>
    <p class="titles1">1、公司项目<span class="r">没有归纳</span>和<span class="r">全员学习</span></p>
    <p class="titles1">2、前端团队没有一个<span class="r">展示个人</span>能力的<span class="r">平台</span></p>
    <p class="titles1">3、前端没有一个<span class="r">贴合公司业务</span>的<span class="r">练兵场</span></p>
    <br/>
    <h3>快速使用（已发布npm）</h3>
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


<!--    <h3>二：积累项目流程</h3>-->
<!--    <p>1）选出优秀技术和功能，放入模板git地址，并发布到npm</p>-->
<!--    <p>2）wescliI的createTemplate新增模板选项</p>-->
<!--    <p>3）集成到wescliI和webscliC，发布到npm</p>-->
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
.titles1{
  padding-left: 50px;
  color: black;
  line-height: 1.5;
  font-size: 20px;
}
.r{
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

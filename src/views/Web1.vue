<template>
  <div class="about">

      <div style="display: flex;flex-direction: row">
        <div style="background: #545c64;height:100%;overflow-y:scroll;width:200px;position: fixed;top:60px">
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              default-active="1"
              class="el-menu-vertical-demo"
              text-color="#fff"
              @open="_menuOpen"
              @close="_menuClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <span class="one-title">技术驱动业务</span>
              </template>
              <el-sub-menu index="1-1">
                <template #title>业务埋点</template>
                <el-menu-item @click="_menuItem" index="1-1-1">基本埋点</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-1-2">数控大屏</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="1-2">
                <template #title>交互优化</template>
                <el-menu-item @click="_menuItem" index="1-2-1">易操作</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-2-2">减少误操作</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-2-3">及时响应误操作</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-2-4">缓解焦虑</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="1-3">
                <template #title>控制权交给业务</template>
                <el-menu-item @click="_menuItem" index="1-3-1">文本范围控制</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-3-2">增减字段</el-menu-item>
                <el-menu-item @click="_menuItem" index="1-3-3">权限配置</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="1-4">
                <template #title>快速响应业务</template>
                <el-menu-item @click="_menuItem" index="1-4-1">提升开发效率</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <span class="one-title">公司架构</span>
              </template>
              <el-sub-menu index="2-1">
                <template #title>前端安全</template>
                <el-menu-item @click="_menuItem" index="2-1-1">https</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-2">XSS</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-3">CSRF</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-4">点击劫持</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-5">ddos</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-6">防止盗链</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-7">重放攻击</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-1-8">防爬虫</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2-2">
                <template #title>前端性能</template>
                <el-menu-item @click="_menuItem" index="2-2-1">更快的网络响应</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-2-2">更快的渲染</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-2-3">更快的操作</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2-3">
                <template #title>高并发</template>
                <el-menu-item @click="_menuItem" index="2-3-1">前端负载均衡</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-3-2">CDN</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-3-3">服务器集群</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-3-4">HTTP设置</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-3-5">docker</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2-4">
                <template #title>灾备</template>
                <el-menu-item @click="_menuItem" index="2-4-1">监控预警</el-menu-item>
                <el-menu-item @click="_menuItem"  index="2-4-2">备份</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-4-3">容灾</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2-5">
                <template #title>测试</template>
                <el-menu-item @click="_menuItem" index="2-5-1">安全测试</el-menu-item>
                <el-menu-item @click="_menuItem"  index="2-5-2">性能测试</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-5-3">高并发测试</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-5-4">灾备测试</el-menu-item>
                <el-menu-item @click="_menuItem" index="2-5-5">兼容测试</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <span class="one-title">提高员工效率</span>
              </template>
              <el-sub-menu index="3-1">
                <template #title>低代码平台</template>
                <el-menu-item @click="_menuItem" index="3-1-1">前后端一起生成</el-menu-item>
                <el-menu-item @click="_menuItem" index="3-1-2">设计稿生成页面</el-menu-item>
                <el-menu-item @click="_menuItem" index="3-1-3">拖拉拽生成页面</el-menu-item>
                <el-menu-item @click="_menuItem" index="3-1-4">接口生成页面</el-menu-item>
                <el-menu-item @click="_menuItem" index="3-1-5">数据库生成页面</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3-2">
                <template #title>公用组件</template>
                <el-menu-item @click="_menuItem" index="3-2-1">公用组件</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3-3">
                <template #title>样式架构</template>
                <el-menu-item @click="_menuItem" index="3-3-1">样式架构</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3-4">
                <template #title>快捷键和代码块</template>
                <el-menu-item @click="_menuItem" index="3-4-1">快捷键和代码块</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3-5">
                <template #title>公用方法</template>
                <el-menu-item @click="_menuItem" index="3-5-1">公用方法</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <span class="one-title">人员培训和管理</span>
              </template>
              <el-sub-menu index="4-1">
                <template #title>挑选人才</template>
                <el-menu-item @click="_menuItem" index="4-1-1">实习生</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-1-2">应届生</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-1-3">高级</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-1-4">资深</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-1-5">专家</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-1-6">外包</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="4-2">
                <template #title>培训&练习</template>
                <el-menu-item @click="_menuItem" index="4-2-1">vue/react和写法标准</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-2-2">样式&样式架构</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-2-3">js&公用方法</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-2-4">公司模块</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-2-5">通用模块</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-2-6">代码检查</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="4-3">
                <template #title>淘汰</template>
                <el-menu-item @click="_menuItem" index="4-3-1">公司模块题</el-menu-item>
                <el-menu-item @click="_menuItem" index="4-3-2">时效题</el-menu-item>
             </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                <span class="one-title">公司技术积累</span>
              </template>
              <el-menu-item @click="_menuItem" index="5-1-1">面试题</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-2">练习素材</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-3">vue/react</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-4">基础知识</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-5">新功能开发和考试</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-6">硬件js</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-7">npm架设</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-8">配置CSS架构及其网站</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-9">配置打包工具</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-10">公用组件+网站</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-11">util+网站</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-12">测试ex</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-13">兼容</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-13">布局</el-menu-item>
              <el-menu-item @click="_menuItem" index="5-1-13">模拟数据</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
        <div style="margin-left: 220px;margin-top: 10px">
          <p v-if="index === '0'">1、有些数据缓存在前端，比如产品，不然后端挂了就挂了2 、前端安全输入网址，文本，等出现select和where等直接发送接口给管理人员
            前端路由不允许出现数据库的增删改查
            dva框架
            react redux redux-saga框架
            布局
            am broadcast --user all -a com.qinggan.tts_debug --es command play --es content "weclome china"
            模拟数据jsonserver
            动效
            web图表
            util类
            日期框
            拖动组件
            百度地图web
            百度地图android
            百度地图ios
            集成微信登录
            集成qq登录
            集成支付宝登录
            集成新浪登录
            集成淘宝登录
            less
            react-native 组件
            微信小程序组件
            如何做组件
            上传文件
            生成excal，导出excal
            微信小程序上线
            生成pdf
            微信支付h5
            微信支付app
            支付宝支付h5
            支付宝支付app
            android上线
            android更新
            ios上线
            ios更新
            集成微信公众号
            集成支付宝小程序
            高德web
            高德android
            高德ios
            银联支付
            react
            redux
            react-router
            react-saga
            后台demo
            门户网站demo
            mqtt
            cdn
            高并发
            世界访问
            自动开发测试
            自动部署每日测试】
          </p>
          <JiBen v-else-if="index === '1-1-1'"/>
          <YeWu v-else-if="index === '1-1-2'"/>

          <YiControl v-else-if="index === '1-2-1'"/>
          <FromNews v-else-if="index === '1-2-2'"/>
          <JiCheck v-else-if="index === '1-2-3'"/>
          <HuanJie v-else-if="index === '1-2-4'"/>
          <FanWei131 v-else-if="index === '1-3-1'"/>
          <ZengJian132 v-else-if="index === '1-3-2'"/>
          <QuanXian133 v-else-if="index === '1-3-3'"/>
          <KuaiSu141 v-else-if="index === '1-4-1'"/>
          <Https211 v-else-if="index === '2-1-1'"/>
          <Xss212 v-else-if="index === '2-1-2'"/>
          <CSRF213 v-else-if="index === '2-1-3'"/>
          <Click214 v-else-if="index === '2-1-4'"/>
          <DDos215 v-else-if="index === '2-1-5'"/>
          <DaoLian216 v-else-if="index === '2-1-6'"/>
          <ChongFang217 v-else-if="index === '2-1-7'"/>
          <PaChong218 v-else-if="index === '2-1-8'"/>
          <WangLuo221 v-else-if="index === '2-2-1'"/>
          <XuanRan222 v-else-if="index === '2-2-2'"/>
          <CaoZuo223 v-else-if="index === '2-2-3'"/>
          <FuZai231 v-else-if="index === '2-3-1'"/>
          <cdn232 v-else-if="index === '2-3-2'"/>
          <JiQun233 v-else-if="index === '2-3-3'"/>
          <HTTP234 v-else-if="index === '2-3-4'"/>
          <Docker235 v-else-if="index === '2-3-5'"/>
          <JianKong241 v-else-if="index === '2-4-1'"/>
          <BeiFen242 v-else-if="index === '2-4-2'"/>
          <RongZai243 v-else-if="index === '2-4-3'"/>
          <AnQuanTest v-else-if="index === '2-5-1'"/>
          <XingNengTest v-else-if="index === '2-5-2'"/>
          <BingFaTest v-else-if="index === '2-5-3'"/>
          <ZaiBeiTest v-else-if="index === '2-5-4'"/>
          <JianRongTest v-else-if="index === '2-5-5'"/>


          <QianHouDuan311 v-else-if="index === '3-1-1'"/>
          <SheJiGao312 v-else-if="index === '3-1-2'"/>
          <TuoLa313 v-else-if="index === '3-1-3'"/>
          <JieKou314 v-else-if="index === '3-1-4'"/>
          <sql-create315 v-else-if="index === '3-1-5'"/>
          <GongYongZuJian321 v-else-if="index === '3-2-1'"/>
          <YangShiJiaGou331 v-else-if="index === '3-3-1'"/>
          <YangShiJiaGou331 v-else-if="index === '3-3-1'"/>
          <code-kuai34 v-else-if="index === '3-4-1'"/>
          <GongYongFangFa351 v-else-if="index === '3-5-1'"/>

          <ShiXi411 v-else-if="index === '4-1-1'"/>
          <YingJieSheng412 v-else-if="index === '4-1-2'"/>
          <GaoJi413 v-else-if="index === '4-1-3'"/>
          <ZiShen414 v-else-if="index === '4-1-4'"/>
          <ZhuanJia415 v-else-if="index === '4-1-5'"/>
          <Vue421 v-else-if="index === '4-2-1'"/>
          <YangShi422 v-else-if="index === '4-2-2'"/>
          <GongYongFangfa423 v-else-if="index === '4-2-3'"/>
          <GongSiMoKuai424 v-else-if="index === '4-2-4'"/>
          <TongYongMoKuai425 v-else-if="index === '4-2-5'"/>
          <DaiMaJianCha426 v-else-if="index === '4-2-6'"/>

          <GongSiMoKuai431 v-else-if="index === '4-3-1'"/>
          <ShiXiaoTi432 v-else-if="index === '4-3-2'"/>


        </div>
      </div>
  </div>
</template>
<script>
import JiBen from '@/components/web/qudong1_1/maiDian/JiBen1-1-1.vue'
import YeWu from '@/components/web/qudong1_1/maiDian/YeWu1-1-2.vue'
import YiControl from '@/components/web/qudong1_1/jiaohu/YiControl1-2-1.vue'
import FromNews from '@/components/web/qudong1_1/jiaohu/LessError1-2-2.vue'
import JiCheck from '@/components/web/qudong1_1/jiaohu/JiCheck1-2-3.vue'
import HuanJie from '@/components/web/qudong1_1/jiaohu/HuanJie1-2-4.vue'
import FanWei131 from "@/components/web/qudong1_1/Control/FanWei1-3-1.vue";
import ZengJian132 from "@/components/web/qudong1_1/Control/ZengJian1-3-2.vue";
import QuanXian133 from "@/components/web/qudong1_1/Control/QuanXian1-3-3.vue";
import KuaiSu141 from "@/components/web/qudong1_1/KuaiSu/KuaiSu1-4-1.vue";
import Https211 from "@/components/web/jiagou1-2/safe/Https2-1-1.vue";
import Xss212 from "@/components/web/jiagou1-2/safe/Xss2-1-2.vue";
import CSRF213 from "@/components/web/jiagou1-2/safe/CSRF2-1-3.vue";
import Click214 from "@/components/web/jiagou1-2/safe/Click2-1-4.vue";
import DDos215 from "@/components/web/jiagou1-2/safe/DDos2-1-5.vue";
import DaoLian216 from "@/components/web/jiagou1-2/safe/DaoLian2-1-6.vue";
import ChongFang217 from "@/components/web/jiagou1-2/safe/ChongFang2-1-7.vue";
import PaChong218 from "@/components/web/jiagou1-2/safe/PaChong2-1-8.vue";
import WangLuo221 from "@/components/web/jiagou1-2/XingNeng/WangLuo2-2-1.vue";
import XuanRan222 from "@/components/web/jiagou1-2/XingNeng/XuanRan2-2-2.vue";
import CaoZuo223 from "@/components/web/jiagou1-2/XingNeng/CaoZuo2-2-3.vue";
import FuZai231 from "@/components/web/jiagou1-2/GaoFa/FuZai2-3-1.vue";
import Cdn232 from "@/components/web/jiagou1-2/GaoFa/Cdn2-3-2.vue";
import JiQun233 from "@/components/web/jiagou1-2/GaoFa/JiQun2-3-3.vue";
import HTTP234 from "@/components/web/jiagou1-2/GaoFa/HTTP2-3-4.vue";
import Docker235 from "@/components/web/jiagou1-2/GaoFa/Docker2-3-5.vue";
import JianKong241 from "@/components/web/jiagou1-2/ZaiBei/JianKong2-4-1.vue";
import BeiFen242 from "@/components/web/jiagou1-2/ZaiBei/BeiFen2-4-2.vue";
import RongZai243 from "@/components/web/jiagou1-2/ZaiBei/RongZai2-4-3.vue";
import CodeKuai34 from "@/components/web/xiaolv1-3/codeKuai/codeKuai3-4.vue";
import SqlCreate321 from "@/components/web/xiaolv1-3/DiDaiMa/sqlCreate3-1-5.vue";
import TuoLa331 from "@/components/web/xiaolv1-3/DiDaiMa/TuoLa3-1-3.vue";
import SheJiGao341 from "@/components/web/xiaolv1-3/DiDaiMa/SheJiGao3-1-2.vue";
import QianHouDuan311 from "@/components/web/xiaolv1-3/DiDaiMa/QianHouDuan3-1-1.vue";
import SheJiGao312 from "@/components/web/xiaolv1-3/DiDaiMa/SheJiGao3-1-2.vue";
import TuoLa313 from "@/components/web/xiaolv1-3/DiDaiMa/TuoLa3-1-3.vue";
import JieKou314 from "@/components/web/xiaolv1-3/DiDaiMa/JieKou3-1-4.vue";
import SqlCreate315 from "@/components/web/xiaolv1-3/DiDaiMa/sqlCreate3-1-5.vue";
import GongYongZuJian321 from "@/components/web/xiaolv1-3/zujian/GongYongZuJian3-2-1.vue";
import YangShiJiaGou331 from "@/components/web/xiaolv1-3/yangshi/YangShiJiaGou3-3-1.vue";
import GongYongFangFa351 from "@/components/web/xiaolv1-3/fangfa/GongYongFangFa3-5-1.vue";
import ShiXi411 from "@/components/web/peixun1-4/tiaoxuan/ShiXi4-1-1.vue";
import YingJieSheng412 from "@/components/web/peixun1-4/tiaoxuan/YingJieSheng4-1-2.vue";
import GaoJi413 from "@/components/web/peixun1-4/tiaoxuan/GaoJi4-1-3.vue";
import ZiShen414 from "@/components/web/peixun1-4/tiaoxuan/ZiShen4-1-4.vue";
import ZhuanJia415 from "@/components/web/peixun1-4/tiaoxuan/ZhuanJia4-1-5.vue";
import Vue421 from "@/components/web/peixun1-4/peixun/Vue4-2-1.vue";
import YangShi422 from "@/components/web/peixun1-4/peixun/YangShi4-2-2.vue";
import GongYongFangfa423 from "@/components/web/peixun1-4/peixun/GongYongFangfa4-2-3.vue";
import GongSiMoKuai424 from "@/components/web/peixun1-4/peixun/GongSiMoKuai4-2-4.vue";
import TongYongMoKuai425 from "@/components/web/peixun1-4/peixun/TongYongMoKuai4-2-5.vue";
import DaiMaJianCha426 from "@/components/web/peixun1-4/peixun/DaiMaJianCha4-2-6.vue";
import GongSiMoKuai431 from "@/components/web/peixun1-4/taotai/GongSiMoKuai4-3-1.vue";
import ShiXiaoTi432 from "@/components/web/peixun1-4/taotai/ShiXiaoTi4-3-2.vue";
import AnQuanTest from "@/components/web/jiagou1-2/ceshi/AnQuanTest.vue";
import XingNengTest from "@/components/web/jiagou1-2/ceshi/XingNengTest.vue";
import BingFaTest from "@/components/web/jiagou1-2/ceshi/BingFaTest.vue";
import ZaiBeiTest from "@/components/web/jiagou1-2/ceshi/ZaiBeiTest.vue";
import JianRongTest from "@/components/web/jiagou1-2/ceshi/JianRongTest.vue";
// 5638   2296 9346
export default {
  components: {
    JianRongTest,
    ZaiBeiTest,
    BingFaTest,
    XingNengTest,
    AnQuanTest,
    DaiMaJianCha426,
    ShiXiaoTi432,
    GongSiMoKuai431,
    TongYongMoKuai425,
    GongSiMoKuai424,
    GongYongFangfa423,
    YangShi422,
    Vue421,
    ZhuanJia415,
    ZiShen414,
    GaoJi413,
    YingJieSheng412,
    ShiXi411,
    GongYongFangFa351,
    YangShiJiaGou331,
    GongYongZuJian321,
    SqlCreate315,
    JieKou314,
    TuoLa313,
    SheJiGao312,
    QianHouDuan311,
    SheJiGao341,
    TuoLa331,
    SqlCreate321,
    CodeKuai34,
    RongZai243,
    BeiFen242,
    JianKong241,
    Docker235,
    HTTP234,
    JiQun233,
    Cdn232,
    FuZai231,
    CaoZuo223,
    XuanRan222,
    WangLuo221,
    PaChong218,
    ChongFang217,
    DaoLian216,
    DDos215,
    Click214,
    CSRF213,
    Xss212,
    Https211,
    KuaiSu141,
    QuanXian133,
    ZengJian132,
    FanWei131,
    JiBen,YeWu, YiControl,FromNews,JiCheck,HuanJie

  },
  name: 'WebRouter',
  computed: {
  },
  data() {
    return {
      index:'0'
    }
  },
  methods: {
    _menuOpen(key,keyPath) {
      // this.index = key
    },
    _menuClose(key,keyPath) {
      console.log(key,keyPath)
      // this.index = key
    },
    _menuItem(dom) {
      console.log(JSON.stringify(dom.index))
      this.index = dom.index
    },
  }

}

</script>
<style>
.one-title{
  font-size: 18px;
}
</style>

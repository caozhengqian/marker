<template>
  <div style="width: 1200px">

    <el-row style="margin-top: 20px">
      <el-col  :span="12">
        <p class="titles">1、根据后台接口生成页面，解决前端开发效率问题</p>
        <p class="titles">2、可根据不同语言不同需求修改本地插件</p>
      </el-col>
      <el-col :span="5"><h2 style="padding-top: 10px"><a href="webstorm低代码插件.zip" download="webstorm低代码插件.zip">webstorm插件下载</a></h2></el-col>
      <el-col :span="6"><el-button type="warning" @click="_use" style="margin-top: 10px">查看使用方法</el-button></el-col>
    </el-row>

    <el-tabs type="card" class="demo-tabs" @tab-click="_tab">
      <el-tab-pane label="生成表单">
        <el-row>
          <el-col  :span="6">
            <el-input clearable :autosize="{ minRows: 4, maxRows: 30 }" v-model="formJson" @input="_formJson" style="width:100%" type="textarea"  />
            <el-button style="float:right;margin-top: 10px" type="primary" @click="_cFormJson">开始编译</el-button>
          </el-col>
          <el-col  :span="18">
            <el-form
                :model="listJosn"
                ref="listForm"
                label-width="100px"
            >
              <div  v-for="(item,index) in listJosn" :key="index">
                <el-form-item :label="item.name+':'" >
                  <el-input v-model="listJosn[index].cn" style="width:250px">
                    <template #prepend>中文</template>
                  </el-input>
                  <el-select v-model="listJosn[index].sel" @chang="_sel" style="width:100px">
                    <el-option label="文本框" value="text"/>
                    <el-option label="下拉框" value="select"/>
                  </el-select>
                  <el-select v-model="listJosn[index].req" style="width:100px">
                    <el-option label="必输" value="Y"/>
                    <el-option label="非必输" value="N"/>
                  </el-select>
                  <el-input v-if="listJosn[index].sel === 'select'" v-model="listJosn[index].list" style="width:350px">
                    <template #prepend>下拉选项</template>
                  </el-input>
                </el-form-item>
              </div>
            </el-form>
            <div v-if="isShow" style="float:right; width:500px">
              <span>下拉选项编辑区</span>
              <el-input style="display:inline-block" v-model="you" type="textarea" :autosize="{ minRows: 2, maxRows: 30 }"/>
              <el-button style="float:right;width:300px;height:66px" type="primary" @click="copyText">{{copyButtonName}}</el-button>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="生成增删改查">
        <ZengShan/>
      </el-tab-pane>
    </el-tabs>
    <div style="border: 1px solid red"></div>
    <el-card style="width: 800px;">
      <template #header>预览页面</template>
      <img v-if="tabSelect==='生成表单'"
          src="./img/form.png"
          style="width: 100%"
      />
      <img v-else
          src="./img/table.png"
          style="width: 100%"
      />
    </el-card>

    <el-dialog title="使用方法" v-model="dia" @close="dia=false" style="width:1200px">
      <div>
        <el-card style="width: 1150px;">
          <template #header>无需解压zip文件</template>
          <img
              src="./img/importuse.png"
              style="width: 100%"
          />
        </el-card>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ZengShan from "@/components/peizhi/ZengShan.vue";
export default {
  name: "PeiJiaoShou",
  components: {
     ZengShan,
  },
  data(){
    return{
      formJson:`{"name":"","age":"","sex":""}`,
      listForm:{},
      dia:false,
      listJosn:[],
      jsonPraseList:[],
      output:"abc",
      you:`[{"lable":"男","value":"man"},{"lable":"女","value":"woman"}]`,
      copyButtonName:'生成webstorm插件规则',
      isShow:false,
      tabSelect:'生成表单'
    }
  },
  mounted() {
    this._cFormJson()
  },

  methods:{
    _tab(v){
      // 生成增删改查
      this.tabSelect = v.props.label
      console.log(`%c ${JSON.stringify(v)}`, "color:red");
    },
    _use(){
      this.dia = true
    },
    _formJson(v){
    },
    async copyText(v){
      let tmplist = this.listJosn
      let text = ""
      for (let i = 0; i < tmplist.length; i++) {
        let tmp = tmplist[i]
        // console.log(`%c ${JSON.stringify(tmp)}`, "color:red");
        // {"name":"name","cn":"姓名","sel":"text","req":"N","list":[]}
        //  {"name":"sex","cn":"性别","sel":"select","req":"N","list":"[{lable:'男',value:'man'},{lable:'女',value:'woman'}]"}
        // 姓名-text-Y-男@man&女@woman-name,年龄-text-N-男@man&女@woman-age,性别-select-Y-男@man&女@woman-sex
        let textTmp =`${tmplist[i].cn}-${tmplist[i].sel}-${tmplist[i].req}-`
        let selectOptionTmp = ""
        let l = JSON.parse(tmplist[i].list)
          for (let j = 0; j < l.length; j++) {
            let sf = ""
            if((l.length - j) === 1){
              sf = `${l[j].lable}@${l[j].value}`
            }else{
              sf = `${l[j].lable}@${l[j].value}&`
            }
            selectOptionTmp = selectOptionTmp+sf
          }
          // selectOptionTmp =
        textTmp = textTmp+selectOptionTmp+'-'+tmplist[i].name
        text = text + textTmp +","
      }


      this.output = JSON.stringify(text.slice(0, -1))
      console.log(`%c this.output=== ${this.output}`, "color:red");


      // try {
      //   await navigator.clipboard.writeText(this.output.slice(1).slice(0, -1));
      //   this.copyButtonName = '已复制'
      //   setTimeout(()=>{
      //     this.copyButtonName = '生成webstorm插件规则'
      //   },3000)
      // } catch (err) {
      //   console.log(err)
      // }
      const copyElem = document.createElement('textarea');
      let styles = copyElem.style;
      styles.position = 'fixed';
      styles.zIndex = '0';
      styles.left = '-500px';
      styles.top = '-500px';
      copyElem.value = this.output.slice(1).slice(0, -1);
      document.body.appendChild(copyElem);
      copyElem.focus();
      copyElem.select();
      let result = false;
      result = document.execCommand('copy');
      if (result) {
        this.copyButtonName = '已复制'
        setTimeout(()=>{
          this.copyButtonName = '生成webstorm插件规则'
        },3000)
        copyElem.remove();
      } else {
      }
    },
    _cFormJson(){
      this.isShow = true
     let list =  Object.keys(JSON.parse(this.formJson))
      this.jsonPraseList = list
      this.copyButtonName = '生成webstorm插件规则'

      let tmplist = []
      for (let i = 0; i < list.length; i++) {
        let tmp ={}
        tmp.name=list[i]
        tmp.cn = ''
        tmp.sel = 'text'
        tmp.req = 'N'
        tmp.list = `[{"lable":"默认","value":"default"},{"lable":"默认1","value":"default1"}]`
        tmplist.push(tmp)
      }
      this.listJosn = tmplist
    },
    _sel(v){
      if(v === 'select'){

      }
    }
  }
}
</script>

<style scoped>
.demo-tabs{
  margin-top: 30px;
  border: 1px solid #c0c4cc;
}
.titles{
  color: #1677ff;
  line-height: 1.5;
  font-size: 20px;
}
h3{
  margin-top: 20px;
}
p{
  line-height: 1.8;
  padding-left: 20px;
  font-size: 18px;
}
</style>













































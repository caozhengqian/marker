                      <template>
                        <div class='ZengShan'>

                          <el-row>
                            <el-col  :span="6">
                              <p>查询输入接口</p>
                              <el-input clearable :autosize="{ minRows: 4, maxRows: 30 }" v-model="formJson" @input="_formJson" style="width:100%" type="textarea"  />
                              <p style="margin-top: 20px">表格返回接口</p>
                              <el-input clearable :autosize="{ minRows: 4, maxRows: 30 }" v-model="formJson1" @input="_formJson" style="width:100%" type="textarea"  />
                              <el-button style="float:right;margin-top: 10px" type="primary" @click="_cFormJson">开始编译</el-button>

                            </el-col>

                            <el-col  :span="18">
                              <el-form
                                  :model="listJosn"
                                  ref="listForm1"
                                  label-width="100px"
                              >
                                <span style="padding-left: 20px">查询输入接口</span>
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
                              </div>
                              <el-form
                                  :model="listJosn1"
                                  ref="listForm1"
                                  label-width="100px"
                              >
                                <span style="padding-left: 20px">表格返回接口</span>
                                <div  v-for="(item,index) in listJosn1" :key="index">
                                  <el-form-item :label="item.name+':'" >
                                    <el-input v-model="listJosn1[index].cn" style="width:250px">
                                      <template #prepend>中文</template>
                                    </el-input>
                                  </el-form-item>
                                </div>
                              </el-form>


                              <el-button style="float:right;width:300px;height:66px" type="primary" @click="copyText">{{copyButtonName}}</el-button>

                            </el-col>
                          </el-row>
                        </div>

                      </template>

                      <script>
                      export default {
                        components: {
                        },
                        name: 'ZengShan',
                        props: {
                        },
                        computed: {
                        },
                        data(){
                          return{
                            formJson:`{"name":"","age":"","sex":""}`,
                            formJson1:`{"name1":"","age1":"","sex1":""}`,
                            listForm:{},
                            listJosn:[],
                            listJosn1:[],
                            jsonPraseList:[],
                            jsonPraseList1:[],
                            output:"abc",
                            you:`[{"lable":"男","value":"man"},{"lable":"女","value":"woman"}]`,
                            copyButtonName:'生成webstorm插件规则',
                            isShow:false
                          }
                        },
                        methods:{
                          _sel(v){
                            if(v === 'select'){

                            }
                          },
                          _formJson(v){
                          },
                          async copyText(v){
                            let tmplist = this.listJosn
                            let text = ""
                            for (let i = 0; i < tmplist.length; i++) {
                              let tmp = tmplist[i]
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
                              textTmp = textTmp+selectOptionTmp+'-'+tmplist[i].name
                              text = text + textTmp +","
                            }
                            let tmplist1 = this.listJosn1
                            let text1 = ""
                            for (let i = 0; i < tmplist1.length; i++) {
                              let tmp = tmplist1[i]
                              let textTmp =`${tmplist1[i].name}-${tmplist1[i].cn}`
                              text1 = text1 + textTmp +","
                            }
                            console.log(`%c text=${text}`, "color:red");
                            console.log(`%c text1=${text1}`, "color:red");
                            this.output = text.slice(0, -1)+"%"+text1.slice(0, -1)
                            console.log(`%c ${this.output}`, "color:red");
                            // try {
                            //   await navigator.clipboard.writeText(this.output);
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
                            copyElem.value = this.output;
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
                            let list1 =  Object.keys(JSON.parse(this.formJson1))
                            this.jsonPraseList = list
                            this.jsonPraseList1 = list1
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

                            let tmplist1 = []
                            for (let i = 0; i < list1.length; i++) {
                              let tmp ={}
                              tmp.name=list1[i]
                              tmp.cn = ''
                              tmplist1.push(tmp)
                            }
                            this.listJosn1 = tmplist1
                          }
                        }

                      }
                      </script>

                      <style  scoped>
                      .ZengShan {

                      }
                      </style>

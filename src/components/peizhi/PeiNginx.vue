<template>
  <div style="width:1200px;display:flex;border:1px yellow solid">
    <div style="display:inline-block;width:50%;border: 1px solid red">
      <el-form
          :model="form"
          ref="form"
          label-width="250px"
      >
        <p>基础模块</p>
      <el-row>
        <el-col :span="24">
          <el-form-item label="几个worker子进程">
            <el-input v-model="form.workerNum" @input="_c" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="每个worker子进程处理链接用户数">
            <el-input v-model="form.workerConnect" @input="_c" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="分析worker子进程异常终止的文件大小">
            <el-input v-model="form.errFileSize" @input="_c"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="子进程绑定cpu物理内核">
            <el-input v-model="form.cupNum" @input="_c" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="nginx优先级-20到120">
            <el-input v-model="form.first" @input="_c" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="nginx几秒内不发请求则优雅退出">
            <el-input v-model="form.timeQuit" @input="_c" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="nginx时间单位">
            <el-input v-model="form.timeValue" @input="_c" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="是否后台">
            <el-input v-model="form.daemon" @input="_c" />
          </el-form-item>
        </el-col>
      </el-row>
        <p>event模块</p>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "单个worker子进程处理的链接用户数">
              <el-input v-model="form.worker_connections" @input="_c" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label= "直接指定worker子进程处理">
              <el-input v-model="form.accept_mutex" @input="_c" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label= "指定后多少秒不回应就给下一个">
              <el-input v-model="form.accept_mutex_delay" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <p>http模块</p>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "语言编码">
              <el-input v-model="form.charset" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "多网卡,多端口，外部多域名">
              <el-input type="textarea" autosize v-model="form.servers" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "客户端到ngix长链接时间">
              <el-input v-model="form.keepalive_timeout" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <p>http内server模块</p>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "域名规则server_name">
              <el-input v-model="form.server_name" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "目录容错匹配">
              <el-input type="textarea" autosize v-model="form.pipei1" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "目录精准匹配">
              <el-input type="textarea" autosize  v-model="form.pipei2" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "根据目录匹配">
              <el-input type="textarea" autosize  v-model="form.pipei3" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "特殊文件固定目录">
              <el-input type="textarea" autosize  v-model="form.pipei4" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "强制目录处理">
              <el-input type="textarea" autosize  v-model="form.pipei5" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "是否开启性能页面">
              <el-input type="textarea" autosize  v-model="form.monitor_status" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "重定向">
              <el-input type="textarea" autosize  v-model="form.redirect" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <p>高并发开始</p>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "高并发时限制用户请求次数，1分钟请求多少次，几分钟内请求则返回504，桶定义为多大">
              <el-input  type="textarea" autosize v-model="form.zone" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "只允许部分ip">
              <el-input  type="textarea" autosize v-model="form.allow" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "下载页面">
              <el-input  type="textarea" autosize v-model="form.download" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <p>反向代理+负载均衡</p>
        <p>反向代理 服务器ip+端口 权重  后台服务器最大并发连接数，一旦出错要几秒测试，几秒内检查几次，检查完成继续访问该服务器
          添加备份服务器。</p>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "负载均衡hash算法根据据url">
              <el-input   v-model="form.hash" @input="_c"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "根据ip地址来固定后台服务器">
              <el-input v-model="form.iphash" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "最少连接数，开辟内存存放所有后台服务器连接数信息，选择最小连接，可能会session失效">
              <el-input  type="textarea" autosize v-model="form.zone_proxy" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "备用服务器，如果其他全停就开始访问">
              <el-input  type="textarea" autosize v-model="form.bak" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "最多有几个空闲的长链接">
              <el-input  v-model="form.keepaliveNums" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "单个长链接最多发送请求个数，多了则重新建立链接">
              <el-input   v-model="form.keepalive_requests" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "单个长链接最多空闲多少秒">
              <el-input  type="textarea" v-model="form.keepalive_timeoutNum" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <p>负载均衡的server</p>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "后台地址">
              <el-input  type="textarea" v-model="form.proxy_pass" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "消息体全部接受再转给后台on，占用磁盘io，off更及时转发给后台，减少磁盘io">
              <el-input   v-model="form.proxy_request_buffering" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "请求最大值，上传下载需要调整">
              <el-input   v-model="form.client_max_body_size" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "性能优化，小于100k用内存，大于用磁盘">
              <el-input  v-model="form.client_body_buffer_size" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "连续的内存池，提升效率">
              <el-input v-model="form.client_body_in_single_buffer" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "默认client_body_temp ">
              <el-input  type="textarea" v-model="form.client_body_temp_path" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "请求存入磁盘不删除，clean存入磁盘，请求后删除，off不存入磁盘">
              <el-input  v-model="form.client_body_in_file_only" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "TCP连接后，多少秒没有请求则断开">
              <el-input  type="textarea" v-model="form.clent_body_timeout" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "转发请求头">
              <el-input   v-model="form.proxy_pass_request_headers" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "转发请求体">
              <el-input  v-model="form.proxy_pass_request_body" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "nginx向后台发起tcp建立，如果多少秒未成功则放弃">
              <el-input v-model="form.proxy_connect_timeout" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "nginx多少秒内没有向后台发送内容则断开">
              <el-input v-model="form.proxy_send_timeout" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "向后台开启socket,off">
              <el-input v-model="form.proxy_socket_keepalive" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "客户端主动断开，则断开与后台连接">
              <el-input  v-model="form.proxy_ignore_client_bort" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "返回300以上是否自定义页面">
              <el-input  v-model="form.proxy_intercept_errors" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "发生错误后，转发几次，再不行就报错">
              <el-input  v-model="form.proxy_next_upstream_tries" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label= "发生错误后几秒没有返回则换下一台">
              <el-input  type="textarea" v-model="form.proxy_next_upstream_timeout" @input="_c" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div style="padding:50px; display:inline-block;width:50%;height: 100%">
      <el-input
          v-model="output"
          style="width: 100%"
          autosize
          type="textarea"
          placeholder="Please input"
      />
    </div>
  </div>
</template>

<script>
import nginxData from './nginxdata'
export default {
  name: "PeiNginx",
  data() {
    return {
      form: {
        workerNum: "4",//几个worker子进程
        workerConnect: "12500",//每个worker子进程处理链接用户数
        errFileSize: "50",//分析worker子进程异常终止的文件大小
        cupNum: "01 10 01 10",//子进程绑定cpu物理内核
        first: "-10",//nginx优先级-20到120
        timeQuit: "5",//nginx几秒内不发请求则优雅退出
        timeValue: "100ms",//nginx时间单位
        daemon: "on",//是否后台
        worker_connections: "65535",//单个worker子进程处理的链接用户数
        accept_mutex: "on",//直接指定worker子进程处理
        accept_mutex_delay: "100ms",//指定后多少秒不回应就给下一个
        charset: "utf-8",//语言编码
        servers: `server {
          listen 192.168.0.1;
          server_name www.aaaaaaaaa.com;
          }
          server {
          listen 192.168.0.2:81;
          server_name www.bbbbbbbb.com;
          }`,//多网卡,多端口，外部多域名
        keepalive_timeout: "60s",//客户端到ngix长链接时间
        server_name: "www.bbbbbbbb.com   *.bbbbbbbb.com",//域名规则server_name
        pipei1: `loction /pic1{
        #先找index，找不到找pic.html
        }
        `,//目录容错匹配
        pipei2: `loction /pic1/{
        #找index，找不到就404
        }
        `,//目录精准匹配
        pipei3: `loction /pic1/{
          root /html/pic2
        }
        `,//根据目录匹配
        pipei4: `location ~ \\.(jpeg|jpg)$ {
          root html/images;
        }
        `,//特殊文件固定目录
        pipei5: `location ~ \\.(jpeg|jpg)$ {
          root html/images;
        }
        `,//强制目录处理
        monitor_status: `location /monitor_status {
         stub_status;
        }
        `,//是否开启性能页面
        redirect: `location / {
         if ( $uri = "/images/" ) {
         rewrite (.*) /pics/ break;
         }
         rewrite /(.*) http://www.cctv.com permanent;
        }
        `,//重定向
        zone:"limit_req:15m rate=12r/m",//高并发
        allow:`allow 192.168.184.0/24;
        deny all;
        `,//只允许部分ip
        download:`
        location /download/ {
        root /opt/source;
        # index b.html;
        autoindex on;
        autoindex_exact_size off;
        autoindex_format html;
        autoindex_localtime off;
        }
        `,//下载页面
        hash:"hash",//负载均衡hash算法根据据url
        iphash:"ip_hash",//根据ip地址来固定后台服务器
        zone_proxy:`
server 192.168.184.20:8080 weight=2 max_conns=1000 fail_timeout=10s max_fails=3
        `,//最少连接数
        bak:`
server 193.169.185.21:8080 back_up weight=2 max_conns=1000 fail_timeout=10s max_fails=3;
        `,//最少连接数
        keepaliveNums:"32",//最多有几个空闲的长链接
        keepalive_requests:"80",//单个长链接最多发送请求个数，多了则重新建立链接
        keepalive_timeoutNum:"20",//单个长链接最多空闲多少秒
        proxy_pass:"http://back_end/proxy",//后台地址
        proxy_request_buffering:"on",//消息体全部接受再转给后台on，占用磁盘io，off更及时转发给后台，减少磁盘io
        client_max_body_size:"250k",//请求最大值，上传下载需要调整
        client_body_buffer_size:"100k",//性能优化，小于100k用内存，大于用磁盘
        client_body_in_single_buffer:"on",//连续的内存池，提升效率
        client_body_temp_path:"test_body_path",//默认client_body_temp
        client_body_in_file_only:"on",//请求存入磁盘不删除，clean存入磁盘，请求后删除，off不存入磁盘
        clent_body_timeout:"30s",//TCP连接后，多少秒没有请求则断开
        proxy_pass_request_headers:"on",//转发请求头
        proxy_pass_request_body:"off",//转发请求体
        proxy_connect_timeout:"60s",//nginx向后台发起tcp建立，如果多少秒未成功则放弃
        proxy_send_timeout:"60s",//nginx向后台发起tcp建立，如果多少秒未成功则放弃
        proxy_socket_keepalive:"on",//向后台开启socket
        proxy_ignore_client_bort:"on",//客户端主动断开，则断开与后台连接
        proxy_intercept_errors:"on",//返回300以上是否自定义页面
        proxy_next_upstream_tries:"3",//发生错误后，转发几次，再不行就报错
        proxy_next_upstream_timeout:"3",//发生错误后几秒没有返回则换下一台
      },
      output:nginxData
    }
  },
  mounted() {

    this._c()
  },
  methods: {
    _c(){
      this.output = `
#user  nobody;所属用户
#group  nobody;所属组
worker_rlimit_nofile  ${this.form.workerConnect};#每个work2222er子进程处理链接用户数 乘以 worker子进程数 ：最大65535
worker_processes ${this.form.workerNum}

worker_rlimit_core ${this.form.errFileSize}M;#分析worker子进程异常终止的文件

#worker子进程绑定cpu物理内核，降低切换cpu的损耗。
worker_cpu_affinity  ${this.form.cupNum};#两核，四核，八核 #0001 0010 0100 1000 #00000001 00000010 00000100 00001000 00010000 00100000 01000000 10000000;

worker_priority ${this.form.first}#nginx优先级-20到120，-20优先级最高

worker_shutdown_timeout ${this.form.timeQuit}s;#nginx5秒内不发请求则优雅退出，异常、热部署的时候

timer_resolution ${this.form.timeValue};#nginx时间单位，越精度nginx性能越低，

daemon ${this.form.daemon};#nginx前台后台运行
lock_file logs/nginx.log;

events {
    worker_connections  ${this.form.worker_connections}; 65535除以内核数#单个worker子进程处理的链接用户数
    accept_mutex ${this.form.accept_mutex};#性能优化，master直接指定worker子进程处理，不需要广播消耗性能
    accept_mutex_delay ${this.form.accept_mutex_delay};#master指定给一个worker如果100秒没有回应就给下一个
    multi_accept on;
}

http {
charset ${this.form.charset};#语言编码

${this.form.servers}#服务器多网卡,多端口，外部多域名
\tkeepalive_timeout ${this.form.keepalive_timeout};#客户端到ngix长链接

\tserver {
\t\tserver_name www.bbbbbbbb.com   *.bbbbbbbb.com;#域名规则
\t\t#目录容错匹配
    ${this.form.pipei1}
\t\t#目录精准匹配
${this.form.pipei2}
\t\t#根据目录匹配 /html/pic2/pic1
${this.form.pipei3}
\t\t#特殊文件固定目录
${this.form.pipei4}
\t\t#强制目录处理，无论location后面跟bbs都固定到一处
${this.form.pipei5}
\t\t
\t\t#开启监控nginx性能页面，
\t\t#\t1、Active Connections(活动连接数)
\t\t#\t2、accepts(接受的客户端连接总数量)
\t\t#\t3、handled(处理的客户端连接总数量)
\t\t#\t4、requests(客户端总的请求量)
\t\t#\t5、Reading(读取客户端的连接数)
\t\t#\t6、Writing(响应数据到客户端的连接数)
\t\t#\t7、Waiting(空闲客户端请求连接数量)
${this.form.monitor_status}
\t\tlocation / {#重定向permanent301永久重定向，redirect 302临时重定向
\t\t\tif ( $uri = "/images/" ) {
\t\t\t\trewrite (.*) /pics/ break;
\t\t\t}
\t\t\trewrite /(.*) http://www.cctv.com permanent;
\t\t}
\t\t
\t}
\tlimit_req_zone  $binary_remote_addr zone=${this.form.zone};#高并发时限制用户请求次数，1分钟请求12次，5分钟内请求则返回504，桶定义为7
\tserver{
\t\tlocation / {
\t\troot   html;
\t\tindex  index.html index.htm;
\t\terror_log logs/limit_req_error.log info;
\t\tlimit_req_status 504;
\t\tlimit_req_log_level notice;
\t\tlimit_req zone=limit_req;
#\t    limit_req zone=limit_req burst=7 nodelay;
        }
        location / {
            root   html;
            index  index.html index.htm;
            error_log logs/limit_req_error.log info;
${this.form.allow}#只允许部分ip
\t\t}
\t\tlocation /download/ {#下载页面
\t\t\troot /opt/source;
\t\t   # index b.html;
\t\t\tautoindex on;
\t\t\tautoindex_exact_size off;
\t\t\tautoindex_format html;
\t\t\tautoindex_localtime off;
\t\t}
\t}
\t\t#添加备份服务器。
\tupstream back_end {#反向代理 服务器ip+端口 权重  后台服务器最大并发连接数，一旦出错要几秒测试，几秒内检查几次，检查完成继续访问该服务器

\t\t${this.form.hash} $request_uri#负载均衡hash算法根据据url，同url则不会请求另外服务器

\t\t${this.form.iphash};#根据ip地址来固定后台服务器
\t\tzone zone_proxy 10M;#最少连接数，开辟内存存放所有后台服务器连接数信息，选择最小连接，可能会session失效
\t\tleast_conn;
\t\t${this.form.zone_proxy}
\t\t${this.form.bak}#备用服务器，如果其他全停就开始访问
\t\tkeepalive ${this.form.keepaliveNums};#最多有32个空闲的长链接
\t\tkeepalive_requests ${this.form.keepalive_requests};#单个长链接最多发送请求个数，多了则重新建立链接
\t\tkeepalive_timeout ${this.form.keepalive_timeoutNum}s;#单个长链接最多空闲多少秒
\t}
\tserver {
\t\tlisten 80;
\t\tserver_name proxy.kutian.edu;
\t\tlocation /proxy {
\t\t\tproxy_pass ${this.form.proxy_pass};
\t\t\tproxy_request_buffering ${this.form.proxy_request_buffering};#消息体全部接受再转给后台on，占用磁盘io，off更及时转发给后台，减少磁盘io
\t\t\tclient_max_body_size ${this.form.client_max_body_size};#请求最大值，上传下载需要调整
\t\t\tclient_body_buffer_size ${this.form.client_body_buffer_size};#性能优化，小于100k用内存，大于用磁盘
\t\t\tclient_body_in_single_buffer ${this.form.client_body_in_single_buffer};#连续的内存池，提升效率
\t\t\tclient_body_temp_path ${this.form.client_body_temp_path};#默认client_body_temp
\t\t\tclient_body_in_file_only ${this.form.client_body_in_file_only};#请求存入磁盘不删除，clean存入磁盘，请求后删除，off不存入磁盘
\t\t\tclent_body_timeout ${this.form.clent_body_timeout};#TCP连接后，30秒没有请求则断开
\t\t\tproxy_pass_request_headers ${this.form.proxy_pass_request_headers};#转发请求头
\t\t\tproxy_pass_request_body ${this.form.proxy_pass_request_body};#转发请求体
\t\t\tproxy_connect_timeout ${this.form.proxy_connect_timeout};#nginx向后台发起tcp建立，如果60s未成功则放弃
\t\t\tproxy_send_timeout ${this.form.proxy_send_timeout};#nginx60s内没有向后台发送内容则断开
\t\t\tproxy_socket_keepalive ${this.form.proxy_socket_keepalive};#向后台开启socket,off
proxy_ignore_client_bort ${this.form.proxy_ignore_client_bort}#客户端主动断开，则断开与后台连接
\t\t\terror_page   500 502 503 504  /50x.html;#返回300以上是否自定义页面
\t\t\tproxy_intercept_errors ${this.form.proxy_intercept_errors};
\t\t\t#不自定义页面可以切换服务器等相关操作，不能与proxy_intercept_errors on;一起使用
\t\t\terror timeout http_500 http_502 http_503 http_504http_500 http_403 http_404 http_429;#超时 切换服务器
\t\t\tproxy_next_upstream error timeout;
\t\t\t proxy_next_upstream_tries ${this.form.proxy_next_upstream_tries};#发生错误后，转发三次，再不行就报错
\t\t\tproxy_next_upstream_timeout ${this.form.proxy_next_upstream_timeout}#发生错误后3秒没有返回则换下一台
\t\t}
\t}
}

      `
    }
  }

}
</script>

<style scoped>

</style>

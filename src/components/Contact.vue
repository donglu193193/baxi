<template id="contact">
	<div class="content" style="padding-bottom:60px" v-loading="fullscreenLoading">
       	<ul>
           	<li class="show clearfix">
              	<div class="clearfix" style="height:auto">
                   
                	<v-header ref="child1"></v-header>
                    <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
                    <el-collapse  v-model="activeName" class="clearfix">
                      <el-collapse-item name="1">
                        <template slot="title" >
                          {{$t('title["toggle1"]')}}
                        </template>
                        
                        <el-tabs type="border-card">
                          <el-tab-pane :label="$t('label.kLine')">
                              <div class="tradingview-widget-container">
                                <div id="technical-analysis"></div>
                              </div>
                          </el-tab-pane>
                          <el-tab-pane :label="$t('label.depth')">
                              <depth-chart></depth-chart>  
                          </el-tab-pane>
                        </el-tabs>
                      </el-collapse-item>
                      <el-collapse-item name="2">
                        <template slot="title" >
                          {{$t('title["toggle2"]')}}
                        </template>
                        <table class="table" v-show="this.$store.state.token" ><!-- 委托交易 -->
                            <thead>
                              <tr>
                                <th>{{$t('table["tradeID"]')}}</th>
                                <th>{{$t('table["市场"]')}}</th>
                                <th>{{$t('table["data"]')}}</th>
                                <th>{{$t('table["type"]')}}</th>
                                <th>{{$t('table["number"]')}}</th>
                                <th>{{$t('table["price"]')}}</th>
                                <th>{{$t('table["operate"]')}}</th>
                              </tr>
                            </thead>
                            <tr v-for="(item,index) in $store.state.arr1 " v-bind:key="index" >
                                <td>{{item.id}}</td>
                                <td>{{item.tradeMarket}}</td>
                                <td>{{item.createTime}}</td>
                                <td>{{item.entrustType ? $t('table["sell"]') : $t('table["buy"]')}}</td>
                                <td>{{item.amount}}</td>
                                <td>{{item.prize}}</td>
                                <td>
                                  <el-button  size="mini" type="danger" icon="el-icon-delete" @click='del(item.id)'>{{$t('button["撤销"]')}}</el-button>
                                </td>
                            </tr>
                            <tr v-show="!$store.state.arr1.length">
                                <td colspan='7'>{{$t('tag["noData"]')}}</td>
                            </tr>
                            

                        </table>
                        <el-row  v-show="!this.$store.state.token"  class="unlisted">
                          <el-button type="danger" plain><router-link to="/login" >{{$t('button["pleaseLogin"]')}}</router-link></el-button>
                        </el-row>
                      </el-collapse-item>
                      <el-collapse-item name="3">
                        <template slot="title" >
                          {{$t('title["toggle3"]')}}
                        </template>
                        <div class="service-Content">
                          <table class="table" v-show="this.$store.state.token"><!-- 历史交易 -->
                              <thead>
                                <tr>
                                  <th>{{$t('table["tradeID"]')}}</th>
                                  <th>{{$t('table["市场"]')}}</th>
                                  <th>{{$t('table["data"]')}}</th>
                                  <th>{{$t('table["type"]')}}</th>
                                  <th>{{$t('table["number"]')}}</th>
                                  <th>{{$t('table["price"]')}}</th>
                                </tr>
                              </thead>
                              <tr v-for="(item,index) in $store.state.arr " v-bind:key="index" >
                                  <td>{{item.id}}</td>
                                  <td>{{item.tradeMarket}}</td>
                                  <td>{{item.createTime}}</td>
                                  <td>{{item.entrustType ? $t('table["sell"]') : $t('table["buy"]')}}</td>
                                  <td>{{item.amount}}</td>
                                  <td>{{item.prize}}</td>
                              </tr>
                              <tr v-show="!$store.state.arr.length">
                                  <td colspan='6'>{{$t('tag["noData"]')}}</td>
                              </tr>
                              
                          </table>
                          <el-row  v-show="!this.$store.state.token"  class="unlisted">
                            <el-button type="danger" plain><router-link to="/login" >{{$t('button["pleaseLogin"]')}}</router-link></el-button>
                          </el-row>
                        </div>
                      </el-collapse-item>
                      <el-collapse-item name="4" @click="per($store.state.arr2,index)">
                        <template slot="title" >
                          {{$t('table["orderBook"]')}}
                        </template>
                        <div  class="clearfix" >
                          <div style="width:50%;float: left;">
                            <ul class="buyTab" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);transition-duration: 0ms;transform: translate(0px, 0px) translateZ(0px);"><!-- 买卖单显示 -->
                              <li style="background: #9A9A9A">
                                <p>{{$t('table["price"]')}}</p>
                                <p>{{$t('table["number"]')}}</p>
                              </li>
                              <li v-for="(item,index) in $store.state.arr2 ">
                                <p>{{item.price}}</p>
                                <p>{{item.amount}}</p>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-warning" role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         :style="'width:' + item.amount + '%'">
                                        <span class="sr-only">{{item.amount}}</span>
                                    </div>
                                </div>
                              </li>
                              <li v-show="!$store.state.arr2.length"><p>{{$t('tag["noData"]')}}</p></li>
                            </ul>
                        </div>
                        <div style="width:50%;float: left;">
                            <ul class="buyTab" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);transition-duration: 0ms;transform: translate(0px, 0px) translateZ(0px);"><!-- 买卖单显示 -->
                              <li style="background: #9A9A9A">
                                <p>{{$t('table["number"]')}}</p>
                                <p>{{$t('table["price"]')}}</p>
                              </li>
                              <li v-for="(item1,index) in $store.state.arr3 "> 
                                <p>{{item1.amount}}</p>
                                <p>{{item1.price}}</p>
                                <div class="progress">
                                    <div class="progress-bar1 progress-bar-warning" role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         :style="'width:' + item1.amount + '%'">
                                        <span class="sr-only">{{item1.amount}}</span>
                                    </div>
                                </div>
                              </li>
                              <li v-show="!$store.state.arr3.length"><p>{{$t('tag["noData"]')}}</p></li>
                            </ul>
                        </div>
                        </div>
                        
                      </el-collapse-item>

                    </el-collapse>
                   	</div>
                </div>
           	</li>
       	</ul>
   </div>
</template>
<script>
import header from '../components/Trade.vue'
import depthChart from '../components/depthChart.vue'
import chart from '../js/tradingView.js'
import '../style/element.css'
import eCharts from '../js/echarts.min.js'
export default {
  name: 'contact',
  components: {
    'v-header': header,
    'depth-chart': depthChart,
  },
  callback: {},
  data() {
    return {
      activeName: "1",
      fullscreenLoading: false,
    }
  },
  created() {
    this.init();
  },
  computed: {

  },
  mounted: function() {
    new TradingView.widget({
      "container_id": "technical-analysis", //id属性为指定要包含widget的DOM元素id
      "width": 998, //widget的尺寸
      "height": 610,
      // "fullscreen":true,//布尔值显示图表是否占用窗口中所有可用的空间
      // "debug":true,//将此属性设置为true时，可使图表将详细的API日志写入控制台
      "symbol": "AAPL", //您的图表的初始商品
      "interval": "D", //您的图表的间隔
      "timezone": "exchange", //图表的初始时区。时间刻度上的数字取决于这个时区
      "theme": "Light", //图表背景颜色
      "style": "1", //图表样式
      "toolbar_bg": "#f1f3f6", //工具栏背景颜色
      "withdateranges": true,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "save_image": false,
      "studies": [
        "ROC@tv-basicstudies",
        "StochasticRSI@tv-basicstudies",
        "MASimple@tv-basicstudies"
      ],
      "show_popup_button": true,
      // "popup_width": "1000",
      // "popup_height": "650",
      "locale": "zh_CN", //图表库的本地化处理
      "overrides": {
        // "mainSeriesProperties.style": 0,
        "symbolWatermarkProperties.color": "#944",
        // "volumePaneSize": "tiny"
      },
    });
  },
  methods: {
    init() {},
    del(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.fullscreenLoading = true;
        this.$post('index/cancelOrder?poolId=' + id).then(res => {
          this.fullscreenLoading = false;
          this.$message({
            type: 'success',
            message: res.msg
          });
          this.init()
        }).catch(res => {
          this.fullscreenLoading = false;

        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
        this.fullscreenLoading = false;
      });
    },
  }
}
</script>
<style scoped>
  table tr td{
    text-align: center;
    vertical-align: middle;
  }
  .clearfix:after {
      content: "\0020";
      display: block;
      height: 0;
      clear: both;
  }
  .clearfix {
      zoom: 1;
  }
  /*.buyTab tr th{
    background: white;
  }
  .buyTab tr td{
    color:black;
  }*/
  .buyTab {
    width:100%;
    height:auto;
  }
  .buyTab li{
    display: block;
    display: flex;
    padding:5px;
    position: relative;
    background: rgba(0,0,0,0)
  }
  .buyTab li p{
    flex: 1;
  }
  .buyTab li .progress{
    position: absolute;
    width:100%;
    background: rgba(0,0,0,0.1);
    border-radius: 0;
    padding:12px;

  }
  .buyTab li .progress-bar {
    height:100%;
    position: absolute;
    top:0;
    right:0;
    background: rgba(236, 136, 136,0.6);
  }
  .buyTab li .progress-bar1 {
    height:100%;
    position: absolute;
    top:0;
    left:0;
    background: rgba(41, 204, 122,0.6);
  }
  .unlisted{
    padding:50px 20px;
    text-align: center;
  }
  .noData{
    text-align: center;
  }
  table tr th{
    background: #9A9A9A;
  }
  .el-collapse-item{
    margin-bottom:10px;
  }
  .el-collapse{
    border:none;
  }
  a{
    color:#f56c6c;
  }
  a:hover{
    color:white;
  }
  button:hover a{
    color:white;
  }
</style>

<template id="contact">
	<div class="content" style="padding-bottom:60px">
       	<ul>
           	<li class="show clearfix">
              	<div class="clearfix" style="height:auto">
                   
                	<v-header></v-header>
                    <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
                        <!-- <div>
                          <p class="toggle" @click="toggle()" style="background: #00AEB7;border-bottom:1px solid white;cursor: pointer;line-height: 30px;margin-bottom: 0px;padding:10px 20px;color:white;font-size: 14px"  ><i class="glyphicon glyphicon-chevron-down" style="margin-right: 10px"></i><span class="i18n" name="toggle1">CHART</span></p>
                    			<div class="tradingview-widget-container" style="width:100%" v-show="isShow">
                    			  <div id="technical-analysis"></div>
                    			  
                    			</div>
                      </div>
                      <div class="delegate">
                          <p class="delegate11 " @click="toggle1()" style="background: #00AEB7;border-bottom:1px solid white;cursor: pointer;line-height: 30px;margin-bottom: 0px;padding:10px 20px;color:white;font-size: 14px"><i class="glyphicon glyphicon-chevron-down" style="margin-right: 10px;text-align: left" ></i><span class="i18n" name="toggle2">TRANSAÇÕES PENDENTES（委托交易）</span></p>
                          <div class="delegate22" style="display: none;padding:20px 20px" v-show="isShow1">
                              <table class="table " style="font-size: 10px!important;">
                                  <thead>
                                  <tr>
                                      <th class="i18n" name="tradeID">ID da Transação</th>
                                      <th class="i18n" name="data">Data</th>
                                      <th class="i18n" name="type">Tipo de Operação</th>
                                      <th class="i18n" name="volume">Volume</th>
                                      <th class="i18n" name="price">Preço</th>
                                      <th class="i18n" name="operate">Operação</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  	<tr v-for="(item,index) in list2">
                                          <td>{{item.id}}</td>
                                          <td>{{item.date}}</td>
                                          <td class="i18n" name="buy">{{item.type ?'买入' :'卖出'}}</td>
                                          <td>{{item.number}}</td>
                                          <td>{{item.price}}</td>
                                          <td>
                                              <button type="button" class="btn btn-primary i18n" name="del">Cancelar（删除）</button>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                      <div class="bd-right">
                          <p class="record" @click="toggle2()" style="background: #00AEB7;border-bottom:1px solid white;cursor: pointer;line-height: 30px;margin-bottom: 0px;padding:10px 20px;color:white;font-size: 14px"><i class="glyphicon glyphicon-chevron-down" style="margin-right: 10px"></i><span class="i18n" name="toggle3">HISTÓRICO DE TRANSAÇÕES（历史交易）</span></p>
                          <div class="history" style="display: none;padding:0 20px" v-show="isShow2">
                              <table class="table " style="font-size: 10px!important;">
                                  <thead>
                                  <tr>
                                      <th class="i18n" name="tradeID">ID da Transação</th>
                                      <th class="i18n" name="data">Data</th>
                                      <th class="i18n" name="type">Tipo de Operação</th>
                                      <th class="i18n" name="volume">Volume</th>
                                      <th class="i18n" name="price">Preço</th>
                                      <th class="i18n" name="operate">Operação</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-for="(item,index) in list1">
                                          <td>{{item.id}}</td>
                                          <td>{{item.date}}</td>
                                          <td class="i18n" name="buy">{{item.type ?'买入' :'卖出'}}</td>
                                          <td>{{item.number}}</td>
                                          <td>{{item.price}}</td>
                                          <td>
                                              <button type="button" class="btn btn-primary i18n" name="del">Cancelar（删除）</button>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>

                      <div class="news">
                          <p class="news-tab11" @click="toggle3()" style="background: #00AEB7;border-bottom:1px solid white;cursor: pointer;line-height: 30px;margin-bottom: 0px;padding:10px 20px;color:white;font-size: 14px" ><i class="glyphicon glyphicon-chevron-down" style="margin-right: 10px;text-align: left" ></i><span class="i18n" name="toggle4">ORDER BOOK </span></p>
                          <div class="news-tab" style="display: none;padding:20px;background: #F4F4F4" v-show="isShow3">
                              <div class="tab" style="background-color:#F4F4F4">
                                  <table class="table">
                                      <thead>
                                          <tr>
                                              <th class="i18n" name="number">Quantidade</th>
                                              <th class="i18n" name="price">Preço</th>
                                              <th class="i18n" name="total">Total</th>
                                              <th class="i18n" name="total">Total</th>
                                              <th class="i18n" name="price">Preço</th>
                                              <th class="i18n" name="number">Quantidade</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="(item,index) in list">
                                              <td>{{item.aa}}</td>
                                              <td>{{item.bb}}</td>
                                              <td>{{item.cc}}</td>
                                              <td>{{item.dd}}</td>
                                              <td>{{item.ee}}</td>
                                              <td>{{item.ff}}</td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <ul style="position: absolute;top:0;z-index: -100">
                                      <li>
                                          <div class="progress">
                                                <span style="width: 13%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 15%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 18%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 23%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 26%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 34%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 17%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 19%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 24%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                      <li>
                                          <div class="progress">
                                                <span style="width: 30%;display: inline-block;"></span>
                                              </div>
                                      </li>
                                  </ul>
                                  <div class="legend"><span></span>&nbsp;<b class="i18n" name="legend1">Potencial de Compras</b>&nbsp;&nbsp;&nbsp;&nbsp;<span class="vendas"></span>&nbsp;<b class="i18n" name="legend2">Potencial de Vendas</b></div>
                              </div>
                              
                          </div>
                      </div>
 -->

                  <el-collapse accordion v-model="activeName">
                    <el-collapse-item name="1">
                      <template slot="title" >
                        {{$t('title["toggle1"]')}}
                      </template>
                      <div class="tradingview-widget-container" style="width:100%" >
                            <div id="technical-analysis"></div>
                      </div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                      <template slot="title" >
                        {{$t('title["toggle2"]')}}
                      </template>
                      <el-table :data="tableData" style="width: 100%">
                        <el-table-column :label="$t('table.tradeID')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.id }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.data')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.date }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.type')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.type }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.volume')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.number }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.price')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.price }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column :label="$t('table.operate')" width="180">
                          <template slot-scope="scope">
                            <el-button  size="mini" type="danger" icon="el-icon-delete">{{$t('button["del"]')}}</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                    </el-collapse-item>
                    <el-collapse-item name="3">
                      <template slot="title" >
                        {{$t('title["toggle3"]')}}
                      </template>
                      <el-table :data="tableData" style="width: 100%">
                        <el-table-column   :label="$t('table.tradeID')">
                          <template slot-scope="scope">
                            <span>{{ scope.row.id }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column   :label="$t('table.data')">
                          <template slot-scope="scope">
                            <span>{{ scope.row.date }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column   :label="$t('table.type')">
                          <template slot-scope="scope">
                            <span>{{ scope.row.type }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column   :label="$t('table.volume') ">
                          <template slot-scope="scope">
                            <span>{{ scope.row.number }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column   :label="$t('table.price')" >
                          <template slot-scope="scope">
                            <span>{{ scope.row.price }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  width="180" :label="$t('table.operate')">
                          <template slot-scope="scope">
                            <el-button  size="mini" type="danger" icon="el-icon-delete">{{$t('button["del"]')}}</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                    </el-collapse-item>
                    <el-collapse-item name="4">
                      <template slot="title" >
                        {{$t('title["toggle4"]')}}
                      </template>
                      <el-table :data="tableData1" style="width: 100%">
                        <el-table-column :label="$t('table.number')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.aa }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.price')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.bb }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.total')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.cc }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.total')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.dd }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.price')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.ee}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column  :label="$t('table.number')"  >
                          <template slot-scope="scope">
                            <span>{{ scope.row.ff }}</span>
                          </template>
                        </el-table-column>
                      </el-table>
                    </el-collapse-item>

                  </el-collapse>
                   	</div>
                </div>
           	</li>
       	</ul>
   </div>
</template>
<script type="text/javascript">
			  new TradingView.widget(
			  {
			  "container_id": "technical-analysis",
			  "width": 998,
			  "height": 610,
			  "symbol": "AAPL",
			  "interval": "D",
			  "timezone": "exchange",
			  "theme": "Light",
			  "style": "1",
			  "toolbar_bg": "#f1f3f6",
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
			  "popup_width": "1000",
			  "popup_height": "650",
			  "locale": "zh_CN"
			}
			  );
			  </script>
<script>
import header from '../components/Trade.vue'
import chart from '../js/tradingView.js'
import '../style/element.css'
export default {
  // '/contact': 'contact',
  name:'contact',
  components: {
    'v-header': header
  },
  data(){
  	return{
      activeName:"1",
  		isShow:true,
  		isShow1:false,
  		isShow2:false,
  		isShow3:false,
  		tableData1:[
  			{
  				aa:'0,0462736',
  				bb:'11,123',
  				cc:'0,0267617',
  				dd:'0,0462736',
  				ee:'0,0462736',
  				ff:'0,0462736'

  			},
  			{
  				aa:'0,0462736',
  				bb:'11,123',
  				cc:'0,0267617',
  				dd:'0,0462736',
  				ee:'0,0462736',
  				ff:'0,0462736'
  			},
  			{
  				aa:'0,0462736',
  				bb:'11,123',
  				cc:'0,0267617',
  				dd:'0,0462736',
  				ee:'0,0462736',
  				ff:'0,0462736'
  			}
  		],
  		tableData:[
  			{
  				id:'13912730',
				date:'20/01/26',
				type:0,
				number:'0,47/10（IOTA）',
				price:'0,00456 BTC'
  			},
  			{
  				id:'13912730',
				date:'20/01/26',
				type:1,
				number:'0,47/10（IOTA）',
				price:'0,00456 BTC'
  			},
  			{
  				id:'13912730',
				date:'20/01/26',
				type:1,
				number:'0,47/10（IOTA）',
				price:'0,00456 BTC'
  			}
  		],
  		list2:[
  			{
  				id:'13912730',
				date:'20/01/26',
				type:0,
				number:'0,47/10（IOTA）',
				price:'0,00456 BTC'
  			},
  			{
  				id:'13912730',
				date:'20/01/26',
				type:1,
				number:'0,47/10（IOTA）',
				price:'0,00456 BTC'
  			},
  			{
  				id:'13912730',
				date:'20/01/26',
				type:1,
				number:'0,47/10（IOTA）',
				price:'0,00456 BTC'
  			}
  		]
  	}
  },
  mounted() {
    this.drawLine();
  },
  methods:{
          toggle:function(){
            this.isShow = !this.isShow;
          },
          toggle1:function(){
            this.isShow1 = !this.isShow1;
          },
          toggle2:function(){
            this.isShow2 = !this.isShow2;
          },
          toggle3:function(){
            this.isShow3 = !this.isShow3;
          },
          drawLine(){
          	new TradingView.widget(
			  {
			  "container_id": "technical-analysis",
			  "width": 998,
			  "height": 610,
			  "symbol": "AAPL",
			  "interval": "D",
			  "timezone": "exchange",
			  "theme": "Light",
			  "style": "1",
			  "toolbar_bg": "#f1f3f6",
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
			  "popup_width": "1000",
			  "popup_height": "650",
			  "locale": "zh_CN"
			}
			  );
          }
        }
}

</script>

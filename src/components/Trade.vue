<template id="trade">
	<div  class="con-left " style="width:28%;padding:20px 10px" >
   <div class="con-left1">
     	<div  style="background: #F4F4F4;margin:0px;padding:15px 10px;" >
       	<div class="left1">
          <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">
              <ul class="data" :data="tab">
              <li>
                  <p>{{$store.state.tab_list.trade}}</p>
                  <div>
                    <img :src="$store.state.tab_list.url1" alt="" style="width:20px;height:20px;margin-top: 20px">
                  </div>
              </li>
              <li>
                  <div >
                    <i class="el-icon-sort" style="padding-left: 20px;transform:rotate(90deg);margin-top:20px"></i>

                  </div>
              </li>
              <li>
                  <p>{{$store.state.tab_list.market}}</p>
                  <div>
                    <img :src="$store.state.tab_list.url2" alt="" style="width:20px;height:20px;margin-top: 20px">
                  </div>
              </li>
            </ul>
            </div></el-col>
            <el-col :span="16" style="border-left:1px solid #ccc;padding:10px"><div class="grid-content bg-purple-light">
              <p style="border-bottom:1px solid #ccc">{{$store.state.tab_list.trade}} ({{$store.state.tab_list.newPrize}} {{$store.state.tab_list.market}})&nbsp;&nbsp;<i :class="increasePrize< 0 ? 'el-icon-caret-bottom':'el-icon-caret-top'" ></i> <span>{{$store.state.tab_list.increasePrize}}</span></p>
             <p class="i18n" name="v-t">Volume de Transaçoes(24h)<br>{{$store.state.tab_list.sumamount}}&nbsp;&nbsp;{{$store.state.tab_list.market}}</p>
            </div></el-col>
          </el-row>
       	</div>
 		  </div>
        <el-collapse  v-model="activeName">
            <el-collapse-item name="1">
              <template slot="title" >
                TICKERS
              </template>
              <div style="padding-top: 15px;">
                <el-input :placeholder="$t('placeholder.pleaseCon')"  class="input-with-select" style="margin-bottom: 20px">
                  <el-button slot="append" icon="el-icon-search" style="padding:14px 15px"></el-button>
                </el-input>
              </div>
              <el-tabs type="border-card"   id="tabs">
                <el-tab-pane   v-for="(item1,index) in header_list" :key="index" style="padding:0">
                    <span  slot="label"   @click="get_web_data(item1.basis_name,index)"  style="display: block;padding:0px 20px">
                      <img :src="item1.mark_url" alt="" style="width:20px;height:20px;vertical-align: middle;">
                      {{item1.basis_name}}
                    </span>
                    <table class="table" id="tickers">
                        <tr v-for="(item,index) in $store.state.tab_list" :key="index" v-model='select'   @click="getMarket(item.tradeMarket,item.zhuMarkUrl,item.ziMarkUrl,item.sumamount,item.newPrize,item.increasePrize)" >
                            <td>{{item.tradeMarket}}</td>
                            <td><img :src="item.ziMarkUrl" alt="" style="width:20px;height:20px"></td>
                            <td>{{item.newPrize}}</td>
                            <td :class="item.increasePrize < 0 ? 'undulating' : 'no-undulating'"><i :class="item.increasePrize< 0 ? 'el-icon-caret-bottom':'el-icon-caret-top'"></i><span>{{item.increasePrize}}</span></td>
                        </tr>
                    </table>
                </el-tab-pane>
              </el-tabs>
            </el-collapse-item>
            <el-collapse-item name="2" class="trade">
              <template slot="title" >
               {{$t('title["交易"]')}}
              </template>
              <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
                <el-form-item label="Email address">
                  <el-select v-model="form.address" :placeholder="$t('placeholder.pleaseSel')">
                    <el-option label="1" value="shanghai"></el-option>
                    <el-option label="2" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-form ref="form" :model="form1" :label-position="labelPosition" label-width="80px">
                      <p class="i18n" name="price">Preço</p>
                      <div>{{$t('table["vTotal"]')}}：<span class="remainder">{{$store.state.totalObj == 403 ? '--' : '$store.state.tab_list.zhuVtotal'}}</span>&nbsp;&nbsp;{{$store.state.tab_list.zhuMarket}}</div>
                      <div>{{$t('table["frozenTotal"]')}}：<span class="remainder">{{$store.state.totalObj == 403 ? '--' : '$store.state.tab_list.zhuFrozenTotal'}}</span>&nbsp;&nbsp;{{$store.state.tab_list.zhuMarket}}</div>
                      <el-form-item label="buy price:">
                        <el-input type="text"  ref="name" v-model="buyPrice" ></el-input>
                      </el-form-item>
                      <el-form-item label="Quantidade:">
                        <el-input type="text" v-model="buyNumber"></el-input>
                      </el-form-item>
                      <div style="height:80px;line-height:25px">*Max.de comprar：&nbsp;<span>{{$store.state.tab_list.name}}</span>{{$store.state.tab_list.zhuMarket}}</div>
                      <el-form-item>
                        <el-button type="primary" size="small" class="buyOrSell">{{$store.state.totalObj == 403 ?"请登录" : "Compar" }}</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="12" style="border-left: 1px solid #ccc">
                  <div class="grid-content bg-purple-light">
                    <el-form ref="form" :model="form" :label-position="labelPosition" label-width="80px">
                      <p class="i18n" name="price">Preço</p>
                      <div>{{$t('table["vTotal"]')}}：<span class="remainder">{{$store.state.tab_list.ziVtotal}}</span>&nbsp;&nbsp;{{$store.state.tab_list.ziMarket}}</div>
                      <div>{{$t('table["frozenTotal"]')}}：<span class="remainder">{{$store.state.tab_list.ziFrozenTotal}}</span>&nbsp;&nbsp;{{$store.state.tab_list.ziMarket}}</div>
                      <el-form-item label="sell price:">
                        <el-input type="text"></el-input>
                      </el-form-item>
                      <el-form-item label="Quantidade:">
                        <el-input type="text"></el-input>
                      </el-form-item>
                      <div style="height:80px;line-height:25px">*Max.de vendar：&nbsp;<span>0.000</span>{{$store.state.tab_list.zhuMarket}}</div>
                      <el-form-item>
                        <el-button type="primary" size="small" class="buyOrSell">{{$store.state.totalObj == 403 ?"请登录" : "Venda de" }}</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title" >
               {{$t('title["TRADES"]')}}
              </template>
              <div class="service-Content">
                <table class="table">
                    <thead>
                      <tr>
                        <th>Tempo</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                      </tr>
                    </thead>
                    <tr v-for="(item2,index) in tableData1" v-bind:key="index" >
                        <td>{{item2.createTime}}</td>
                        <td>{{item2.prize}}</td>
                        <td>{{item2.amount}}</td>
                    </tr>
                    <tr v-show="!tableData1.lenth">
                      <td colspan="3">{{$t('tag["noData"]')}}</td>
                    </tr>
                </table>
              </div>
            </el-collapse-item>
        </el-collapse> 
      </div> 
    </div>
    </div>
</template>

<script>
import '../style/deal.css'
import jquery from '../js/jquery-1.4.2.min.js'
import deal from '../js/deal.js'
import '../style/element.css'
export default {
  // '/trade': 'Trade'
  name: 'Trade',
  data() {
    return {
      buyPrice: '',
      buyNumber: '',
      trade: '',
      market: '',
      url1: '',
      url2: '',
      sumamount: '',
      newPrize: '',
      increasePrize: '',
      select: 'index',
      ziMarket: '',
      zhuMarket: '',
      zhuVtotal: '',
      ziVtotal: '',
      ziFrozenTotal: '',
      zhuFrozenTotal: '',
      header_list: [],
      basisName: '',
      symbol: '',
      tab_list: [],
      tab: {
        tradeMarket: ''
      },
      allData: [],
      loading: false,
      labelPosition: 'top',
      activeName: "1",
      form: {
        address: ''
      },
      tableData1: [],
      form1: {
        price: '',
        number: ''
      },
    }
  },
  computed: {
    name: function() {
      var aa = this.zhuVtotal / this.buyPrice;
      var bb = this.buyPrice * this.buyNumber;
      var cc = this.zhuVtotal / this.buyPrice * this.buyPrice;
      if (bb < this.zhuVtotal) {
        return bb
      } else {
        return cc
      }
    }
  },
  created() {
    this.init();
    // this.get_web_data();
    // this.getMarket()
  },
  methods: {
    get_web_data(basis_name){
      this.$store.state.basisName = basis_name;
      this.$sock.send('/app/findAllPrizeByBasisName', JSON.stringify({ //根据主市场查询子市场
            tradeMarket:basis_name,
      }));
    },
    init(index) {
      this.$get("marketManage/findAllBasisNameGroupBy").then(res => { //查询主市场
        this.header_list = res.data;
        if(!res.data.length){
          return
        }
        localStorage.setItem('basisName',res.data[0].basis_name);
        this.$store.state.basisName = res.data[0].basis_name;
        this.$store.state.header_list = res.data;
        this.$sock.send('/app/findAllPrizeByBasisName', JSON.stringify({ //根据主市场查询子市场
          tradeMarket:basis_name,
        }));
        this.$sock.send('/app/findUserIdAndVirtualIdByTotal', JSON.stringify({ //查询钱包实体
        tradeMarket: aa,
        id: sessionStorage.getItem("token")
      }));
      }).catch(res => {

      })

    },
    getMarket(aa, bb, cc, dd, ee, ff) {
      this.$store.state.obj.tradeMarket = aa;
      this.$store.state.obj.zhuMarkUrl = bb;
      this.$store.state.obj.ziMarkUrl = cc;
      this.$store.state.obj.sumamount = dd;
      this.$store.state.obj.newPrize = ee;
      this.$store.state.obj.increasePrize = ff;
      this.$sock.send('/app/newDealPrize', JSON.stringify({ //最新成交
        tradeMarket: localStorage.getItem('basisName'),
      }));
      this.$store.state.obj.tradeMarket = aa;
      this.$sock.send('/app/findUserIdAndVirtualIdByTotal', JSON.stringify({ //查询钱包实体
        tradeMarket: localStorage.getItem('basisName'),
        id: sessionStorage.getItem("token")
      }));
      this.$sock.send('/app/historyEntrust', JSON.stringify({ //历史委托
        tradeMarket: localStorage.getItem('basisName'),
        id: sessionStorage.getItem("token")
      }));
      this.$sock.send('/app/underway', JSON.stringify({ //委托交易
        tradeMarket: localStorage.getItem('basisName'),
        id: sessionStorage.getItem("token")
      }));
      this.$sock.send('/app/buyShwo', JSON.stringify({ //买单显示
        tradeMarket: localStorage.getItem('basisName'),
      }));
      this.$sock.send('/app/sellShwo', JSON.stringify({ //卖单显示
        tradeMarket: localStorage.getItem('basisName'),
      }));

    },
    show_item(item) {
      this.$store.commit('TOOGLE_EXPEDIC_ALIST');
    },
  },
}
</script>
<style scoped>
  .el-input{
    width: 100%!important;
  }
  .el-form p{
    padding: 10px;
    font-weight: bold;
  }
  .el-form div{
    color: #606266;
    line-height: 30px
  }
  .el-form-item{
    margin-bottom: 0px;
  }
  .max label{
    line-height: 25px!important;
    font-size: 12px!important;
  }
  .el-form .el-form--label-top .el-form-item__label{
    padding: 0;
  }
  table tr td{
    text-align: center;
  }
  .el-icon-caret-top{
    color:#00B359;
  }
  .el-icon-caret-bottom{
    color:#E02B2B;
  }
  i{
    margin-right:5px;
  }
  .undulating{
    color:#00B359;
  }
  .no-undulating{
    color:#E02B2B;
  }
  .el-icon-caret-top{
    color:#E02B2B;
  }
  .el-icon-caret-bottom{
    color:#00B359;
  }
  .el-collapse-item{
    margin-top:10px;
  }
  #tickers tr:first-child td{
    border-top:0;
  }
  .el-collapse{
    border:0;
  }
</style>

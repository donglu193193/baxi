<template id="currency">
    <div class="content" style="padding-bottom:60px" v-loading="loading">
    	<div class="clearfix" style="height:auto">
      	<v-header></v-header>
        <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
            <div class="tit">
                <h3>{{$t('title["new"]')}}</h3>
            </div>
            <el-collapse  v-model="activeName">
              <h4>{{$t('title["aa"]')}}</h4>
              <el-collapse-item name="1">
                <template slot="title" >
                  {{$t('title["toggle21"]')}}
                </template>
                <el-form ref="form"  >
                  <el-form-item :label="$t('input.bank')">
                    <el-select  :placeholder="$t('placeholder.selectBank')" v-model="form.bank">
                      <el-option label="1" value="shanghai"></el-option>
                      <el-option label="2" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item :label="$t('input.agent')">
                    <el-input ></el-input>
                  </el-form-item>
                  <el-form-item :label="$t('input.account')">
                    <el-input ></el-input>
                  </el-form-item>
                  <el-form-item :label="$t('input.value')">
                    <el-input ></el-input>
                  </el-form-item>
                  <el-form-item :label="$t('input.cost')"></el-form-item>
                  <el-form-item>
                    <el-button type="primary" icon="el-icon-check" size="small">{{$t('button["confirm"]')}}</el-button>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
              <h4>{{$t('title["tether"]')}}</h4>
              <el-collapse-item name="2">
                <template slot="title" >
                  {{$t('title["toggle31"]')}}
                </template>
                <el-form ref="form"  >
                  <el-form-item :label="$t('input.wallet')">
                    <el-input v-model="form.address" disabled></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" >{{$t('button["copy"]')}}</el-button>
                    <el-button type="primary" >{{$t('button["code"]')}}</el-button>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
              <h4>{{$t('title["toggle41"]')}}</h4>
              
            </el-collapse>
            <el-collapse   >
                <div style="margin-bottom:3px" v-for="(item,index) in list"  @click="getAddress(index,list)">
                  <el-collapse-item  :name="index"  > 
                    <template slot="title" >
                      {{item.shortName}}
                    </template>
                    <el-form ref="form1" >
                      <el-form-item :label="$t('input.wallet')">
                        <el-input  disabled v-model="form1.walletAddress"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" 
                        v-clipboard:copy="form1.walletAddress"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError">{{$t('button["copy"]')}}</el-button>
                        <el-button type="primary"  @click="address(list,index,form1)">{{$t('button["code"]')}}</el-button>
                      </el-form-item>
                    </el-form>
                  </el-collapse-item>
                </div>
            </el-collapse>
    	  </div>
        <el-dialog
          title="钱包地址"
          :visible.sync="details"
          width="30%"
          center >
            <h5 class="i18n" name="BTC-wallet">{{walletName}}</h5>
            <!-- <div class="code" id="qrcode"></div> -->
            <qriously :value="initQCode" :size="138" style="text-align: center;margin-top:20px"/>
            <p class="i18n" name="url">URL da Carteira</p>
            <p>{{qrcode}}</p>
            <span slot="footer" class="dialog-footer">
              <el-button type="warning" @click="details = false"><i class="el-icon-error"></i>{{$t('button["cancel"]')}}</el-button>
              <el-button type="success" @click="details = false"><i class="el-icon-success"></i>{{$t('button["sure"]')}}</el-button>
            </span>
      </el-dialog>
      </div>
      </div>
     
    
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script src="https://cdn.rawgit.com/zenorocha/clipboard.js/master/dist/clipboard.min.js"></script>
<script>
import header from '../components/Trade.vue'
import '../style/element.css'

export default {
  name: 'currency',
  components: {
    'v-header': header
  },
  data() {
    return {
      loading: false,
      walletName: '',
      activeName: '1',
      details: false,
      form: {
        bank: '',
      },
      form1: {
        walletAddress: ''
      },
      list: [],
      addressList: [],
      initQCode: '',
      qrcode: ''
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(index) {
      this.loading = true;
      this.$get("virtualCurrency/findAll").then(res => {
        this.loading = false;
        this.list = res.data;
      }).catch(res => {
        this.loading = false;
      });
    },
    getAddress(index) {
      this.$post("wallet/selWalletaddress", {
        shortName: this.list[index].shortName,
        id: sessionStorage.getItem("token")
      }).then(res => {
        this.form1.walletAddress = res.data;
      }).catch(res => {});
    },
    address(aa, index) {
      this.details = true;
      this.walletName = this.list[index].shortName;
      console.log(this.form1.walletAddress);
      this.initQCode = this.form1.walletAddress;
      this.qrcode = this.form1.walletAddress;
    },
    onCopy: function(e) {
      alert('复制成功！ ')
    },
    onError: function(e) {
      alert('复制失败')
    }
  }
}
</script>
<style scoped>
	html,body{
        background: #FFFFFF;
        padding: 20px;
    }
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    svg{
        font-size: 18px
    }
    #main>div{
        width: 100%!important;
    }
     th{
        text-align: center;
    }
    table{
        table-layout:fixed ; 
    }
    .tab .glyphicon{
        margin-right: 5px;
    }
    .tab .glyphicon-arrow-up{
        color: green;
    }
    .tab .glyphicon-arrow-down{
        color: red;
    }

    html::-webkit-scrollbar{
        width:6px;
        height:8px;
    }
    .tab{
        position: relative;
    }
    .tab table tr{
        background-color:rgba(27,38,45,.1)!important;
    }
    .tab ul{
        width: 100%;
        position: absolute;
        top: 0px;
    }
    .tab ul li{
        height: 38px;
    }
    .tab .progress{
        
       height: 38px;
       text-align: right;
       background: none;
    }
    .tab .progress span{
        background: green;
        height: 100%;
      
    }
    h4{
        background: #fff;
        padding: 15px 0;
        margin-bottom: 0;
        color: #9A9A9A;
    }
    .news{
        height: auto!important;
    }
    #btn{
        text-align: center!important;
    }
    #btn button{
        float: none!important;
    }
    input{
        text-align: center
    }
    .address{
        padding:10px;
        background: white;
        text-align: center;
        border-radius: 5px;
        color: #9A9A9A;
    }
    h5{
        text-align: center;
    }
    .mask{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0,0.5);
        z-index: 99;
        display: none;
    }
    .wallet{
        width: 50%;
        height: auto;
        border-radius: 10px;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
        padding: 30px 10px;
        display: none;
    }
    .close{
        position: absolute;
        right: -10px;
        top: -10px;
        width: 30px;
        height: 30px;
        padding: 5px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        opacity: 1;
    }
    .close svg{
        font-size: 20px
    }
    .wallet h3{
        text-align: center;
    }
    .wallet p{
        text-align: center;
    }
    #qrcode{
      padding:20px;
      display: flex;
      justify-content: center;
      align-items: center; 
    }
    .code img{
        position: absolute;
        left:50%;
        transform: translateX(-50%);
    }
    .el-form{
      padding: 20px 200px;
    }
    .el-collapse-item{
      margin-bottom:10px;
    }
    i{
      margin-right: 5px;
    }
</style>

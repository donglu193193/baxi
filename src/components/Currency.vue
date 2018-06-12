<template id="currency">
    <div class="content" style="padding-bottom:60px">
    	<div class="clearfix" style="height:auto">
      	<v-header></v-header>
        <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
            <div class="tit">
                <h3>{{$t('title["new"]')}}</h3>
            </div>
            <el-collapse accordion v-model="activeName">
              <h4>{{$t('title["aa"]')}}</h4>
              <el-collapse-item name="1">
                <template slot="title" >
                  {{$t('title["toggle21"]')}}
                </template>
                <el-form ref="form"  >
                  <el-form-item :label="$t('input.bank')">
                    <el-select  placeholder="请选择银行" v-model="form.bank">
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
              <el-collapse-item v-for="(item,index) in list" >
                <template slot="title" >
                  {{item.coin}}
                </template>
                <el-form ref="form"  >
                  <el-form-item :label="$t('input.wallet')">
                    <el-input v-model="form.address" disabled></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" >{{$t('button["copy"]')}}</el-button>
                    <el-button type="primary"  @click="details = true">{{$t('button["code"]')}}</el-button>
                  </el-form-item>
                </el-form>
              </el-collapse-item>

            </el-collapse>
    	  </div>
        <el-dialog
          title="钱包地址"
          :visible.sync="details"
          width="30%"
          center>
            <h3 class="i18n" name="BTC-wallet">CARTEIRA DE BITCOIN（比特币钱包）</h3>
            <div class="code">
                <img src="images/1519609898.png" alt="">
            </div>
            <p class="i18n" name="url">URL da Carteira</p>
            <p>gdywgwj23563472649hcjsddfnk</p>
          <span slot="footer" class="dialog-footer">
            <el-button @click="details = false">取 消</el-button>
            <el-button type="primary" @click="details = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      </div>
    
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import header from '../components/Trade.vue'
import '../style/element.css'
export default {
  name:'currency',
  components: {
    'v-header': header
  },
  data(){
  	return{
      activeName:'1',
      details:false,
      form:{
        bank:'',
        address:'gdhdge3742902194'
      },
  		list:[
  			{
  				coin:'ETHEREUM',
  				address:'gdhdge3742902194'
  			},
  			{
  				coin:'ETHEREUM CLASSIC',
  				address:'gdhdge3742902194'
  			},
  			{
  				coin:'DASH',
  				address:'gdhdge3742902194'
  			},
  			{
  				coin:'IOTA',
  				address:'gdhdge3742902194'
  			},
  			{
  				coin:'LITECOIN',
  				address:'gdhdge3742902194'
  			},
  			{
  				coin:'MONERO',
  				address:'gdhdge3742902194'
  			},
  		]
  	}
  },
  methods:{
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
    .tit h3{
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
    .wallet .code{
        text-align: center;
        padding: 20px;
    }
    .wallet img{
        width: 30%;
    }

</style>

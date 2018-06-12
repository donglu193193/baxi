<template id="account">
	<div class="content" style="padding-bottom:60px">
       	<ul>
           	<li class="show clearfix">
              	<div class="clearfix" style="height:auto">
                	<v-header></v-header>
                    <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
				        <div class="tit">
			                <h3>{{$t('title["tui"]')}}</h3>
			            </div>
			            <el-collapse accordion v-model="activeName">
			              <h4>{{$t('title["quit-bank"]')}}</h4>
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
			                    <el-input></el-input>
			                  </el-form-item>
			                  <el-form-item :label="$t('input.value')">
			                    <el-input></el-input>
			                  </el-form-item>
			                  <el-form-item>
			                    <el-button type="primary" icon="el-icon-check" size="small">{{$t('button["confirm"]')}}</el-button>
			                  </el-form-item>
			                </el-form>
			              </el-collapse-item>
			              <h4>CRIPTOMOEDAS</h4>
			              <el-collapse-item >
			                <template slot="title" >
			                  123
			                </template>
			                <el-form ref="form"  >
			                  <el-form-item :label="$t('input.wallet')">
			                    <el-input></el-input>
			                  </el-form-item>
			                  <el-form-item :label="$t('input.value')">
			                    <el-input></el-input>
			                  </el-form-item>
			                  <el-form-item>
			                    <el-button type="primary" icon="el-icon-check" size="small">{{$t('button["confirm"]')}}</el-button>
			                  </el-form-item>
			                </el-form>
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
export default {
	name:'account',
	components: {
    'v-header': header
 	},
 	data(){
 		return{
 			activeName:'1',
 			form:{
 				bank:''
 			},
 			list:[
 				{
  					coin:'ETHEREUM'
	  			},
	  			{
	  				coin:'ETHEREUM CLASSIC'
	  			},
	  			{
	  				coin:'DASH'
	  			},
	  			{
	  				coin:'IOTA'
	  			},
	  			{
	  				coin:'LITECOIN'
	  			},
	  			{
	  				coin:'MONERO'
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
</style>

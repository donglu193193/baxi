<template>
	<div class="content" style="padding-bottom:60px">
       	<ul>
           	<li class="show clearfix">
              	<div class="clearfix" style="height:auto">
                	<v-header></v-header>
                    <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
                        <!-- <h4 class="i18n" name="my-wallet">MINHA CARTEIRA（我的钱包）</h4>
                        <div class="toggle">
                            <p class="coin2" @click="toggle()"><i class="glyphicon glyphicon-chevron-down" ></i><span class="i18n" name="balance">BALANCE</span></p>
                            <div class="coin-2 clearfix" v-show="isShow">
                               <table class="table">
                                   <thead>
                                       <tr>
                                           <th></th>
                                           <th class="i18n" name="money">Moeda(币种)</th>
                                           <th class="i18n" name="Total">Total</th>
                                           <th class="i18n" name="freeze">冻结金额</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr v-for="(item,index) in list">
                                           <td>
                                                <img :src="item.url" alt="" style="width:30px;height:30px">
                                           </td>
                                           <td>{{item.coin}}</td>
                                           <td>{{item.total}}</td>
                                           <td>{{item.money}}</td>
                                       </tr>
                                   </tbody>
                               </table>     
                            </div>
                            </div> -->
                        <el-collapse accordion v-model="activeName">
                          <h4>{{$t('title["my-wallet"]')}}</h4>
                          <el-collapse-item name="1">
                            <template slot="title" >
                              {{$t('title["balance"]')}}
                            </template>
                            <el-table :data="tableData" style="width: 100%">
                              <el-table-column label=""  >
                                <template slot-scope="scope">
                                  <img :src="scope.row.url" alt="" style="width:30px;height:30px">
                                </template>
                              </el-table-column>
                              <el-table-column :label="$t('table.number')"  >
                                <template slot-scope="scope">
                                  <span>{{ scope.row.coin }}</span>
                                </template>
                              </el-table-column>
                              <el-table-column  :label="$t('table.price')" >
                                <template slot-scope="scope">
                                  <span>{{ scope.row.total }}</span>
                                </template>
                              </el-table-column>
                              <el-table-column  :label="$t('table.total')"  >
                                <template slot-scope="scope">
                                  <span>{{ scope.row.money}}</span>
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
<script>
import '../style/wallet.css'
import header from '../components/Trade.vue'
	export default{
		'wallet':'wallet',
		components: {
		    'v-header': header
		},
    data(){
      return{
        activeName:'1',
        isShow:true,
        tableData:[
          {
            url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
            coin:'MONERO(XMR)',
            total:'0,00000000',
            money:'0,00000000'
          },
          {
            url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
            coin:'MONERO(XMR)',
            total:'0,00000000',
            money:'0,00000000'
          },
          {
            url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
            coin:'MONERO(XMR)',
            total:'0,00000000',
            money:'0,00000000'
          },
          {
            url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
            coin:'MONERO(XMR)',
            total:'0,00000000',
            money:'0,00000000'
          },
          {
            url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
            coin:'MONERO(XMR)',
            total:'0,00000000',
            money:'0,00000000'
          },
          {
            url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
            coin:'MONERO(XMR)',
            total:'0,00000000',
            money:'0,00000000'
          },
        ]
      }
    },
    methods:{
      toggle:function(){
        this.isShow = ! this.isShow
      }
    }
	}
</script>

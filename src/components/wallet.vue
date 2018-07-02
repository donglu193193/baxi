<template>
	<div class="content" style="padding-bottom:60px" v-loading="loading">
       	<ul>
           	<li class="show clearfix">
              	<div class="clearfix" style="height:auto">
                	<v-header></v-header>
                    <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
                        <el-collapse accordion v-model="activeName">
                          <h4>{{$t('title["my-wallet"]')}}</h4>
                          <el-collapse-item name="1">
                            <template slot="title" >
                              {{$t('title["balance"]')}}
                            </template>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>{{$t('table["currency"]')}}</th>
                                  <th>{{$t('table["vTotal"]')}}</th>
                                  <th>{{$t('table["frozenTotal"]')}}</th>
                                </tr>
                              </thead>
                              <tr v-for="(item,index) in list" v-bind:key="index" >
                                  <td><img :src="item.mark_url" alt="" style="width:30px;height:30px"></td>
                                  <td>{{item.short_name}}</td>
                                  <td>{{item.v_total}}</td>
                                  <td>{{item.frozen_total}}</td>
                              </tr>
                          </table>
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
export default {
  'wallet': 'wallet',
  components: {
    'v-header': header
  },
  data() {
    return {
      loading: false,
      activeName: '1',
      list: [

      ],
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.loading = true;
      this.$get('virtualWallet/findUserIdByTotal').then(res => {
        this.loading = false;
        this.list = res.data;
      }).catch(res => {
        this.loading = false;
      })
    },
  }
}
</script>
<style scoped>
  table td{
    text-align: center;
  }
</style>

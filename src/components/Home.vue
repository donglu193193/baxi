<template id="contact">
    <div id="home">
    	<!-- 新增 展示区 -->
        <div class="trading-show">
            <h3>{{$t('table["Carousel1"]')}}</h3>
            <p>{{$t('table["Carousel2"]')}}</p> 
            <div class="join">
                <div class="set_8_button2 outline" href="#" tabindex="2">{{$t('table["Carousel3"]')}}
                    <span class="lines"></span>
                </div>
            </div> 
            <div>{{$t('table["Carousel4"]')}}</div>
            <div class="data">
                <el-row>
                  <el-col :span="8">
                      <p>{{$t('table["data1"]')}}</p>
                      <h3>R$ 3.213,321</h3>
                  </el-col>
                  <el-col :span="8">
                      <p>{{$t('table["data2"]')}}</p>
                      <h3>R$ 3.213,321</h3>
                  </el-col>
                  <el-col :span="8">
                      <p>{{$t('table["data3"]')}}</p>
                      <h3>R$ 3.213,321</h3>
                  </el-col>
                </el-row>
            </div>
            <img :src="require('@/images/separado3.png')" alt="" class="bg1">
            <img :src="require('@/images/separado3.png')" alt="" class="bg2">
            <img :src="require('@/images/separado3.png')" alt="" class="bg3">
            <img :src="require('@/images/separado3.png')" alt="" class="bg4">
            <img :src="require('@/images/separado3.png')" alt="" class="bg5">
            <img :src="require('@/images/separado3.png')" alt="" class="bg6">
            <img :src="require('@/images/separado3.png')" alt="" class="bg7">

        </div>
 <!-- 新增 展示区 -->
        <div class="tabs" id="tab-list">
                <h3>{{$t('table["list"]')}}</h3>
                <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-sm-6" v-for="(item,index) in $store.state.home_arr">
                                    <div class="serviceBox">
                                        <div class="service-icon">
                                            <img :src="item.mark_url" alt="" style="width:30px;height:30px;vertical-align: middle">
                                            <span>{{item.short_name}}</span>
                                        </div>
                                        <div class="service-Content">
                                            <table class="table">
                                                <tr v-for="(i,v) in item.children" v-bind:key="Math.random()">
                                                    <td>{{i.sum}}</td>
                                                    <td>{{i.tradeMarket}}</td>
                                                    <td :class="i.riseOrFall < 0 ? 'green':'red'">{{i.riseOrFall}}<i :class="i.riseOrFall < 0 ? 'iconfont icon-down2':'iconfont icon-up2'"></i></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div><!--End tabs-->
        <div id="footer">
          <h3>{{$t('footer["footer1"]')}}</h3>
          <p>{{$t('footer["footer2"]')}}</p>
          <ul>
              <li><a href="#">{{$t('footer["footer3"]')}}</a></li>
              <li><a href="#">{{$t('footer["footer4"]')}}</a></li>
              <li><a href="#">{{$t('footer["footer5"]')}}</a></li>
              <li><a href="#">{{$t('footer["footer6"]')}}</a></li>
              <li><a href="#">{{$t('footer["footer7"]')}}</a></li>
          </ul>
          <div class="bottom1">
              <p><span>{{$t('footer["footer8"]')}}</span>&copy; <span>{{$t('footer["footer9"]')}}</span><br><span>{{$t('footer["footer10"]')}}</span></p>
          </div>
          <img :src="require('@/images/separado3.png')" alt="" class="b1">
          <img :src="require('@/images/separado4.png')" alt="" class="b2">
          <img :src="require('@/images/separado3.png')" alt="" class="b3">
          <img :src="require('@/images/separado4.png')" alt="" class="b4">
          <img :src="require('@/images/separado3.png')" alt="" class="b5">
          <img :src="require('@/images/separado4.png')" alt="" class="b6">
          <img :src="require('@/images/separado3.png')" alt="" class="b7">
      </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<script src="../icons/iconfont.js"></script>
<script>
export default {
  // '/Home': 'home'
  name: 'home',
  data() {
    return {
      list: [],
      shortName: ''
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {

    },
  }
}
</script>
<style scoped>
  .green{
    color:#00B359;
  }
  .red{
    color:#E02B2B;
  }
  .icon-up2{
    color:#E02B2B;
    float:right;
  }
  .icon-down2{
    color:#00B359;
    float:right;
  }
</style>

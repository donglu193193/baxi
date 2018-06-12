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
                                <div class="col-md-4 col-sm-6" v-for="(item,index) in list">
                                    <div class="serviceBox">
                                        <div class="service-icon">
                                            <img :src="item.img" alt="" style="width:30px;height:30px">
                                            <span>{{item.currency}}</span>
                                        </div>
                                        <div class="service-Content">
                                            <table class="table">
                                                <tr v-for="(item,index) in list1">
                                                    <td>{{item.price}}</td>
                                                    <td>{{item.coin}}</td>
                                                    <td><i class="glyphicon glyphicon-arrow-up"></i>{{item.pro}}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-6">
                                    <div class="serviceBox">
                                        <div class="service-icon">
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-ETHjiaoyi"></use>
                                            </svg>
                                            <span>ETH</span>
                                        </div>
                                        <div class="service-Content">
                                            <table class="table">
                                                <tr>
                                                    <td>0.002780</td>
                                                    <td>BTC</td>
                                                    <td><i class="glyphicon glyphicon-arrow-up"></i>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>$11.435,60</td>
                                                    <td>USD</td>
                                                    <td><i class="glyphicon glyphicon-arrow-up"></i>0.3%</td>
                                                </tr>
                                                <tr>
                                                    <td>R$100,71</td>
                                                    <td>BRZ</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>5%</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-6">
                                    <div class="serviceBox">
                                        <div class="service-icon">
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-ETHjiaoyi"></use>
                                            </svg>
                                            <span>ETH</span>
                                        </div>
                                        <div class="service-Content">
                                            <table class="table">
                                                <tr>
                                                    <td>0.002780</td>
                                                    <td>BTC</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>$11.435,60</td>
                                                    <td>USD</td>
                                                    <td><i class="glyphicon glyphicon-arrow-up"></i>0.3%</td>
                                                </tr>
                                                <tr>
                                                    <td>R$100,71</td>
                                                    <td>BRZ</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>5%</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="serviceBox">
                                        <div class="service-icon">
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-ltclogo"></use>
                                            </svg>
                                            <span>LTC</span>
                                        </div>
                                        <div class="service-Content">
                                            <!-- <h3 class="title">LTC</h3> -->
                                            <table class="table">
                                                <tr>
                                                    <td>0.002780</td>
                                                    <td>BTC</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>$11.435,60</td>
                                                    <td>USD</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>0.3%</td>
                                                </tr>
                                                <tr>
                                                    <td>R$100,71</td>
                                                    <td>BRZ</td>
                                                    <td><i class="glyphicon glyphicon-arrow-up"></i>5%</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="serviceBox">
                                        <div class="service-icon">
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-dash"></use>
                                            </svg>
                                            <span>DASH</span>
                                        </div>
                                        <div class="service-Content">
                                            <!-- <h3 class="title">Dash</h3> -->
                                            <table class="table">
                                                <tr>
                                                    <td>0.002780</td>
                                                    <td>BTC</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>$11.435,60</td>
                                                    <td>USD</td>
                                                    <td><i class="glyphicon glyphicon-arrow-up"></i>0.3%</td>
                                                </tr>
                                                <tr>
                                                    <td>R$100,71</td>
                                                    <td>BRZ</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>5%</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="serviceBox">
                                        <div class="service-icon">
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-jinrong11"></use>
                                            </svg>
                                            <span>TOTA</span>
                                        </div>
                                        <div class="service-Content">
                                            <!-- <h3 class="title">Iota</h3> -->
                                            <table class="table">
                                            	<tr>
                                                    <td>$11.435,60</td>
                                                    <td>USD</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>0.3%</td>
                                                </tr>
                                                <tr>
                                                    <td>$11.435,60</td>
                                                    <td>USD</td>
                                                    <td><i class="glyphicon glyphicon-arrow-down"></i>0.3%</td>
                                                </tr>
                                                <tr>
                                                    <td>R$100,71</td>
                                                    <td>BRZ</td>
                                                    <td><i class="glyphicon glyphicon-arrow-up"></i>5%</td>
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
  name:'home',
  data(){
  	return{
  		list:[
  			{
	  			img:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
	  			currency:'BTC'
	  			
	  		}

  		],
  		list1:[
			{
				price:'0.002780',
	  			coin:'LTC',
	  			pro:'0.2%'
			},
			{
				price:'0.002780',
	  			coin:'LTC',
	  			pro:'0.2%'
			},
			{
				price:'0.002780',
	  			coin:'LTC',
	  			pro:'0.2%'
			}
	  	]
  	}
  }

}
</script>

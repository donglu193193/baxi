<template id="trade">
	<div  class="con-left " style="width:28%;padding:20px">
   <div class="con-left1" >
     	<div class="row" style="background: #F4F4F4;margin:0px;padding:15px 10px;" >
       	<div class="left1">
         	<div class="col-md-4">
           	<ul class="data">
             	<li>
               		<p>IOTA</p>
               		<div>
                 		<i class="glyphicon glyphicon-bitcoin" style="padding-left: 20px;line-height: 70px"></i>
               		</div>
             	</li>
             	<li>
               		<div>
                 		<i class="glyphicon glyphicon-sort" style="padding-left: 20px;line-height: 70px;transform:rotate(90deg);"></i>
               		</div>
             	</li>
             	<li>
               		<p>BTC</p>
               		<div>
                 		<i class="glyphicon glyphicon-bitcoin" style="padding-left: 20px;line-height: 70px"></i>
               		</div>
             	</li>
           	</ul>
         	</div>
         	<div class="col-md-8" id="converter">
             <h3>IOTA (0 , 002424 BTC)<i class="glyphicon glyphicon-triangle-top" style="line-height: 0px"></i> <span>17.03%</span></h3>
             <p class="i18n" name="v-t">Volume de Transaçoes(24h)<br>1200,5371673&nbsp;&nbsp;BTC</p>
         	</div>
       	</div>
 		  </div>
<!--    		<div style="width:100%;text-align: left" class="tickers">
        <div style="margin:10px 0px;background:  #F4F4F4" class="left2">
           	<p class="toggle11" style="background: #00AEB7;border-bottom:1px solid white;cursor: pointer;line-height: 30px;margin-bottom: 0px;padding:10px 20px;color:white;font-size: 14px"><i class="glyphicon glyphicon-chevron-down" style="margin-right: 10px"></i><span class="i18n" name="toggle11">TICKERS</span></p>
           	<div class="balance">
             	<div class="search">
              		<div class="form-group has-success has-feedback">
                  		<input type="text" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status">
                  		<span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
                  		<span id="inputSuccess2Status" class="sr-only">(success)</span>
              		</div>
              		<ul>
                		<li class="color">USD</li>
                		<li>BRL</li>
                		<li>BTC</li>
              		</ul>
             	</div>
             	<div class="coin-list">
               		<table class="table">
                		<tbody>
                      <tr v-for="(item,index) in list">
                          <td><img :src="item.url" alt="" style="width:30px;height:30px"></td>
                          <td>{{item.market}}</td>
                          <td>{{item.coin}}</td>
                          <td><i class="glyphicon glyphicon-triangle-top" style="line-height: 0px"></i> <span>{{item.pre}}</span></td>
                      </tr>
                		</tbody>
            		</table>
             	</div>
           	</div>
        </div>
        <div style="margin:10px 0px;background:  #F4F4F4" class="left4">
            <p class="toggle22" style="background: #00AEB7;border-bottom:1px solid white;cursor: pointer;line-height: 30px;margin-bottom: 0px;padding:10px 20px;color:white;font-size: 14px"><i class="glyphicon glyphicon-chevron-down" style="margin-right: 10px"></i><span class="i18n" name="toggle12">TRANSACTION</span><span style="float: right">IOTA&nbsp;|&nbsp;BTC</span></p>
            <div class="trading" style="background:#F4F4F4;padding:20px">
                <div class="form-group">
                    <label for="exampleInputEmail1" class="i18n" name="address">Email address</label>
                    <select name="" id="exampleInputEmail1" class="form-control">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                </div>    
                <div style="width:100%;background:#F4F4F4;" class="clearfix">
                	<div class="buy " style="background: #F4F4F4">
                    	<p class="i18n" name="price">Preço</p>
                    	<div class="buy-con">
                        	<div><span class="i18n" name="number">Quantidade</span></div>
                        	<input type="text" placeholder=""/>
                        	<input type="text" placeholder="Buy price" class="number"/>
                        	<P >*<span class="i18n" name="max-buy">Max.de comprar </span>:&nbsp;0.0000&nbsp;IOTA</P>
                        	<button type="button" class="btn btn-success i18n" name="buy">Comprar</button>
                    	</div>
                	</div>
                	<div class="sell" style="background: #F4F4F4">
                    	<p class="i18n" name="price">Preço</p>
                    	<div class="sell-con">
                        	<div><span class="i18n" name="number">Quantidade</span></div>
                        	<input type="text" />
                        	<input type="text" placeholder="Selling quantity"/>
                        	<p >* <span class="i18n" name="max-sell">Max.de vendar</span>:&nbsp;0.0000&nbsp;IOTA</p>
                        	<button type="button" class="btn btn-danger i18n" name="sell">Vendar</button>
                    	</div>
                	</div>
                </div>
            </div>
        </div>
        <div style="margin:10px 0px;background:  #F4F4F4;height:auto" class="left6">
            <p class="toggle44" style="background: #00AEB7;border-bottom:1px solid white;cursor: pointer;line-height: 30px;margin-bottom: 0px;padding:10px 20px;color:white;font-size: 14px"><i class="glyphicon glyphicon-chevron-down" style="margin-right: 10px"></i> <span class="i18n" name="toggle14">TRADES(交易) </span></p>
            <div id="trades">
              	<table class="table">
                	<thead>
                  		<tr>
                    		<th class="i18n" name="time">Tempo</th>
                        <th class="i18n" name="price">Preço</th>
                        <th class="i18n" name="number">Quantidade</th>
                  		</tr>
                	</thead>
                	<tbody>
                    	<tr v-for="(item,index) in list1">
                      	<td><i class="glyphicon glyphicon-triangle-top"></i>{{item.time}}</td>
                      	<td>{{item.price}}</td>
                      	<td>{{item.number}}</td>
                    	</tr>
                	</tbody>
              	</table>
            </div>
        </div> -->
        <el-collapse accordion v-model="activeName">
            <h4 class="i18n" name="my-wallet">TICKERS</h4>
            <el-collapse-item name="1">
              <template slot="title" >
                BALANCE
              </template>
              <div style="margin-top: 15px;">
                <el-input placeholder="请输入内容"  class="input-with-select" style="margin-bottom: 20px">
                  <el-button slot="append" icon="el-icon-search" style="padding:14px 15px"></el-button>
                </el-input>
              </div>
              <el-tabs type="border-card">
                <el-tab-pane label="USD">
                    <el-table :data="tableData" style="width: 100%" :show-header="false" >
                      <el-table-column>
                        <template slot-scope="scope">
                          <span>{{ scope.row.market }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template slot-scope="scope">
                          <span>{{ scope.row.coin }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column >
                        <template slot-scope="scope">
                          <i class="glyphicon glyphicon-triangle-top" style="line-height: 0px"></i>
                          <span>{{ scope.row.pre}}</span>
                        </template>
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="BRL">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column>
                        <template slot-scope="scope">
                          <span>{{ scope.row.market }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template slot-scope="scope">
                          <span>{{ scope.row.coin }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column >
                        <template slot-scope="scope">
                          <i class="glyphicon glyphicon-triangle-top" style="line-height: 0px"></i>
                          <span>{{ scope.row.pre}}</span>
                        </template>
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="BTC">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column>
                        <template slot-scope="scope">
                          <span>{{ scope.row.market }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template slot-scope="scope">
                          <span>{{ scope.row.coin }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column >
                        <template slot-scope="scope">
                          <i class="glyphicon glyphicon-triangle-top" style="line-height: 0px"></i>
                          <span>{{ scope.row.pre}}</span>
                        </template>
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
              </el-tabs>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title" >
               TRANSACTION
              </template>
              <el-form ref="form" :model="form">
                <el-form-item label="Email address">
                  <el-select v-model="form.address" placeholder="请选择">
                    <el-option label="1" value="shanghai"></el-option>
                    <el-option label="2" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-form ref="form" :model="form">
                      <p class="i18n" name="price">Preço</p>
                      <el-form-item label="price">
                        <el-input type="text"></el-input>
                      </el-form-item>
                      <el-form-item label="Quantidade">
                        <el-input type="text"></el-input>
                      </el-form-item>
                      <el-form-item label="*Max.de vendar IOTA"></el-form-item>
                      <el-form-item>
                        <el-button type="primary">Vendar</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="12" style="border-left: 1px solid #ccc">
                  <div class="grid-content bg-purple-light">
                    <el-form ref="form" :model="form">
                      <p class="i18n" name="price">Preço</p>
                      <el-form-item label="price">
                        <el-input type="text"></el-input>
                      </el-form-item>
                      <el-form-item label="Quantidade">
                        <el-input type="text"></el-input>
                      </el-form-item>
                      <el-form-item label="*Max.de vendar IOTA"></el-form-item>
                      <el-form-item>
                        <el-button type="primary">Vendar</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title" >
               TRADES(交易)
              </template>
              <el-table :data="tableData1" style="width: 100%">
                <el-table-column label="Tempo">
                  <template slot-scope="scope">
                    <span>{{ scope.row.time }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Preço">
                  <template slot-scope="scope">
                    <span>{{ scope.row.price }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="Quantidade">
                  <template slot-scope="scope">
                    <i class="glyphicon glyphicon-triangle-top" style="line-height: 0px"></i>
                    <span>{{ scope.row.number}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
        </el-collapse> 
      </div> 
    </div>
    </div>
</template>

<script>
import '../style/deal.css'
import jquery from'../js/jquery-1.4.2.min.js'
import deal from '../js/deal.js'
import '../style/element.css'
export default {
  // '/trade': 'Trade'
  name:'Trade',
  data(){
    return{
      activeName:"1",
      form:{
        address:''
      },
      tableData:[
        {
          url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
          market:'BTC_LTC',
          coin:'0,7878909 BTC',
          pre:'0.5%',
        },
        {
          url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
          market:'BTC_LTC',
          coin:'0,7878909 BTC',
          pre:'0.5%',
        },
        {
          url:'http://pic32.photophoto.cn/20140714/0022005850120116_b.jpg',
          market:'BTC_LTC',
          coin:'0,7878909 BTC',
          pre:'0.5%',
        }
      ],
      tableData1:[
        {
          time:'12:23:00',
          price:'11,235',
          number:'0,08988'
        },
        {
          time:'12:23:00',
          price:'11,235',
          number:'0,08988'
        },
        {
          time:'12:23:00',
          price:'11,235',
          number:'0,08988'
        },
        {
          time:'12:23:00',
          price:'11,235',
          number:'0,08988'
        }
      ]
    }
  }
}
</script>

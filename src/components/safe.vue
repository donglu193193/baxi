<template id="currency">
    <div class="content" style="padding-bottom:60px">
       	<ul>
           	<li class="show clearfix">
              	<div class="clearfix" style="height:auto">
                	<v-header></v-header>
                    <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
                       <div class="account">
                          <h4 >{{$t('title["my-account"]')}}</h4>
                          <div class="con">
                              <div class="row">
                                  <div class="col-xs-3 pic">
                                      <img src="../images/bg.jpg" alt="">
                                  </div>
                                  <div class="col-xs-4">
                                      <span>{{$t('title["user"]')}}</span>:<br>nasg678
                                  </div>
                                  <div class="col-xs-5">
                                      <span>{{$t('title["mail"]')}}</span>:<br>ashahj@163.com
                                  </div>
                              </div>
                              <div class="test">
                                  <div><i class="glyphicon glyphicon-warning-sign"></i></div>
                                  <p>{{$t('title["warn"]')}}</p>
                                  <div><el-button class="i18n" type="primary" name="test" size="small">{{$t('button["Verificar"]')}}</el-button></div>
                              </div>
                          </div>
                      </div>  
                      <div class="safe">
                          <h4 class="i18n" name="safe">{{$t('title["safe"]')}}</h4>
                          <el-row>
                            <el-col :span="24"><div class="grid-content bg-purple-dark"><span></span>{{$t('title["renzheng"]')}}</div></el-col>
                            <el-col :span="24"><div class="grid-content bg-purple-dark"><span></span>{{$t('title["pw"]')}}</div></el-col>
                            <el-col :span="24"><div class="grid-content bg-purple-dark"><span></span>{{$t('title["well"]')}}</div></el-col>
                          </el-row>
                          <el-collapse v-model="activeNames" >
                            <el-collapse-item title="初级认证" name="1">
                              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                                <el-form-item label="真实姓名">
                                  <el-input v-model="form.realName"></el-input>
                                </el-form-item>
                                <el-form-item label="身份证号">
                                  <el-input v-model="form.idCardNo"></el-input>
                                </el-form-item>
                                <el-form-item >
                                  <el-button @click="submit(form)">提交</el-button>
                                </el-form-item>
                              </el-form>
                            </el-collapse-item>
                            <el-collapse-item title="高级认证" name="2">
                              <el-form :label-position="labelPosition" label-width="80px" :model="form1">
                                <el-form-item label="身份证正面url(照片)">
                                  <el-input v-model="form1.certificatePath1"></el-input>
                                </el-form-item>
                                <el-form-item label="身份证反面url(国徽)">
                                  <el-input v-model="form1.certificatePath2"></el-input>
                                </el-form-item>
                                <el-form-item label="手持身份证照片url">
                                  <el-input v-model="form1.certificatePath3"></el-input>
                                </el-form-item>
                                <el-form-item >
                                  <el-button @click="submit1(form1)">提交</el-button>
                                </el-form-item>
                              </el-form>
                            </el-collapse-item>
                            <el-collapse-item title="手机号码认证" name="3">
                              <div>简化流程：设计简洁直观的操作流程；</div>
                              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                            </el-collapse-item>
                            <el-collapse-item title="修改密码" name="4">
                              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>  
					          </div>
				        </div>
           	</li>
       	</ul>
   	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import "../style/safe.css"
import header from '../components/Trade.vue'
export default {
  name:'safe',
  components: {
    'v-header': header
  },
  data(){
  	return{
  		 activeNames: ['1'],
       labelPosition: 'top',
       form:{
          realName:'',
          idCardNo:''
       },
       form1:{
          certificatePath1:'',
          certificatePath2:'',
          certificatePath3:''
       }
  	}
  },
  methods:{
    submit(){
      this.$put("userInfo/PrimaryCertification",{
        realName:this.form.realName,
        idCardNo:this.form.idCardNo
      }).then(res=>{
        this.$message({
          type: 'success',
          message: res.msg
        });
      })
    },
    submit1(){
      this.$post("userInfo/AdvancedCertification",{
        file1:this.form.certificatePath1,
        file2:this.form.certificatePath2,
        file3:this.form.certificatePath3,
      }).then(res=>{
        this.$message({
          type: 'success',
          message: res.msg
        });
      })
    },
  }
}
</script>
<style scoped>
	
</style>

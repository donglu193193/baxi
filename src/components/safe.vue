<template id="currency">
    <div class="content" style="padding-bottom:60px" v-loading="loading">
       	<ul>
           	<li class="show clearfix">
              	<div class="clearfix" style="height:auto">
                	<v-header></v-header>
                    <div style="width: 70%;height:auto;float:right;padding:20px" id="right">
                       <div class="account">
                          <h4 >{{$t('title["my-account"]')}}</h4>
                          <div class="con" >

                              <el-row :gutter="20" >
                                <el-col :span="6"><div class="grid-content bg-purple">
                                  <img src="../images/bg.jpg" alt="" >

                                </div></el-col>
                                <el-col :span="6"><div class="grid-content bg-purple" >
                                  <div>{{$t('title["user"]')}}:</div>
                                  <div>{{item.nickName}}</div>
                                </div></el-col>
                                <el-col :span="6"><div class="grid-content bg-purple">
                                  <div>{{$t('title["mail"]')}}:</div>
                                  <div>{{item.email}}</div>
                                </div></el-col>
                                <el-col :span="6"><div class="grid-content bg-purple">
                                  <div class="test">
                                  <div><i class="glyphicon glyphicon-warning-sign"></i></div>
                                  <p>{{$t('title["warn"]')}}</p>
                                  <div><el-button class="i18n" type="primary" name="test" size="small">{{$t('button["Verificar"]')}}</el-button></div>
                              </div>
                                </div></el-col>
                              </el-row>
                          </div>
                      </div>  
                      <div class="safe">
                          <h4 class="i18n" name="safe">{{$t('title["safe"]')}}</h4>
                          <el-row>
                            <el-col :span="24">
                              <div class="grid-content bg-purple-dark">
                                <el-row class="tit-prompt">
                                  <el-col :span="8"><div class="grid-content bg-purple"><span></span>{{$t('title["renzheng"]')}}</div></el-col>
                                  <el-col :span="8"><div class="grid-content bg-purple-light">123</div></el-col>
                                  <el-col :span="8"><div class="grid-content bg-purple">33</div></el-col>
                                </el-row>
                              </div>
                            </el-col>
                            <el-col :span="24">
                              <div class="grid-content bg-purple-dark">
                                <el-row class="tit-prompt">
                                  <el-col :span="8"><div class="grid-content bg-purple"><span></span>{{$t('title["pw"]')}}</div></el-col>
                                  <el-col :span="8"><div class="grid-content bg-purple-light">123</div></el-col>
                                  <el-col :span="8"><div class="grid-content bg-purple">33</div></el-col>
                                </el-row>
                              </div>
                            </el-col>
                            <el-col :span="24">
                              <div class="grid-content bg-purple-dark">
                                <el-row class="tit-prompt">
                                  <el-col :span="8"><div class="grid-content bg-purple"><span></span>{{$t('title["well"]')}}</div></el-col>
                                  <el-col :span="8"><div class="grid-content bg-purple-light">123</div></el-col>
                                  <el-col :span="8"><div class="grid-content bg-purple">33</div></el-col>
                                </el-row>
                              </div>
                            </el-col>
                            <el-col :span="24">
                              <div class="grid-content bg-purple-dark">
                                <el-row class="tit-prompt">
                                  <el-col :span="8"><div class="grid-content bg-purple"><span></span>{{$t('title["初级认证"]')}}</div></el-col>
                                  <el-col :span="8">
                                    <div class="grid-content bg-purple-light">
                                      <div class="auditing" v-if='check1()'>{{$t('tag["已认证"]')}}</div>
                                      <div class="no-auditing" v-if='!check1()'>{{$t('tag["未认证"]')}}</div>
                                    </div>
                                </el-col>
                                  <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                      <div @click="ident()" class="check">{{ check1() ? $t('tag["查看"]') : $t('tag["认证"]')}}</div>
                                    </div>
                                  </el-col>
                                </el-row>
                              </div>
                            </el-col>
                            <el-col :span="24">
                              <div class="grid-content bg-purple-dark">
                                <el-row class="tit-prompt">
                                  <el-col :span="8"><div class="grid-content bg-purple"><span></span>{{$t('title["高级认证"]')}}</div></el-col>
                                  <el-col :span="8">
                                    <div class="grid-content bg-purple-light">
                                      <div class="auditing" v-if='check2()'>{{$t('tag["已认证"]')}}</div>
                                      <div class="no-auditing" v-if='!check2()'>{{$t('tag["未认证"]')}}</div>
                                    </div>
                                  </el-col>
                                  <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                      <div @click="senior" class="check2">{{ check2() ? $t('tag["查看"]') : $t('tag["认证"]')}}</div>
                                    </div>
                                  </el-col>
                                </el-row>
                              </div>
                            </el-col>
                            <el-col :span="24">
                              <div class="grid-content bg-purple-dark">
                                <el-row class="tit-prompt">
                                  <el-col :span="8"><div class="grid-content bg-purple"><span></span>{{$t('title["手机认证"]')}}</div></el-col>
                                  <el-col :span="8">
                                    <div class="grid-content bg-purple-light">
                                      <div class="auditing" v-if='check3()'>{{$t('tag["已认证"]')}}</div>
                                      <div class="no-auditing" v-if='!check3()'>{{$t('tag["未认证"]')}}</div>
                                    </div>
                                  </el-col>
                                  <el-col :span="8">
                                    <div class="grid-content bg-purple">
                                      <div @click="phone" class="check1">{{ check3() ? $t('tag["查看"]') : $t('tag["认证"]')}}</div>
                                    </div>
                                  </el-col>
                                </el-row>
                              </div>
                            </el-col>
                            <el-col :span="24">
                              <div class="grid-content bg-purple-dark">
                                <el-row class="tit-prompt">
                                  <el-col :span="8"><div class="grid-content bg-purple"><span></span>{{$t('title["修改密码"]')}}</div></el-col>
                                  <el-col :span="16">
                                    <div class="grid-content bg-purple">
                                      <div @click="pw">{{$t('tag["修改"]')}}</div>
                                    </div>
                                  </el-col>
                                </el-row>
                              </div>
                            </el-col>
                          </el-row>
                      </div>  
					          </div>
				        </div>
           	</li>
       	</ul>
        <!-- 初级认证 Start-->
        <el-dialog :title="$t('title.JuniorCertified')" :visible.sync="ident_dialog"  center @close='form={}'>
          <el-form :label-position="labelPosition1" label-width="200px" :model="form">
            <label for=""></label>
            <el-form-item :label="$t('label.realName')">
              <el-input v-model="form.realName" :disabled='check1()'></el-input>
            </el-form-item>
            <el-form-item :label="$t('label.idCardNo')">
              <el-input v-model="form.idCardNo" :disabled='check1()'></el-input>
            </el-form-item>
            <div style="text-align: center" v-if='!check1()'>
              <el-button type="success" @click.stop.prevent="submit(form)"><i class="el-icon-success"></i>{{$t('button["submit"]')}}</el-button>
            </div>
          </el-form>
        </el-dialog>
        <!-- 初级认证 End -->
        <!-- 高级认证 Start -->
        <el-dialog :title="$t('title.senior')" :visible.sync="seniorIdent_dialog"  center>
          <el-form :label-position="labelPosition1" label-width="200px"  enctype="multipart/form-data" name="fileinfo">
            <el-form-item :label="$t('label.front')">
              <div class="upload-imgList" v-show='certificatePath1'>
                <i class="el-icon-close" @click='delimg1' v-if='!check2()'></i>
                <img :src="certificatePath1" alt="" style="width:100px;height:100px">
              </div>
              <el-upload ref='upload1' v-show='!certificatePath1' :action="config+'userInfo/AdvancedCertification'" :data='data' :auto-upload='false' list-type="picture-card" :limit='1' :on-success='successload' :on-error='errorload' :on-change='pushImg1' name='file1'>
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item :label="$t('label.verso')">
              <div class="upload-imgList" v-show='certificatePath2'>
                <i class="el-icon-close" @click='delimg2' v-if='!check2()'></i>
                <img :src="certificatePath2" alt="" style="width:100px;height:100px">
              </div>
              <el-upload ref='upload2' v-show='!certificatePath2' :action="config+'userInfo/AdvancedCertification'" :data='data' :auto-upload='false' list-type="picture-card" :limit='1' :on-success='successload' :on-error='errorload' :on-change='pushImg2' name='file2'>
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item :label="$t('label.certificatePath3')">
              <div class="upload-imgList" v-show='certificatePath3'>
                <i class="el-icon-close" @click='delimg3' v-if='!check2()'></i>
                <img :src="certificatePath3" alt="" style="width:100px;height:100px">
              </div>
              <el-upload ref='upload3' v-show='!certificatePath3' :action="config+'userInfo/AdvancedCertification'" :data='data' :auto-upload='false' list-type="picture-card" :limit='1' :on-success='successload' :on-error='errorload' :on-change='pushImg3' name='file3'>
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <p v-if='!check2()' style="color:red">{{$t('tag["audit"]')}}</p>
            <div style="text-align: center" v-if='check2()'>
              <el-button @click.stop.prevent="submit1(certificatePath1,certificatePath2,certificatePath3)"><i class="el-icon-success"></i>{{$t('button["submit"]')}}</el-button>
            </div>
          </el-form>
        </el-dialog>
        <!-- 高级认证 End -->
        <!-- 手机认证 Start -->
        <el-dialog :title="$t('title.mobile')" :visible.sync="phone_dialog"  center>
          <el-form :label-position="labelPosition1" label-width="150px" :model="form2">
            <el-form-item :label="$t('label.AreaCode')">
              <el-input v-model="form2.areaCode" :disabled='check3()'></el-input>
            </el-form-item>
            <el-form-item :label="$t('label.phone')">
              <el-input v-model="form2.phone" style="width:50%;float:left" :disabled='check3()' @blue="checkPhone"></el-input>
              <el-button @click="send(form2.phone)" type="primary" size="mini" style="width:40%;float:right" v-if='!check3()'>{{$t('button["sendCode"]')}}</el-button>
            </el-form-item>
            <el-form-item :label="$t('label.phoneCode')" v-if='!check3()'>
              <el-input v-model="form2.phoneCode"   ></el-input>
            </el-form-item>
            <div style="text-align: center" v-if='!check3()'>
              <el-button @click.stop.prevent="rePhone(form2)" type="success"><i class="el-icon-success"></i>{{$t('button["submit"]')}}</el-button>
            </div>
          </el-form>
        </el-dialog>
        <!-- 手机认证 End -->
        <!-- 修改密码 Start -->
        <el-dialog :title="$t('title.modifyPW')" :visible.sync="pw_dialog"  center>
          <el-form :label-position="labelPosition1" label-width="150px" :model="form3" :rules="rules" ref="form">
            <el-form-item :label="$t('label.oldPassword')">
              <el-input v-model="form3.oldPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item :label="$t('label.newPassword')" prop="password">
              <el-input v-model="form3.newPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item :label="$t('label.rePassword')" prop="re_password">
              <el-input  v-model="form3.re_password" type='password'></el-input>
            </el-form-item>
            <div style="text-align: center">
              <el-button @click.stop.prevent="rePassword(form3)" type="success"><i class="el-icon-success"></i>{{$t('button["submit"]')}}</el-button>
            </div>
          </el-form>
        </el-dialog>
        <!-- 修改密码 End -->
   	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import "../style/safe.css"
import config from '@/config'
import header from '../components/Trade.vue'
import axios from 'axios'
export default {
  name: 'safe',
  components: {
    'v-header': header
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form3.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      phone_dialog: false,
      phone_dialog1: false,
      ident_dialog: false,
      ident_dialog1: false,
      seniorIdent_dialog: false,
      seniorIdent_dialog1: false,
      pw_dialog: false,
      certificatePath1: '',
      certificatePath2: '',
      certificatePath3: '',
      config: config,
      activeNames: ['1'],
      labelPosition: 'top',
      labelPosition1: 'left',
      list: [],
      form: {},
      form2: {},
      form3: {
        oldPassword: '',
        newPassword: '',
        re_password: ''
      },
      imageUrl: '',
      data: {

      },
      aa: null,
      bb: null,
      cc: null,
      item: {
        nickName: '',
        email: '',
        auditing: ''
      },
      rules: {
        password: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        re_password: [{
          validator: validatePass2,
          trigger: 'blur'
        }]
      },
    }
  },
  created() {
    this.init()
  },
  methods: {
    init(item, aa) {
      this.loading = true;
      this.$get('userInfo/findById').then(res => {
        this.loading = false;
        this.$store.state.user.aa = res.data.nickName;
        this.$store.state.user.bb = res.data.email;
        this.item.nickName = this.$store.state.user.aa;
        this.item.email = this.$store.state.user.bb;
        this.form.realName = res.data.realName;
        this.form.idCardNo = res.data.idCardNo;
        this.$store.state.userData = res.data;
      }).catch(res => {
        this.loading = false;
      })
    },
    ident() {
      this.ident_dialog = true;
      this.form.realName = this.$store.state.userData.realName;
      this.form.idCardNo = this.$store.state.userData.idCardNo;
    },
    senior() {
          this.seniorIdent_dialog = true;
          this.certificatePath1 = this.$store.state.userData.certificatePath1;
          this.certificatePath2 = this.$store.state.userData.certificatePath2;
          this.certificatePath3 = this.$store.state.userData.certificatePath3
    },
    phone() {
          this.phone_dialog = true;
          this.form2.areaCode = this.$store.state.userData.areaCode;
          this.form2.phone = this.$store.state.userData.phone;
    },
    pw() {
      this.pw_dialog = true
    },
    successload(res) {
      this.$message({
        message: res.data,
        type: 'success'
      });

      this.init();
    },
    errorload(res) {
      this.$message({
        message: res.data,
        type: 'error'
      });
    },
    delimg1() {
      this.certificatePath1 = '';
      this.$refs.upload1.clearFiles();
    },
    delimg2() {
      this.certificatePath2 = '';
      this.$refs.upload2.clearFiles();
    },
    delimg3() {
      this.certificatePath3 = '';
      this.$refs.upload3.clearFiles();
    },
    pushImg1(item, list) {
      this.aa = item.raw;
    },
    pushImg2(item, list) {
      this.bb = item.raw;
    },
    pushImg3(item, list) {
      this.cc = item.raw;
    },
    handleAvatarSuccess(res, file) {
      this.form.certificatePath1 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    check1() {
        var hasRealValidate = this.$store.state.userData.hasRealValidate;
        if (hasRealValidate == "1") {
          return true
        } else {
          return false
        }
      },
    check2() {
      var user = this.$store.state.userData;
      if(user.isValid == "1"){
        return true
      }else if(user.certificatePath1 == "" || user.certificatePath2 == "" || user.certificatePath3 == ""){
        return false
      }else if (user.certificatePath1 && user.certificatePath2 && user.certificatePath3 && user.isValid == "2" && user.descText !=="") {
        return false
      } else if(user.certificatePath1 && user.certificatePath2 && user.certificatePath3 && user.isValid == "2" && user.descText ==""){
        return true
      }
    },
    check3() {
      var phone = this.$store.state.userData.phone;
      if (phone == "") {
        return false
      } else {
        return true
      }
    },
    submit() {
      this.$put("userInfo/PrimaryCertification", {  //初级认证提交
        realName: this.form.realName,
        idCardNo: this.form.idCardNo
      }).then(res => {
        this.ident_dialog = false;
        this.$message({
          type: 'success',
          message: res.msg
        });
      })
    },
    submit1() {
      var formData = new FormData();
      formData.append("file2", this.bb);
      formData.append("file1", this.aa);
      formData.append("file3", this.cc);
      var request = new XMLHttpRequest();
      request.open("POST", "/userInfo/AdvancedCertification", true);
      request.setRequestHeader('Authorization', 'Bearer ' + this.$store.getters.token)
      request.send(formData);
      this.seniorIdent_dialog = false;

    },
    rePhone() {
      this.$put("userInfo/phoneCertification", {
        areaCode: this.form2.areaCode,
        phone: this.form2.phone,
        code: this.form2.phoneCode
      }).then(res => {
        this.phone_dialog = false;
        this.$message({
          type: 'success',
          message: res.msg
        });
      })
    },
    send() {
      this.$post("verificationCode/phone", {
        areaCode: this.form2.areaCode,
        phone: this.form2.phone
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.msg
        });
      })
    },
    checkPhone() {
      this.$get("userInfo/testPhone").then(res => {
        this.$message({
          type: 'success',
          message: res.msg
        });
      })
    },
    rePassword() {
      this.$put("userInfo/updatePassword", {
        oldPassword: this.form3.oldPassword,
        newPassword: this.form3.newPassword
      }).then(res => {
        if (res.type) {
          this.form3.oldPassword = '',
            this.form3.newPassword = ''
        }
        this.$message({
          type: 'success',
          message: res.msg
        });
      })
    }

  },
}
</script>
<style scoped>
	.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .upload_warp_img_div_del {
      position: absolute;
      top: 6px;
      width: 16px;
      right: 4px;
    }

    .upload_warp_img_div_top {
      position: absolute;
      top: 0;
      width: 100%;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.4);
      line-height: 30px;
      text-align: left;
      color: #fff;
      font-size: 12px;
      text-indent: 4px;
    }

    .upload_warp_img_div_text {
      white-space: nowrap;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .upload_warp_img_div img {
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }

    .upload_warp_img_div {
      position: relative;
      height: 100px;
      width: 120px;
      border: 1px solid #ccc;
      margin: 0px 30px 10px 0px;
      float: left;
      line-height: 100px;
      display: table-cell;
      text-align: center;
      background-color: #eee;
      cursor: pointer;
    }

    .upload_warp_img {
      border-top: 1px solid #D2D2D2;
      padding: 14px 0 0 14px;
      overflow: hidden
    }

    .upload_warp_text {
      text-align: left;
      margin-bottom: 10px;
      padding-top: 10px;
      text-indent: 14px;
      border-top: 1px solid #ccc;
      font-size: 14px;
    }

    .upload_warp_right {
      float: left;
      width: 57%;
      margin-left: 2%;
      height: 100%;
      border: 1px dashed #999;
      border-radius: 4px;
      line-height: 130px;
      color: #999;
    }

    .upload_warp_left img {
      margin-top: 32px;
    }

    .upload_warp_left {
      float: left;
      width: 40%;
      height: 100%;
      border: 1px dashed #999;
      border-radius: 4px;
      cursor: pointer;
    }

    .upload_warp {
      margin: 14px;
      height: 130px;
    }

    .upload {
      border: 1px solid #ccc;
      background-color: #fff;
      width: 650px;
      box-shadow: 0px 1px 0px #ccc;
      border-radius: 4px;
    }

    .hello {
      width: 650px;
      margin-left: 34%;
      text-align: center;
    }
    .el-form{
      padding: 20px 200px;
    }
    .el-dialog .el-form{
      padding:20px;
    }
    .con .el-col-6{
      padding: 20px;
      vertical-align: middle;
      height: 100%;
    }
    .con .el-col-6:first-child{
      text-align: center;
    }
    .con .el-col-6:first-child img{
      width: 50%;
      height: 50%;
      border-radius: 50%;
    }
    .el-dialog  .el-form-item__label{
        width:80px!important;
        float: left;
    }
    i{
      margin-right: 5px;
    }
    .auditing{
      color:#44de58;
    }
    .no-auditing{
      color:#ef4553;
    }
</style>

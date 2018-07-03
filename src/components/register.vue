<template>
	<div class='forget-password' v-loading='full_loading'>
		<h3>{{$t('title["account-re"]')}}</h3>
	    <p>{{$t('title["fill"]')}}</p>
		<div class="forget-form">
			<el-form :model="form" :rules="rules" ref="form">
			<el-form-item label="用户" prop="user">
				<el-input v-model="form.user" ></el-input>
			  </el-form-item>
			  <el-form-item label="邮箱" prop="username">
				<el-input v-model="form.username" ></el-input>
			  </el-form-item>
			  <el-form-item label="动态验证码" prop="code">
			 	 	<div style="display:flex;width:100%">
			 	 		
						<el-input v-model='form.code' maxlength='6' ></el-input>
						<button :class='!isSend ? "erp-btn" : "erp-btn info"' @click='get_validate' style="height:40px;line-height: 10px;width:40%">{{email_message}}</button>
                	</div>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
				<el-input  v-model="form.password" type='password'></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="re_password">
				<el-input  v-model="form.re_password" type='password'></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" @click="submit('form')">提交</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import myIdentity from '@/components/identity'
	import md5 from 'js-md5'
	import "../style/register.css"
	export default {
		name: 'register',
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
				} else if (value !== this.form.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var validate = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'));
				} else {
					this.$get("userInfo/testNickNameOrEmail", {
						nickName: this.form.user,
						email: this.form.username,
					}).then(res => {
						callback();
					}).catch(res => {
						callback(new Error(res.msg));
					})
				}
			}
			var validate1 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入邮箱'));
				} else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
					callback(new Error('邮箱格式错误'));
				} else {
					this.$get("userInfo/testNickNameOrEmail", {
						nickName: this.form.user,
						email: this.form.username,
					}).then(res => {
						callback();
					}).catch(res => {
						callback(new Error(res.msg));
					})
				}

			}

			return {
				form: {
					user: '',
					username: '',
					password: '',
					re_password: '',
					code: ''
				},
				isSend: false,
				rules: {
					user: [{
						trigger: 'blur',
						validator: validate
					}],
					username: [{
						trigger: 'blur',
						validator: validate1
					}],
					code: [],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					re_password: [{
						validator: validatePass2,
						trigger: 'change'
					}]
				},
				email_message: '发送验证码',
				full_loading: false


			}
		},
		created() {

		},
		methods: {
			validatePhone(value) {
				if (this.phone_regular.test(value)) {
					return true
				} else {
					return false
				}
			},
			validateEmail(value) {
				if (this.email_regular.test(value)) {
					return true
				} else {
					return false
				}
			},
			get_validate() {
				if (this.isSend) {
					this.$message({
						message: '您已发送验证码，请稍后再发',
						type: 'error'
					})
					return
				}
				this.$get("userInfo/testNickNameOrEmail", {
					nickName: this.form.user,
					email: this.form.username,
				}).then(res => {
					this.$post('verificationCode/mail', {
						mail: this.form.username,
					}).then(res => {
						clearInterval(this.timer);
						this.full_loading = false;
						this.$message({
							message: res.mes,
							type: 'success'
						});
						this.isSend = true;
						var a = 0;
						this.timer = setInterval(res => {
							a++;
							this.email_message = (60 - a) + '后再次发送';
							if (a == 60) {
								this.email_message = 'email_message';
								this.isSend = false;
								clearInterval(this.timer);
							}
						}, 1000)
					})
				}).catch(res => {
					this.full_loading = false;
				})
				this.full_loading = true;
			},
			submit() {
				if(this.form.user == '' || this.form.username == '' || this.form.password == '' || this.form.re_password == ''){
					this.$message({
						type: 'error',
						message: "字段不能为空"
					});
				}
				this.$post("userInfo/registerUser", {
					nickName: this.form.user,
					email: this.form.username,
					loginPassword: this.form.password,
					code: this.form.code,
				}).then(res => {
					this.$message({
						type: 'success',
						message: res.msg
					});
					this.$router.push({
						path: '/login'
					})
				}).catch(res => {

				})
			}
		}
	}
</script>
<style scoped>
	form{
		width: 50%;
	    position: absolute;
	    left: 50%;
	    transform: translate(-50%,0);
	}
	.form-group label{
		display: block;
	}
</style>
<template>
	<div class='forget-password' v-loading='full_loading'>
		<h3>{{$t('title["account-login"]')}}</h3>
	    <p>{{$t('title["fill"]')}}</p>
		<div class="forget-form" style="width:50%;transform: translateX(50%);">
			<el-form :model="form" :rules="rules" ref="form">
			  <el-form-item label="用户" prop="username">
				<el-input v-model="form.username" ></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
				<el-input  v-model="form.password" type='password'></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" @click="login('form')">提交</el-button>
			  </el-form-item>
			</el-form>
		</div>
		<p ><span>{{$t('title["have"]')}}</span>?<router-link to="/register" >{{$t('title["re"]')}}</router-link><router-link to="/retrievePw" >&nbsp;&nbsp;找回密码</router-link></p>
	</div>
</template>
<script>
	import myIdentity from '@/components/identity'
	import md5 from 'js-md5'
	export default {
		'/login': 'login',
		data() {
			var validate = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			return {
				full_loading: false,
				form: {
					username: '',
					password: ''
				},
				rules: {
					username: [{
						trigger: 'blur',
						validator: validate
					}],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
				},

			}
		},
		created() {

		},
		methods: {
			login() {
				this.$post("login", {
					username: this.form.username,
					password: this.form.password,
				}).then(res => {
					this.$store.commit('SET_TOKEN', res.data, {});
					this.$get("userInfo/findById").then(response => {
						this.form.username = '',
							this.form.password = '',
							this.$router.push({
								path: '/Contact'
							})
						this.$store.commit('SET_TOKEN', res.data, response.data);
						this.$message({
							type: 'success',
							message: res.msg
						});
					})
				})
			}
		}
	}
</script>

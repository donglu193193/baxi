<template id="register">
	<div class="container" style="top:-40px">
	    <h3>{{$t('title["account-re"]')}}</h3>
	    <p>{{$t('title["fill"]')}}</p>
	    <div class="form">
	        <form :model="form">
	            <div class="form-group">
	                <label for="exampleInputPassword1">{{$t('input["user"]')}}</label>
	                <input type="text" class="form-control" v-model="form.nickName" @blur="nick()">
	            </div>
	            <div class="form-group">
	                <label for="exampleInputPassword1">{{$t('input["mail"]')}}</label>
	                <input type="text" class="form-control" v-model="form.email" style="width:50%;display:inline-block;">
	                <button type="submit" class="btn btn-default" @click="sendMail(form.email)">发送邮箱验证码</button>
	            </div>
	            <div class="form-group">
	                <label for="exampleInputPassword1">输入验证码</label>
	                <input type="text" class="form-control" @blur="test(form)" v-model="form.mailCode">
	            </div>
	            <div class="form-group">
	                <label for="exampleInputPassword1">{{$t('input["password"]')}}</label>
	                <input type="text" class="form-control" v-model="form.loginPassword">
	            </div>
	            <div class="submit">
	                <button type="submit" class="btn btn-default" @click="submit(form)">{{$t('button["register"]')}}</button>
	            </div>
	            <p ><span name="have-account">{{$t('title["have-account"]')}}</span>?<router-link to="/login">{{$t('title["lg"]')}}</router-link></p>
	        </form>
	    </div>
	</div>
</template>
<script>
	import "../style/register.css"
	export default{
		name:'register',
		data(){
			return{
				form:{
					nickName:'',
					email:'',
					loginPassword:'',
					mailCode:''

				},


			}
		},
		created(){

		},
		methods:{
			nick(){
				this.$get("userInfo/testNickNameOrEmail",{
					nickName:this.form.nickName,
					email:this.form.email,
				}).then(res=>{
					// console.log(res)
					this.$message({
		            	type: 'success',
		            	message: res.msg
		          	});
				}).catch(res => {
				
				})
			},
			test(){
				this.$post("verificationCode/getMail",{
					mail:this.form.email,
					mailCode:this.form.mailCode
				}).then(res=>{
					this.$message({
		            	type: 'success',
		            	message: res.msg
		          	});
				})
			},
			sendMail(){
				this.$post("verificationCode/mail",{
					mail:this.form.email
				}).then(res=>{
					// console.log(res)
					this.$message({
		            	type: 'success',
		            	message: res.msg
		          	});
				})
			},
			submit(){
				this.$post("userInfo/registerUser",{
					nickName:this.form.nickName,
					email:this.form.email,
					loginPassword:this.form.loginPassword
				}).then(res=>{
					// console.log(res)
					this.$message({
		            	type: 'success',
		            	message: res.msg
		          	});
				}).catch(res => {
				
				})
			}
		}
	}
</script>
<style scoped></style>
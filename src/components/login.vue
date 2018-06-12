<template>
	<div>
		<div class="container" style="top:40px">
	    <h3>{{$t('title["account-login"]')}}</h3>
	    <p>{{$t('title["fill"]')}}</p>
	    <div class="form">
	        <form id="login" :model="form">
	            <div class="form-group">
	                <label for="exampleInputPassword1">{{$t('input["user"]')}}</label>
	                <input type="text" class="form-control" v-model="form.username">
	            </div>
	            <div class="form-group">
	                <label for="exampleInputPassword1">{{$t('input["password"]')}}</label>
	                <input type="text" class="form-control" v-model="form.password">
	            </div>
	            <div class="submit">
	                <button type="btn" class="btn btn-default" @click="login(form)">{{$t('button["visit"]')}}</button>
	            </div>
	            <p ><span>{{$t('title["have"]')}}</span>?<router-link to="/register" >{{$t('title["re"]')}}</router-link><router-link to="/retrievePw" >找回密码</router-link></p>
	        </form>
	    </div>
	</div>
	</div>
</template>
<script>
	import "../style/login.css"
	export default{
		'/login':'login',
		data(){
			return{
				form:{
					username:'',
					password:''

				}

			}
		},
		created(){

		},
		methods:{
			login(){
				this.$post("login",{
					username:this.form.username,
					password:this.form.password,
				}).then(res=>{
					if(res.type){
						this.form.username='',
						this.form.password='',
						this.$router.push({ path: 'contact' }) 
					}
					this.$store.commit('SET_TOKEN',res.data);
					this.$message({
		            	type: 'success',
		            	message: res.msg
		          	});
				})
			}
		}
	}
</script>

<template id="retrievePw" >
	<div  v-loading.fullscreen="fullscreenLoading">
		<div class="container" style="top:40px">
	    <h3>找回密码</h3>
	    <div class="form">
	        <form id="login" :model="form">
	            <div class="form-group">
	                <label for="email">邮箱</label>
	                <input type="text" class="form-control" v-model="form.email">
	            </div>
	            <div class="form-group">
	                <label for="password">新密码</label>
	                <input type="text" class="form-control" v-model="form.password">
	            </div>
	            <div class="submit">
	                <button type="btn" class="btn btn-default" @click="submit(form)">找回密码</button>
	            </div>
	        </form>
	    </div>
	</div>
	</div>
</template>
<script>
	import "../style/login.css"
	export default{
		'/retrievePw':'retrievePw',
		data(){
			return{
				fullscreenLoading:false,
				form:{
					email:'',
					password:''

				}

			}
		},
		created(){

		},
		methods:{
			submit(){
				this.fullscreenLoading=true,
				this.$put("userInfo/RetrievePassword",{
					email:this.form.email,
					loginPassword:this.form.password,
				}).then(res=>{
					
					this.$message({
		            	type: 'success',
		            	message: res.msg
		          	});
		          	if(res.type){
						this.form.username='',
						this.form.password='',
						this.$router.push({ path: 'login' }) 
					}
					
		          	this.fullscreenLoading=false
				})

			}
		}
	}
</script>

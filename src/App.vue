<template>
  <div id="app">
        <div id="header" class="clearfix">
          <div class="header-left">
              <div class="logo">
                  <img :src="require('@/images/triangulo2.png')" alt="">
              </div>
              <span><router-link to="/home">{{$t('table["exchange"]')}}</router-link>&nbsp;&nbsp;&nbsp;|</span>
              <b>{{$t('table["business"]')}}</b>
          </div>
          <div class="header-right">
              <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#28353F"
              text-color="#fff"
              active-text-color="#ffd04b" style="border:none">
              <el-menu-item index="1"><router-link to="/contact" >{{$t('table["title1"]')}}</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="/currency" >{{$t('table["title2"]')}}</router-link></el-menu-item>
              <el-menu-item index="3"><router-link to="/account" >{{$t('table["title3"]')}}</router-link></el-menu-item>
              <el-menu-item index="4"><router-link to="/wallet" >{{$t('table["title4"]')}}</router-link></el-menu-item>
              <el-submenu index="5">
                <template slot="title">Bem Vindo</template>
                <el-menu-item index="5-1"><router-link to="/safe" >{{$t('table["title5-1"]')}}</router-link></el-menu-item>
                <el-menu-item index="5-2"><router-link to="/safe" >{{$t('table["title5-2"]')}}</router-link></el-menu-item>
                <el-menu-item index="5-3"><router-link to="/login" >{{$t('table["title6"]')}}</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item index="6" @click="changeLanguage">切换语言</el-menu-item>
             <!--  <el-menu-item index="7"><router-link to="/login">{{$t('table["title6"]')}}</router-link></el-menu-item> -->
            </el-menu>
          </div>
    </div>
    <div class="con">
        <div class="col-xs-12">
          <!-- <div class="panel"> -->
            <div class="panel-body">
              <!--用于渲染匹配的组件-->
              <router-view></router-view>
            </div>
          <!-- </div> -->
        </div>
    </div>

  </div>
  
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      isShow:false,
      activeIndex2: ""
    }
  },
  methods:{
    toggle:function(){
      this.isShow = !this.isShow
    },
    changeLanguage:function(){
      this.$confirm('确定切换语言吗?', '提示', {
       confirmButtonText: '确定',
       cancelButtonText: '取消',
       type: 'warning'
    }).then(() => {
       if ( this.lang === 'cn' ) {
          this.lang = 'pt';
          this.$i18n.locale = this.lang;//关键语句
       }else {
          this.lang = 'cn';
          this.$i18n.locale = this.lang;//关键语句
       }
    }).catch(() => {
       this.$message({
           type: 'info',
       });          
    });
      
    }

    }

}
</script>

<style scoped>
  .el-menu{
    background: #28353F;
  }
  .con{
    margin-top: 60px;
  }


</style>

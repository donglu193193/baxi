<template>
  <div id="app" v-loading="loading">
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
              <el-menu-item index="2" v-show="this.$store.state.token"><router-link to="/currency" >{{$t('table["title2"]')}}</router-link></el-menu-item>
              <el-menu-item index="3" v-show="this.$store.state.token"><router-link to="/account" >{{$t('table["title3"]')}}</router-link></el-menu-item>
              <el-menu-item index="4" v-show="this.$store.state.token"><router-link to="/wallet" >{{$t('table["title4"]')}}</router-link></el-menu-item>
              <el-submenu index="5" v-show="this.$store.state.token">
                <template slot="title">{{item.nickName}}</template>
                  <el-menu-item index="5-1"><router-link to="/safe" >{{$t('table["title5-1"]')}}</router-link></el-menu-item>
                <el-menu-item index="5-2"><router-link to="/safe" >{{$t('table["title5-2"]')}}</router-link></el-menu-item>
                <el-menu-item index="5-3" @click="logout"><router-link to="/login" >{{$t('table["title6"]')}}</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item index="4" v-show="!this.$store.state.token"><router-link to="/login" >登录</router-link></el-menu-item>
              <el-submenu index="7" >
                <template slot="title">{{label}}</template>
                  <el-menu-item index="7-1" @click='choose("cn")'>{{$t('menu["简体中文"]')}}</el-menu-item>
                  <el-menu-item index="7-2" @click='choose("pt")'>{{$t('menu["葡萄牙语"]')}}</el-menu-item>
              </el-submenu>
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
      loading:false,
      activeIndex2: "",
      item:{
        nickName : ""
      },
      language: [{
          value: 'cn',
          label: this.$t('menu["简体中文"]')
        }, {
          value: 'pt',
          label: this.$t('menu["葡萄牙语"]')
        }],
    }
  },
  created(){
    this.init()
    this.label = this.language.filter(res => {
        if (res.value == this.$i18n.locale) {
          return true
        }
      })[0].label;
  },
  methods:{
    init(item){
      // this.loading=true,
      this.$get("userInfo/findById").then(res=>{
        this.item.nickName = res.data.nickName
        // this.loading=false
      })
    },
    choose(value, txt){
        this.$i18n.locale = value;
        localStorage.setItem('lang', value);
        if (value === 'cn') {
          this.label = this.$t('menu["简体中文"]');
        } else if (value === 'pt') {
          this.label = this.$t('menu["葡萄牙语"]');
        } 
      
    },
    logout(){
      this.$get("login/logout").then(res=>{
        this.$store.state.token = null;
      })
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

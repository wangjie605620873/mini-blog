<template>
  <div>
    <div class="global_header">
      <div class="logo"><img height="25" src="@/assets/images/logo.png" alt=""></div>
      <div class="nav">
        <div :class="[activeNav == 1 ? 'activeNav' : '','nav-list']" @click="nav(1)">首页</div>
        <div :class="[activeNav == 2 ? 'activeNav' : '','nav-list']" @click="nav(2)">撰写文章</div>
        <div :class="[activeNav == 3 ? 'activeNav' : '','nav-list']" @click="nav(3)">管理</div>
        <div :class="[activeNav == 4 ? 'activeNav' : '','nav-list']" @click="nav(4)">个人设置</div>
      </div>
      <div class="fun">
        <span @click="loginOut"> 退出登录</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {setCookie} from '../../assets/js/api'
  export default {
    data() {
      return {
        activeNav  : 1,
      }
    },
    methods: {
      nav(val){
        if (val == 1){
          this.$router.push('/index')
        }else if (val == 2){
          this.$router.push('/writeMarkdown')
        }else if (val == 3){
          this.$router.push('/admin/column')
        }else if(val == 4){
          this.$router.push('/personage')
        }
        this.activeNav = val;
      },
      loginOut(){
        setCookie('phone',"");
        setCookie('token',"");
        this.$router.push({path : "/login"})

      }
    }
  }
</script>
<style lang="less" scoped>
  .global_header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 62px;
    z-index: 999;
    padding: 0 20px;
    line-height: 62px;
    color: #000000;
    background-color: #0343F6;
    background-image: linear-gradient(to bottom, #2C61FF 0%, #094AFE 50%, #0343F6 100%);
    display: flex;
    justify-content: space-between;
    .logo {
      float: left;
      line-height: 0;
      margin-top: 18px;
    }
    .fun {
      height: 60px;
      line-height: 60px;
      font-size: 14px;
      span {
        color: rgba(255, 255, 255, .7);
        margin: 0 10px;
        cursor: pointer;
        height: 60px;
        display: inline-block;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .nav{
    display: flex;
    height: 100%;
    flex: 1;
    margin-left: 30px;
  }
  .nav-list{
    padding:0 30px;
    color: #ffffff;
    cursor:pointer;
    transition:all .3s;
  }
  .nav-list:hover{
    font-weight: bold;
  }
  .activeNav{
    font-weight: bold;
    position: relative;
  }
  .activeNav:after{
    content:"";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom:4px;
    background: #ffffff;
    left: 0;
  }
</style>


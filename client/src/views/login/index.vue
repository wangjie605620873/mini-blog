<template>
  <div class="login">
    <div class="center">
      <div class="left">
        <img src="../../assets/images/login.png" alt="">
      </div>
      <div class="right">
        <div class="login-box-title">登录</div>
        <el-form :model="ruleForm" :rules="ruleForm.rules" ref="ruleForm"  >
          <el-form-item  prop="userPhone">
            <el-input placeholder="请输入手机号码"  suffix-icon="el-icon-user-solid" v-model="ruleForm.userPhone"></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input placeholder="请输入密码" suffix-icon="el-icon-lock" v-model="ruleForm.userPassword"></el-input>
          </el-form-item>
          <el-button type="primary" >登录</el-button>
        </el-form>
        <div class="line"></div>
        <div class="register">立即注册</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UserLogin',
    data() {
      let checkUserPhone = function (rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入手机号码'))
        } else {
          callback();
        }
      };
      let checkUserPassword = function (rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入手机号码'))
        } else {
          callback();
        }
      };
      return {
        ruleForm : {
          userPhone: "",
          userPassword: "",
          rules: {
            userPhone: [
              { validator : checkUserPhone, trigger: 'blur'}
            ],
            userPassword : [
              { validator : checkUserPassword, trigger: 'blur'}
            ]
          }
        },
      };
    },
    methods: {},
  };
</script>

<style lang="less" scoped>
  .login {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../assets/images/login-bg.jpg");
    background-size: cover;
  }

  .left {
    width: 280px;
    height: 308px;
    float: left;
    margin: 87px 90px 0 92px;
  }

  .left img {
    width: 100%;
    height: 100%;
  }

  .right {
    float: left;
    width: 328px;
    height: 386px;
    box-shadow: 0 11px 11px 0 rgba(0, 0, 0, .07);
    margin-top: 39px;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    padding: 40px 30px 40px 30px;
  }

  .center {
    width: 846px;
    height: 465px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
  }

  .login-box-title {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .el-button {
    width: 100%;
    margin-top: 10px;
  }

  .line {
    margin-top: 40px;
    width: 100%;
    border-top: 1px dashed #e8ecf1;
  }

  .register {
    font-size: 14px;
    text-align: center;
    color: #999;
    margin-top: 24px;
    cursor: pointer;
    transition: all .3s;
  }

  .register:hover {
    color: #0a49fb;
  }
</style>
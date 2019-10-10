<template>
  <div class="login">
    <div class="center">
      <div class="left">
        <img src="../../assets/images/login.png" alt="">
      </div>
      <div class="right">
        <div class="login-box-title">登录</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="userPhone">
            <el-input placeholder="请输入手机号码" suffix-icon="el-icon-user-solid" v-model="ruleForm.userPhone"></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input type="password" placeholder="请输入密码" suffix-icon="el-icon-lock"
                      v-model="ruleForm.userPassword"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form>
        <div class="register" @click="goRegister">立即注册</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {setCookie} from '../../assets/js/api'
  export default {
    name: 'UserLogin',
    data() {
      let checkUserPhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'))
        } else if (!/^[1]([3-9])[0-9]{9}$/.test(value)) {
          callback(new Error('手机号格式有误！'))
        } else {
          callback();
        }
      };
      let checkUserPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          userPhone: "",
          userPassword: "",
        },
        rules: {
          userPhone: [
            {validator: checkUserPhone, trigger: 'blur'}
          ],
          userPassword: [
            {validator: checkUserPassword, trigger: 'blur'}
          ]
        },
      };
    },
    methods: {
      async login() {
        let options = {
          phone: this.ruleForm.userPhone,
          password: this.ruleForm.userPassword
        };
        let res = await $axios('/login', options);
        if (res.code == 200){
          this.$message.success({message:"登录成功", showClose:true});
          this.$router.push({path : "/admin/index"});
          setCookie('token',res.data.token);
          setCookie('phone',res.data.phone);
        }else{
          this.$message.error({message:res.message, showClose:true})
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            this.$message.error({message: "输入有误", showClose: true});
            return false;
          }
        });
      },
      goRegister() {
        this.$router.push({
          path: "/register"
        })
      }
    },
  };
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
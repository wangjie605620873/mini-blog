<template>
  <div class="login">
    <div class="center">
      <div class="left">
        <img src="../../assets/images/login.png" alt="">
      </div>
      <div class="right">
        <div class="login-box-title">注册</div>
        <el-form
          :model="ruleForm" :rules="rules" ref="ruleForm"
        >
          <el-form-item prop="userPhone">
            <el-input placeholder="请输入手机号码" suffix-icon="el-icon-user-solid" v-model="ruleForm.userPhone"></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input type="password" placeholder="请输入密码" suffix-icon="el-icon-lock"
                      v-model="ruleForm.userPassword"></el-input>
          </el-form-item>
          <el-form-item prop="userPasswordAgain">
            <el-input type="password" placeholder="请输入密码" suffix-icon="el-icon-lock"
                      v-model="ruleForm.userPasswordAgain"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form>
        <div class="register" @click="goLogin">立即登录</div>
      </div>
    </div>
  </div>
</template>
<script>
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
      let checkUserPasswordAgain = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请确认密码'))
        } else if (value !== this.ruleForm.userPassword) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          userPhone: "",
          userPassword: "",
          userPasswordAgain: "",
        },
        rules: {
          userPhone: [
            {validator: checkUserPhone, trigger: 'blur'}
          ],
          userPassword: [
            {validator: checkUserPassword, trigger: 'blur'}
          ],
          userPasswordAgain: [
            {validator: checkUserPasswordAgain, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      goLogin() {
        this.$router.push({
          path: "/login"
        })
      },
      async submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.register()
          } else {
            this.$message.error({message: "输入有误", showClose: true});
            return false;
          }
        });
      },
      async register() {
        let options = {
          phone: this.ruleForm.userPhone,
          password: this.ruleForm.userPassword,
          passwordAgain: this.ruleForm.userPasswordAgain
        };
        let res = await $axios('/register', options);
        if (res.code == 200) {
          this.$message.success({message: "注册成功", showClose: true});
          this.$router.push({path: "/login"})
        } else {
          this.$message.error({message: res.message, showClose: true});
        }
      }
    },
  };
</script>

<style lang="less" scoped>
  @import "../login/index.less";


</style>
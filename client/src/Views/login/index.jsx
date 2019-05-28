import React, {Component, ReactDOM} from 'react';
import {Button, Form, Input, Message} from 'element-react'
import {setCookie} from '../../Api/index'
import './index.scss'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        password: "",
        username: "",
      },
      rules: {
        username: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {
            validator: (rule, value, callback) => {
              if (!(/^1[34578]\d{9}$/.test(value))) {
                callback(new Error('手机号码格式有误'));
              } else {
                callback();
              }
            }
          }
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'));
              } else if (value.length < 6) {
                callback(new Error('密码格式有误'));
              } else {
                callback();
              }
            }
          }
        ],
      }
    }
  }
  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, {[key]: value})
    });
  }
  test = (e) => {
    $axios({
      url : "/test",
      method : "post",
      data : {
        name : "test"
      }
    }).then((res) => {
      console.log(res)
    })
  }
  //登录
  submit = (e) => {
    e.preventDefault();
    let _this = this;
    this.refs.form.validate((valid) => {
      if (valid) {
        $axios({
          url: "/login",
          method: "post",
          data: {
            username: this.state.form.username,
            password: this.state.form.password
          }
        }).then((res) => {
          if (res.code == 200) {
            setCookie('token',res.token);
            Message.success({message: "登录成功"});
            // _this.props.history.push('/business/compiles')
          } else {
            Message.error(res.message)
          }
        })
      } else {
        Message.error({message: "账号或密码有误！"});
        return false;
      }
    });
  };
  render() {
    return (
      <div className="login">
        <div className="content-wrapper">
          <h2 className="slogan">
            欢迎使用111
            <br></br>
            ICE 内容管理系统
          </h2>
          <div className="login-box">
            <h4>登录</h4>
            <Form ref="form" model={this.state.form} rules={this.state.rules} className="demo-ruleForm">
              <Form.Item prop="username" className="__row login_warit">
                <Input onChange={this.onChange.bind(this, 'username')} value={this.state.form.username}
                       placeholder="用户名" type="text"/>
              </Form.Item>
              <Form.Item prop="password" className="__row login_warit">
                <Input onChange={this.onChange.bind(this, 'password')} value={this.state.form.password} placeholder="密码"
                       type="password"/>
              </Form.Item>

              <Form.Item prop="password" className="__row login_warit">
                <Button type="primary" onClick={this.submit.bind(this)}>登录</Button>
              </Form.Item>
            </Form>
            <div className="link-to">
              <span>立即注册</span>
              <span>忘记密码</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
  }
}

export default Login
import React, { Component } from 'react'
import Editor from 'for-editor'
import {Button } from 'element-react'
import './index.scss'
class Compile extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }
  handleSave(val){}
  click(){
    $axios({
      url :  "/test",
      method :"post",
      data : {
        name : 2
      }
    }).then((res) => {
      console.log(res)
    })
  }
  render() {
    const { value } = this.state;
    return (
      <div className="__glass">
        <Editor  value={value} onChange={this.handleChange.bind(this)} onSave={this.handleSave.bind(this)} />
      </div>
    )
  }
}
export default Compile
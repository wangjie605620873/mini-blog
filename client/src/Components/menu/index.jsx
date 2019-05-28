import {Menu} from 'element-react'
import React, {Component} from 'react'
import './index.scss'

class _Menu extends Component {
  constructor(){
    super()
  }
  onOpen() {

  }

  onClose() {

  }
  render(){
    return (
     <div className="__menu __glass">
       <Menu defaultActive="2" className="el-menu-vertical-demo _menu" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
         <Menu.SubMenu index="1" title="导航一">
           <Menu.Item index="1-1">选项1</Menu.Item>
           <Menu.Item index="1-2">选项2</Menu.Item>
         </Menu.SubMenu>
         <Menu.Item index="2">导航二</Menu.Item>
         <Menu.Item index="3">导航三</Menu.Item>
       </Menu>
     </div>
    )
  }
}

export default _Menu

import {Menu} from 'element-react'
import react, {Component} from 'react'

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
      <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
        <Menu.SubMenu index="1" title="导航一">
          <Menu.ItemGroup title="分组一">
            <Menu.Item index="1-1">选项1</Menu.Item>
            <Menu.Item index="1-2">选项2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="分组2">
            <Menu.Item index="1-3">选项3</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item index="2">导航二</Menu.Item>
        <Menu.Item index="3">导航三</Menu.Item>
      </Menu>
    )
  }
}

export default _Menu

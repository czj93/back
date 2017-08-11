import { Menu, Icon, Button } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const  SubMenu = Menu.SubMenu;

class SideBar extends Component {
	constructor(props){
		super(props)
		this.state =  {
    	collapsed: false,
      selectedKeys: [this.props.location.location.pathname],
      openKeys : [this.props.location.location.pathname]
  	}
	}
  handlerClick(item){
    console.log(1)
    console.log(item)
    this.setState({selectedKeys: [item.key]})
  }
  onOpenChange(openKeys){
    console.log(2)
    console.log(openKeys)
    this.setState({openKeys: openKeys})
  }
	render(){
    let _style = {
      height: '100%'
    }

		return (
			<div style={{height: '100%'}} >
				<Menu
          theme="dark"
          mode="inline"
          onClick= { this.handlerClick.bind(this) }
          openKeys= { this.state.openkeys }
          selectedKeys= { this.state.selectedKeys }
          onOpenChange={this.onOpenChange.bind(this)}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key='/home'><Link to='/home'>主页</Link></Menu.Item>
          <Menu.Item key='/list'><Link to='/list'>列表</Link></Menu.Item>
          <Menu.Item key='/mobxdemo'><Link to='/mobxdemo'>mobxdemo</Link></Menu.Item>
          <SubMenu key='/mygame' title="我的游戏">
            <Menu.Item key='/ku'>游戏库</Menu.Item>
            <Menu.Item key='/createGame'>创建游戏</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
		)
	}
}

export default SideBar
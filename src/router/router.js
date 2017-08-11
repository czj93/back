import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom'

import ContentRoute from './contentRoute'
import { observable, computed, action, useStrict, ObservableMap,runInAction, observer } from 'mobx';

import Layout from 'antd/lib/layout'

import SideBar from '../page/include/sider'

// import ContentRoute from './ContentRoute'
const { Header, Content, Sider } = Layout;

class AppRouter extends Component {
	constructor(props){
		super(props)
		
	}

	componentDidMount(){
		// console.log(this.props.history)
	}
	render(){
		let location = this.props.location
		return (
			
			<Layout className='h100'>
				<Header style={{ color: '#fff' }}>header</Header>
				<Layout>
					<Sider width={200} style={{ background: '#000' }}>
						<SideBar location={location} />
					</Sider>
					<Layout>
						<Content>
							<ContentRoute />
						</Content>
					</Layout>
				</Layout>
				
			</Layout>
				)
	}
}


const router  = (
	<HashRouter>
		<Route render={ (location, history) => <AppRouter  location={location} history={history} /> } ></Route>
	</HashRouter>
	)

export default router
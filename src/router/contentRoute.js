import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from './bundle'
import pathname from  './pathname'

// import MobxDemo from '../page/mobx/mobxdemo'


// 异步引入
import MobxDemoContainer from 'bundle-loader?lazy&name=app-[name]!../page/mobx/mobxdemo';


const MobxDemo = () => Bundle(MobxDemoContainer,MobxDemo)


const Root = () => (
	<div>root</div>
	)
const Home = () => (
	<div>home1</div>
	)

const List = () => (
	<div>List</div>
)

const ContentRouter = () => (
	<Switch>
			<Route exact path={pathname.root} component={Root} />
			<Route exact path={pathname.home} component={Home} />
			<Route exact path={pathname.list} component={List} />
			<Route exact path={pathname.mobxdemo} component={MobxDemo} />
	</Switch>
)

export default ContentRouter
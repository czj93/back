import 'antd/dist/antd.less'
import 'nprogress/nprogress.css';
import './resource/css/app.less'

import React,{ Component } from 'react'
import {render} from 'react-dom'
import Router from './router/router'


class App extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div style={{ height: '100%' }}>
				{Router}
			</div>
		)
	}
}


render(<App />, document.getElementById('APP'), () => {
	console.log('渲染完成')
})
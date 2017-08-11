import React, {Component} from 'react'
import { observer } from 'mobx-react'
import store from './mobxdemoStore'

@observer class MobxDemo extends Component {
	constructor(props){
  	super(props)
  }
  handleClick(){
  	//store.count++
  	store.add('add')
  }
  render(){
  	return <div onClick={this.handleClick.bind(this)}>count:{store.count};total:{store.total}</div>
  }
}

export default MobxDemo
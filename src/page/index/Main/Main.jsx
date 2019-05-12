import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route,Redirect,Switch,withRouter} from 'react-router-dom'
import Loadable from 'react-loadable'
import BottomBar from '../BottomBar/BottomBar'
// import Home from '../Home/Home'
// import Order from '../Order/Order';
// import My from '../My/My'
import Loading from './Loading'
const My = Loadable({
  loader:()=>import('../My/My'),
  loading:Loading
})

const Order = Loadable({
  loader:()=>import('../Order/Order'),
  loading:Loading
})

const Home = Loadable({
  loader:()=>import(/* webpackChunkName:"home" */'../Home/Home'),
  loading:Loading
})


 class Main extends Component {
  constructor(props,context){
      super(props,context)
    
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/order' component={Order}></Route>
          <Route path='/my' component={My}></Route>
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
        <BottomBar></BottomBar>
      </div>
    )
  }
}
export default withRouter(Main);
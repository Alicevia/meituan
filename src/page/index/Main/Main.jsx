import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route,Redirect,Switch,withRouter} from 'react-router-dom'
import BottomBar from '../BottomBar/BottomBar'
import Home from '../Home/Home'
import Order from '../Order/Order';
import My from '../My/My'
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
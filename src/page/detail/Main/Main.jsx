import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Switch,Route,NavLink,withRouter,Redirect} from 'react-router-dom'
import NavHeader from '../../../component/NavHeader/NavHeader'
import './Main.scss'
import Menu from '../Menu/Menu';
import Comment from '../Comment/Comment';
import Restanurant from '../Restanurant/Restanurant';
class Main extends Component {
 constructor(props,context){
  super(props,context)
 }

 changeTab(){

 }

 renderTabs(){
     let {tabs} = this.props;
     return tabs.map((item,index)=>{
         let {name,key} = item;
         return (
             <NavLink replace={true} to={'/'+key}
             activeClassName='active'onClick={()=>this.changeTab.bind(this)}
              key={key} className='tab-item'>{name}</NavLink>
         ) 
     })

 }


 render() {
  return (
      <div className='detail'>
        <NavHeader title="黄焖鸡"></NavHeader>
        <div className="tab-bar">
            {this.renderTabs()}
        </div>
        <Switch>
              <Route path='/menu' component={Menu}></Route>
              <Route path='/comment' component={Comment}></Route>
              <Route path='/restanurant' component={Restanurant}></Route>
              <Redirect from='/' to='/menu'></Redirect>
          </Switch>
      </div>
    )
 }
}
export default withRouter(connect(state=>state.tabReducer)(Main));
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import './BottomBar.scss'
import action from '../../../store/action';
class BottomBar extends Component {
 constructor(props,context){
  super(props,context)
 }

 changeTab=(item)=>{

     this.props.history.replace('/'+item.key)
    //  this.props.changeTab(item);
 }

 renderItems(){
    let {tabs,activeKey} = this.props;
    tabs = tabs.map((item,index)=>{
        let {key:cls,name} = item;
        cls = cls+' btn-item';
    //    if (item.key === activeKey) {
    //        cls += ' active';
    //    }
        return (
                <NavLink replace={true} to={'/'+item.key} key={index} className={cls}
                    onClick={()=>{this.changeTab(item)}}>
                    <div className='tab-icon'></div>
                    <div className='btn-name'>{name}</div>
                </NavLink>

            
        )
    })
    return tabs
    
 }
 render() {
  return (
      <div className='bottom-bar'>
      {this.renderItems()}
      </div>
    )
 }
}

export default withRouter(connect(state=>({
    tabs:state.tabReducer.tabs,
    activeKey:state.tabReducer.activeKey
}),action.tabAction)(BottomBar));
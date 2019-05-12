import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Menu.scss'
import action from '../store/action';
import MenuItem from './MenuItem/MenuItem'
import ShopBar from './ShopBar/ShopBar'
 
class Menu extends Component {
 constructor(props,context){
  super(props,context)
  this.props.getListData()
 }

 renderRightList(array){
    let _array = array||[];
    return _array.map((item,index)=>{
      let {name} = item;
      if (!item.chooseCount) {
        item.chooseCount=0;
      }
      return (
        <MenuItem key={index} _index={index} data={item}></MenuItem>
      )
    })
 }

 renderRight(){
   let index = this.props.currentLeftIndex;
   let array =  this.props.listData.food_spu_tags||[];
   let currentItem = array[index];
   if (currentItem) {
     let title = <p key={1} className='right-title'>{currentItem.name}</p>
     return [
       title,
       <div key={2} className='right-list-inner'>{this.renderRightList(currentItem.spus)}</div>
     ]
   }else{
     return null;
   }
 }




 itemClick(item,index){
    this.props.getItemClick({currentLeftIndex:index})
 }

 renderLeft(){
     let list = this.props.listData.food_spu_tags||[];
     return list.map((item,index)=>{
       let cls = this.props.currentLeftIndex===index? 'left-item active':'left-item';
       let {icon,name} = item;
       return (
         <div key={index} onClick={()=>this.itemClick(item,index)} className={cls}>
            <div className='item-text'>{icon?<img src={icon} className='item-icon'/>:null}
            {name} 
            </div>
         </div>
       )
     })
 }


 render() {
  return (
      <div className='menu-inner'>
        <div className="left-bar">
            <div className="left-bar-inner">
                {this.renderLeft()}
            </div>
        </div>
          <div className="right-content">
            {this.renderRight()}
          </div>
          <ShopBar></ShopBar>
      </div>
    )
 }
}
export default connect(state=>state.menu,action.menu)(Menu);
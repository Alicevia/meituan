import React, { Component } from 'react'
import {connect} from 'react-redux'
import './MenuItem.scss'
import action from '../../store/action';
import Item from 'antd/lib/list/Item';
class MenuItem extends Component {
 constructor(props,context){
  super(props,context)
 }


 addSelectItem(){
    this.props.addSelect({index:this.props._index})
 }

 minusSelectItem(){
     this.props.minusSelect({index:this.props._index})
 }


 render() {
     let {picture,name,praise_content,unit,
        description,min_price,chooseCount}= this.props.data;

  return (
      <div className='menu-item'>
          <img src={picture} className='img' alt=""/>
          <div className="menu-item-right">
             <p className="item-title">{name}</p>
             <p className="item-desc two-line">{description}</p>
             <p className="item-zan">{praise_content}</p>

             <p className="item-price">¥{min_price}/
             <span className='unit'>{unit}</span>
             </p>

          </div>
          <div className="select-content">
            {
                chooseCount>0?<div onClick={()=>this.minusSelectItem()} className="minus"></div>:null
            }
            {
                chooseCount>0?<div className="count">{chooseCount}</div>:null
            }
            <div onClick={()=>this.addSelectItem()} className="plus"></div>
          </div>

      </div>
    )
 }
}
export default connect(state=>state.menu,action.menu)(MenuItem);
import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Restanurant.scss'
import action from '../store/action';


class Restanurant extends Component {
 constructor(props,context){
  super(props,context)
  this.props.getRestanurantData()
 }

 renderPayType(types){
   let array = types||[];
   return array.map((item,index)=>{
     let {icon_url,info} = item;
     return (
       <li key={index} className='pay'>
          <img className='icon' src={icon_url} alt=""/>
          {info}
       </li>
     )
   })
 }



 render() {
   let {address,shipping_time,call_center,delivery_type,discounts2} = this.props.resData;
  return (
      <div className='restanurant'>
          <ul className="restanurant-basic">
            <li className='phone'>{call_center}</li>
            <li className='address'><div>商家地址：</div><div>{address}</div></li>
          </ul>
          <ul className="restanurant-basic">
            <li className='time'>配送时间:{shipping_time}</li>
            <li className='server'>
            配送服务：
            <span>
              {delivery_type===1? <span className='meituan-send'>美团专送</span>:null}
              提供高质量配送服务
            </span>
            </li>
          </ul>
          <ul className="restanurant-basic">

          {this.renderPayType(discounts2)}
          </ul>
      </div>
    )
 }
}
export default connect(state=>state.restanurant,action.restanurant)(Restanurant);
import React, { Component } from 'react'
import {connect} from 'react-redux'
import './ShopBar.scss'
import action from '../../store/action';
class ShopBar extends Component {
 constructor(props,context){
  super(props,context)
 }

 addSelectItem(item){
    this.props.addSelect({
        index:item._index,
        outIndex:item._outIndex
    })
 }

 minusSelectItem(item){
     this.props.minusSelect({
        index:item._index,
        outIndex:item._outIndex
     })
 }
 oppenChooseContent(){
   
     this.props.showChoose({flag:!this.props.showChooseContent})
 }

 clearCar(){
     this.props.clearCarData({
         flag:!this.props.showChooseContent
     })
 }


 getTotalPrice(){
    let listData = this.props.listData.food_spu_tags||[];
    let totalPrice =0;
    let dotNum = 0;
    let chooseList  =[];
    for (let i = 0; i < listData.length; i++) {
        let spus = listData[i].spus||[];
        for (let j = 0; j < spus.length; j++) {
            let chooseCount = spus[j].chooseCount;
            if (chooseCount) {
                dotNum+= chooseCount; 
                spus[j]._index=j;
                spus[j]._outIndex=i;
                chooseList.push(spus[j]);
                totalPrice+=spus[j].min_price*chooseCount;
            }
            
        }
        
    }
    return {
        dotNum,totalPrice,chooseList
    }
 }


 renderChooseItem(data){
    let array = data.chooseList||[];
    return array.map((item,index)=>{
        return (
            <div className='choose-item' key={index}>
                <div className="item-name">{item.name}</div>
                <div className="price">{item.min_price*item.chooseCount}</div>
                <div className="select-content">
                    <div onClick={()=> this.minusSelectItem(item)} className="minus"></div>
                    <div className="count">{item.chooseCount}</div>
                    <div onClick={()=>this.addSelectItem(item)} className="plus"></div>
                 </div>
            </div>
        )
    })
 }


 render() {
     let shipping_fee = this.props.listData.poi_info?this.props.listData.poi_info.shipping_fee:0;
     let data = this.getTotalPrice();
  return (
      <div className='shop-bar'>
      {this.props.showChooseContent?
        <div className='choose-content'>
            <div className="content-top">
                <div onClick={()=>this.clearCar()} className="clear-car">清空购物车</div>
            </div>
            {this.renderChooseItem(data)}
        </div>:null  
    }
        <div className='bottom-content'>
            <div onClick={()=>this.oppenChooseContent()} className="shop-icon">
               {data.dotNum>0? <div className='dot-num'>{data.dotNum}</div>:null}
            </div>
            <div className='price-content'>
                <p className="total-price">¥{data.totalPrice}</p>
                <p className="other-price">另需配送费¥{shipping_fee}</p>
            </div>
            <div className="submit-btn">去结算</div>
        </div>
      </div>
    )
 }
}
export default connect(state=>state.menu,action.menu)(ShopBar);
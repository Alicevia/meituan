import React, { Component } from 'react'
import {connect} from 'react-redux'
import './ListItem.scss'
class ListItem extends Component {
 constructor(props,context){
  super(props,context)
 }


 renderBrand(a){
    let b = a? <div className='brand brand-pin'>品牌</div>
        : <div className='brand brand-xin'>新到</div>
    return b
 }

 renderScore(data=''){
    let score = parseFloat(data).toFixed(1).toString();
    let fullstar,halfstar,nullstar;
    let reg = /^(\d)\.(\d)$/g;
    let num = reg.exec(score);
    fullstar = parseInt(num[1]);
    if (parseInt(num[2])>=5) {
        halfstar = 1;
        nullstar = 5-halfstar-fullstar;
    }else{
        halfstar=0;
        nullstar = 5-fullstar;
    }
    let starjsx = [];

    for (let i = 0; i < fullstar; i++) {
        starjsx.push(<div key={i+'full'} className='star fullstar'></div>)
    }
    for (let i = 0; i < halfstar; i++) {
        starjsx.push(<div key={i+'half'} className='star halfstar'></div>)
    }
    for (let i = 0; i < nullstar; i++) {
        starjsx.push(<div key={i+'null'} className='star nullstar'></div>)
    }
    return starjsx

 }

 renderMonthNum(data){
     if (parseFloat(data)>999) {
         return '999+'
     }else{
         return data
     }
 }

 renderMeituanFlag(data){
     if (data) {
         return <div className='item-meituan-flag'>美团专送</div>
     }
     return null;
 }

 renderOthers(data){
   if (data.length<=0) {
       return;
   }
   data=data.map((item,index)=>{
        return (
            <div className="other-info" key={index}>
                <img src={item.icon_url} alt="" className="other-tag"/>
                <div className="other-content">{item.info}</div>
            </div>
        )
   })
   return data;
 }


 goDetail(data){
     window.location.href='/detail.html?id='+data.id;
 }


 render() {
    let {pic_url,brand_type,name,
        wm_poi_score,month_sale_num,
        distance,mt_delivery_time,min_price_tip,
        delivery_type,discounts2} = this.props.itemData;

  return (
     
      <div onClick={()=>this.goDetail(this.props.itemData)} className='item-content scale-1px'>
        <img className='item-img' src={pic_url} alt=""/>

        {this.renderBrand(brand_type)}
       
        <div className="item-info-content">
            <p className="item-title">{name}</p>
            <div className="item-desc clearfix">
                <div className='item-score'>
                    {this.renderScore(wm_poi_score)}
                </div>
                <div className='item-count'>月售：{this.renderMonthNum(month_sale_num)}</div>
                <div className='item-distance'>&nbsp;{distance}</div>
                <div className='item-time'>{mt_delivery_time}&nbsp;|</div>
            </div>
            <div className="item-price">
                <div className="item-pre-price">{min_price_tip}</div>
                {this.renderMeituanFlag(delivery_type)}
            </div>
            <div className="item-others">
                {this.renderOthers(discounts2)}
               
            </div>
        </div>
      </div>
    )
 }
}
export default connect()(ListItem);
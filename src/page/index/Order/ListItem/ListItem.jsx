import React, { Component } from 'react'
import {connect} from 'react-redux'
import './ListItem.scss'
class ListItem extends Component {
 constructor(props,context){
  super(props,context)
 }


 renderTotalPrice(data,total,index){
     return(
            <div className='product-item' key={index} >
                <span>...</span>
                <div className='p-total-count'>总计{index}个菜，实付
                <span className='total-price'>¥{total}</span>
                </div>
            </div>
     )
 }


 renderProduct(data,total){
    if (data.length<=0) {
        return '';
    }
    let length = data.length;
    data = JSON.parse(JSON.stringify(data))
    data.push({type:'more'})

    return data.map((item,index)=>{
        let {product_name,product_count} = item;
        if (item.type==='more') {
            return this.renderTotalPrice(item,total,index);
        }
        return <div className='product-item' key={index}>{product_name}
            <div className='p-count'>x{product_count}</div>
        </div>
    })
 }



 renderComment(data){
    if (!data) {
        return <div className='evalutaion clearfix'>
                <div onClick={this.goEval} className='evaluation-btn'>评价</div>
        </div>
    } 
 }
 goEval(){
    window.location.href='/evaluation.html'
 }

 goDetail(){
    window.location.href = '/detail.html';

 }

 render() {
     let {poi_pic,poi_name,status_description,product_list,total,is_comment} = this.props.itemData;
  return (
      <div className='order-item'>
        <div className="order-item-inner">
            <img src={poi_pic} alt="" className="item-img"/>
            <div className="item-right">
                <div className="item-top" onClick={this.goDetail}>
                    <p className="order-name one-line">{poi_name}</p>
                    <div className="arrow"></div>
                    <div className="order-state">{status_description}</div>
                </div>
                <div className="item-bottom">
                {this.renderProduct(product_list,total)}
                </div>
            </div>
        </div>
        {this.renderComment(is_comment)}
      </div>
    )
 }
}
export default connect()(ListItem);
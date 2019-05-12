import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Order.scss'
import action from '../store/action';
import ListItem from './ListItem/ListItem'
import ScrollView from '../../../component/ScrollView/ScrollView'
import NavHeader from '../../../component/NavHeader/NavHeader'
class Order extends Component {
 constructor(props,context){
  super(props,context)
  this.state={
    isend:false
  }
  this.props.getOrderData(0);
  this.page=0;
 }


 renderList(){
    let {list} = this.props;
    return list.map((item,index)=>{
      return <ListItem key={index} itemData={item}></ListItem>
    })
 }
 loadPage(){
   this.page++;
   if (this.page>3) {
     this.setState({
       isend:true
     })
   }else{
    this.props.getOrderData(this.page);
   }
 }

 render() {
  return (
      <div className='orders'>
        <div className="header">订单</div>
          <ScrollView loadCallback={this.loadPage.bind(this)} isend={this.state.isend}>
            <div className="order-list">
              {this.renderList()}
            </div>
          </ScrollView>
        
      </div>
    )
 }
}
export default connect(state=>state.order,action.order)(Order);
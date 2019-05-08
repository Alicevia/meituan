import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../../../../store/action';
import './ContentList.scss'
import ListItem from './ListItem/ListItem'
import ScrollView from '../../../../component/ScrollView/ScrollView'

class ContentList extends Component {
 constructor(props,context){
  super(props,context)
  this.props.getListData(0);
  
  this.state ={
    isend:false
  }

  this.page = 0;
 }

 onLoadPage=()=>{
  this.page++;
       
  if (this.page>3) {
    this.setState({
      isend:true    
    })
  }else{
      this.props.getListData(this.page);
    
  }
 }


 renderItems(){
   let {list} = this.props;
   return list.map((item,index)=>{
     return (<ListItem key={index} itemData={item}></ListItem>)
   })
 }

 render() {
  return (
      <div className='list-content'>
        <h4 className='list-title'>
            <span className='title-line'></span>
            <span>附近商家</span>
            <span className='title-line'></span>
        </h4>
        <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
          {this.renderItems()}
        </ScrollView>
      </div>
    )
 }
}
export default connect(state=>({...state.contentList}),action.contentList)(ContentList);
import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../store/action';
import './ContentList.scss'
import ListItem from './ListItem/ListItem'
import ScrollView from '../../../component/ScrollView/ScrollView'

class ContentList extends Component {
 constructor(props,context){
  super(props,context)
  this.props.getListData();
  
 }

 onLoadPage=()=>{
  // if (this.props.page<=3) {
  //   this.props.getListData();
  // }
   
    if (this.props.filterData) {

      let page = this.props.page;
      this.props.getContentListFilterData({page});
    }else{
      this.props.getListData(this.props.page)
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

        <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.props.isend}>
          {this.renderItems()}
        </ScrollView>
      </div>
    )
 }
}
export default connect(state=>({...state.contentList}),action.contentList)(ContentList);
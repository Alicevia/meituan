import React, { Component } from 'react'
import {connect} from 'react-redux'
import './CommentList.scss'
import ScrollView from '../../../../component/ScrollView/ScrollView'
import action from '../../store/action';
import CommentItem from './CommentItem/CommentItem'

class CommentList extends Component {
 constructor(props,context){
  super(props,context)
 }

 renderList(){
    let list = this.props.commentList;
    return list.map((item,index)=>{
        return <CommentItem key={index} data={item}></CommentItem>
    })
 }

 onLoadPage(){
     this.props.getCommentData()
 }

 render() {
  return (
      <div className='comment-list'>
          <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={0}>
            {this.renderList()}
          </ScrollView>
      </div>
    )
 }
}
export default connect(state=>state.comment,action.comment)(CommentList);
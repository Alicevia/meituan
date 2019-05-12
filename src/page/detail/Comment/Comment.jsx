import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../store/action';
import './Comment.scss'
import StarScore from '../../../component/StarScore/StarScore'
import CommentList from './CommentList/CommentList'
class Comment extends Component {
 constructor(props,context){
  super(props,context)
  this.props.getCommentData()
 }
 
 render() {
   let {comment_score,food_score,delivery_score,
    pack_score} = this.props.commentData;
    // console.log(comment_score)
  return (
      <div className='comment-inner'>
        <div className="comment-score">
          <div className="mail-score-content">
            <div className="mail-score">{comment_score?comment_score.toFixed(1):''}</div>
            <div className="mail-text">商家评价</div>
          </div>
          <div className="other-score-content">
            <div className="taste-score">
              <div className="taste-text">口味</div>
              <div className="taste-star-wrap"><StarScore score={food_score}></StarScore></div>
              <div className="taste-score-text">{food_score?food_score.toFixed(1):''}</div>
            </div>
            <div className="package-score">
              <div className="package-text">包装</div>
              <div className="package-star-wrap"><StarScore score={pack_score}></StarScore></div>
              <div className="package-score-text">{pack_score?pack_score.toFixed(1):''}</div>
            </div>
          </div>
          <div className="send-score-content">
            <div className="send-score">{delivery_score}</div>
            <div className="send-text">商家评价</div>
          </div>
        </div>
        <CommentList></CommentList>
      </div>
    )
 }
}
export default connect(state=>state.comment,action.comment)(Comment);
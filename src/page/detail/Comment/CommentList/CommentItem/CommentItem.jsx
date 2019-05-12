import React, { Component } from 'react'
import {connect} from 'react-redux'
import './CommentItem.scss'
import StarScore from '../../../../../component/StarScore/StarScore'
class CommentItem extends Component {
 constructor(props,context){
  super(props,context)
 }


 renderImgs(item){
     let imgs = item.comment_pics ||[];
     if (imgs.length) {
         return (
             <div className='img-content clearfix'>
                {imgs.map((item,index)=>{
                    let src = item.url;
                    let style = {
                        backgroundImage:'url('+src+')'
                    }
                    return <div key={index} className='img-item' style={style}></div>
                })}
             </div>
         )
     }else {
         return null
     }
 }

 renderTags(label){
     return label.map((item,index)=>{
         return item.content+','
     })
 }

 formatTime(time){
     let date = new Date(Number(time+'000'));
     return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
 }

 render() {
     let {comment,comment_time,order_comment_score,user_pic_url,
        ship_time,praise_food_tip,user_name,comment_labels
    } = this.props.data;
  return (
      <div className='comment-item'>
          <div className="comment-time">{this.formatTime(comment_time)}</div>
          <img src={user_pic_url||'http://xs01.meituan.net/waimai_i/img/default-avatar.c4e0230d.png'} className='avatar' alt=""/>
          <div className="item-right">
              <p className="nickname">{user_name}</p>
              <div className="star-and-time">
                  <div className="star-content"><StarScore score={order_comment_score}></StarScore></div>
                  <div className="send-time">`${ship_time}分钟送达到`</div>
              </div>
              <div className="comment-text">{comment}</div>
              {this.renderImgs(this.props.data)}
              {praise_food_tip?<div className='like-info'>{praise_food_tip}</div>:null}
            {comment_labels.length?<div className='tag-info'>{this.renderTags(comment_labels)}</div>:null}
          </div>
      </div>
    )
 }
}
export default connect()(CommentItem);
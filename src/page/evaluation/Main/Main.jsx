import React, { Component } from 'react'
import NavHeader from '../../../component/NavHeader/NavHeader'
import './Main.scss'

class Main extends Component {
 constructor(props,context){
  super(props,context)
  this.maxCount = 140;
  this.state ={
      count:this.maxCount,
      startIndex:0
  }
 }



 doEva(i){
     this.setState({
         startIndex:i+1 
     })
 }

 renderStar(){
     let array=[];
     for (let i = 0; i < 5; i++) {
        let cls=i>= this.state.startIndex? 'star-item':'star-item light';
        array.push(
            <div onClick={()=>this.doEva(i)} key={i} className={cls}></div>
        )
         
     }
     return array;
 }

 componentDidMount(){
    this.refs.commentInput.addEventListener('compositionstart',()=>{
        this.chineseInput = true
    })
    this.refs.commentInput.addEventListener('compositionend',(e)=>{
        this.chineseInput = false;
        this.onInput(e.target.value)
    })
 }
 //ref={(ref)=>this.commentInput=ref}
 onInput(value){
     let num = value.length;
     if (!this.chineseInput) {
        this.setState({
            count:this.maxCount-num
        })
     }


 }

 render() {
  return (
      <div className='content'>
          <NavHeader title='评价'></NavHeader>
          <div className='eva-content'>
                <div className="star-area">
                    {this.renderStar()}
                </div>
                <div className="comment">
                    <textarea ref='commentInput' onChange={(e)=>this.onInput(e.target.value)} placeholder='亲，评论下呗'
                     name="" id="" cols="30" rows="10" className="comment-input"></textarea>
                     <span className="count">{this.state.count}</span>
                </div>
                <p className="product-name one-line">美味炸鸡</p>
          </div>
          <div className="submit">提交评价</div>
      </div>
    )
 }
}
export default Main;
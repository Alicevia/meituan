import React, { Component } from 'react'
import {connect} from 'react-redux'
import './My.scss'
class My extends Component {
 constructor(props,context){
  super(props,context)
 }

 render() {
  return (
      <div className='my'>
        <div className="header">
            <img src="http://i.waimai.meituan.com/static/img/default-avatar.png" alt="" className="avatar"/>
            <p className="nickname">xxx&gt;</p>
        </div>
        <div className="content">
            <ul className="items">
                <li className="address">收货地址管理</li>
                <li className="money">商家代金券</li>
            </ul>
            <ul className="items">
                <li className="email">意见反馈</li>
                <li className="question">常见问题</li>
            </ul>
            <p className="tel">客服电话：234023740293849</p>
            <p className="time">服务时间:00-21:00</p>
        </div>
      </div>
    )
 }
}
export default connect()(My);
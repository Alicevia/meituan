import React, { Component } from 'react'

import './NavHeader.scss'


class NavHeader extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div className='nav'>
        <div className="back-icon" onClick={()=>{
          window.history.go(-1)
        }}>
           
        </div>
        <h4 className="title">
                {this.props.title}
            </h4>
      </div>
    )
 }
}
export default NavHeader;
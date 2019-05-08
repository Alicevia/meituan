import React, { Component } from 'react'
import {connect} from 'react-redux'
import './SearchBar.scss'

class SearchBar extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div className='search-bar'>
        <div className='bar-location'>
          <div className="location-icon"></div>
          <div className="location-text">北京市</div>
        </div>
        <div className='search-btn'>
          <p className="place-holder">搜索</p>
        </div>
      </div>
    )
 }
}
export default connect()(SearchBar);
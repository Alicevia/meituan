import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Header.scss'
import SearchBar from '../SearchBar/SearchBar'
class Header extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div className='header'>
        <SearchBar></SearchBar>
        <img className='banner-img' src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
      </div>
    )
 }
}
export default connect()(Header);
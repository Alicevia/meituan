import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route,Redirect,Switch,withRouter} from 'react-router-dom'

import NavHeader from '../../../component/NavHeader/NavHeader'
import Header from '../Header/Header'
import ContentList from '../ContentList/ContentList'


import '../../../component/reset.css'

 class Main extends Component {
  constructor(props,context){
      super(props,context)
     
  }
  render() {
    return (
      <div className='category'>
          <NavHeader title='分类'></NavHeader>
          <Header></Header>
          <ContentList ></ContentList>
      </div>
    )
  }
}
export default withRouter(Main);
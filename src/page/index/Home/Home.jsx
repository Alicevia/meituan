import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from './Header/Header'
import Category from './Category/Category'
import ContentList from './ContentList/ContentList'
class Home extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div>
          <Header></Header>
          <Category></Category>
          <ContentList></ContentList>
      </div>
    )
 }
}
export default connect()(Home);
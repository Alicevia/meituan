import React, { Component } from 'react'
import {connect} from 'react-redux'
import Main from './Main'


class Container extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <Main></Main>
    )
 }
}
export default connect()(Container);
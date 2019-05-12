import React, { Component } from 'react'


import '../../../component/reset.css'
import '../../../component/common.scss'

import Main from './Main'
class Container extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div>
          <Main></Main>
      </div>
    )
 }
}
export default Container;
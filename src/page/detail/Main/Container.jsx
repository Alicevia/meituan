import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import store from '../store'
import '../../../component/reset.css'
import '../../../component/common.scss'



import Main from './Main'
class Container extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <Provider store={store}>
        <HashRouter>

          <Main></Main>

        </HashRouter>
      </Provider>
    )
 }
}
export default Container;
import React from 'react';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import {LocaleProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import {Provider} from 'react-redux'
import store from './store'
import Main from './page/index/Main/Main'
import './static/common.css'
import './static/reset.css'
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Main></Main>
      </HashRouter>
    </Provider>
  );
}

export default App;

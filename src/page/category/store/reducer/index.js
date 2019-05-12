import {combineReducers} from 'redux'

import header from './header'
import contentList from './contentList'

let reducer = combineReducers({
    header,
    contentList

})

export default reducer
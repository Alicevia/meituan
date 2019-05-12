import {combineReducers} from 'redux'
import tabReducer from './tabReducer'
import category from './category'
import contentList from './contentList'
import order from './order'
let reducer = combineReducers({
    tabReducer,
    category,
    contentList,
    order

})

export default reducer
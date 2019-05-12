import {combineReducers} from 'redux'
import tabReducer from './tabReducer'
import category from './category'
import contentList from './contentList'
import order from './order'
import scrollView from '../../../../component/ScrollView/scrollViewReducer'
let reducer = combineReducers({
    tabReducer,
    category,
    contentList,
    order,
    scrollView

})

export default reducer
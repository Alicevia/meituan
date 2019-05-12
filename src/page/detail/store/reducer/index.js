import {combineReducers} from 'redux'
import tabReducer from './tabReducer'
import menu from './menu'
import restanurant from './restanurant'
import comment from './comment'
let reducer = combineReducers({
    tabReducer,
    menu,
    restanurant,
    comment

})

export default reducer
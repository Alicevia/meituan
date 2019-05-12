import * as TYPES from '../action-Type'
import action from '../action';
import {TABKEY} from '../config'
export default function tabReducer(state={
    tabs:[
        {
            name:'首页',
            key:TABKEY.home
        },
        {
            name:'订单',
            key:TABKEY.order
        },
        {
            name:'我的',
            key:TABKEY.my
        }
    ],
    activeKey:TABKEY.home
},action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case TYPES.CHANGETAB:
            state.activeKey = action.payload.key;
        break;
    }
    return state
}

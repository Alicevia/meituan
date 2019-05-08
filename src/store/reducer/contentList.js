import * as TYPES from '../action-Type'
import action from '../action/index'

export default function contentList(state={
    list:[]
},action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case TYPES.LIST_DATA:
            if (action.page===0) {
                state.list = action.data;
            }else {
                state.list = state.list.concat(action.data)
            }
        break;
    }
    return state

}
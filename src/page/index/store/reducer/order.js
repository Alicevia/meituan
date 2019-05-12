import * as TYPES from '../action-Type'
import action from '../action'

export default function order(state={
    list:[]
},action){
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.ORDER_DATA:
            if (action.page===0) {
                state.list = action.payload.digestlist;
            }else{
                state.list = state.list.concat(action.payload.digestlist);
            }
        break;
    }
    return state
}
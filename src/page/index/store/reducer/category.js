import * as TYPES from '../action-Type'
import action from '../action/index'


export default function category(state={
    items:[]
},action){
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.HEAD_DATA:
            state.items = action.payload.data.primary_filter;
            break;

       
    }
    return state

}


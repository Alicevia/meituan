import * as TYPES from '../action-Type'
import action from '../action'
export default function restanurant(state={
    resData:{}
},action){
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.GET_RESTANURANT_DATA:
        state.resData = action.payload.data
        break;
    }
    return state;

}
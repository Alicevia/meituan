import * as TYPES from '../action-Type'
import action from '../action'

export default function  contentList(state={
    list:[],
    filterData:null,
    page:0,
    isend:false

},action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case TYPES.GET_CATE_CONTENTLIST_DATA:
            if (action.page === 0) {
                state.list = action.data
            }else{
                state.list = state.list.concat(action.data)                          
            }
           state.page=state.page+1;
        
           
            if (state.page>3) {
                state.isend = true;
            }
            break;
        case TYPES.GET_FILTER_CATE_CONTENTLIST_DATA:
           if (action.payload.page===0) {
                state.list = action.data.poilist;
                state.page = action.payload.page;
                state.isend = action.payload.isend;
                state.filterData = action.payload.filterData;                  
           }else{
               state.list = state.list.concat(action.data.poilist);            
           }
           state.page=state.page+1;
           if (state.page>3) {
               state.isend = true;
           }
            break;

    }
    return state
}
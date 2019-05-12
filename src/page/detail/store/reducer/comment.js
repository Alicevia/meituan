import * as TYPES from '../action-Type'
import action from '../action'
export default function comment(state={
    commentData:{},
    commentList:[]
},action){
    state=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case TYPES.GET_COMMENT_DATA:            
            if (state.commentList.length>0) {
                state.commentList=state.commentList.concat(action.payload.data.comments)
            }else{
                state.commentData = action.payload.data;
                state.commentList = action.payload.data.comments;
            }
        
            break;
    }
    return state;
}
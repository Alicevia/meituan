import * as TYPES from '../action-Type'
import { queryComment } from '../../../../api/detail';

let comment = {
    getCommentData(){
        return {
            type:TYPES.GET_COMMENT_DATA,
            payload:queryComment()
        }
    }
}

export default comment
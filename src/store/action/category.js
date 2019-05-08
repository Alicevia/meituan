import * as TYPES from '../action-Type'
import {queryHeaderData} from '../../api/category'

let category = {
    getHeaderData(){
        return {
            type:TYPES.HEAD_DATA,
            payload:queryHeaderData()
        }
    }
}

export default category;
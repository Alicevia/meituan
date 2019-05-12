import * as TYPES from '../action-Type'
import { queryRestanurant } from '../../../../api/detail';

let restanurant = {
    getRestanurantData(){
        return {
            type:TYPES.GET_RESTANURANT_DATA,
            payload:queryRestanurant()
        }
    }
}

export default restanurant
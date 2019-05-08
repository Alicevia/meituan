import * as TYPES from '../action-Type'
import {queryOrderData} from '../../api/order'

let order = {
    getOrderData(page){
        return async dispatch=>{
            let result = await queryOrderData();
            dispatch({
                type:TYPES.ORDER_DATA,
                payload:result.data,
                currentPage:page
            })
        }
    }
}

export default order
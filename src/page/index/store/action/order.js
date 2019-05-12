import * as TYPES from '../action-Type'
import {queryOrderData} from '../../../../api/order'
import {CHANGEREADYSTATE} from '../../../../component/ScrollView/action-Types'
let order = {
    getOrderData(page){
        return async dispatch=>{
            dispatch({
                type:CHANGEREADYSTATE,
                payload:false
            })
            let result = await queryOrderData();
            dispatch({
                type:TYPES.ORDER_DATA,
                payload:result.data,
                currentPage:page
            });
            dispatch({
                type:CHANGEREADYSTATE,
                payload:true
            })
        }
    }
}

export default order
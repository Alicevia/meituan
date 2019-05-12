import * as TYPES from '../action-Type'
import {queryListData} from  '../../../../api/detail'
let menu = {
    getListData(){
        return async dispatch=>{
            let result  = await queryListData();
            dispatch({
                type:TYPES.GET_LIST_DATA,
                data:result.data
            })
        }
    },
    getItemClick(payload){
        return {
            type:TYPES.LEFT_CLICK,
            payload
        }
    },
    addSelect(payload){
        return {
            type:TYPES.ADD_SELECT_ITEM,
            payload
        }
    },
    minusSelect(payload){
        return {
            type:TYPES.MINUS_SELECT_ITEM,
            payload
        }
    },
    showChoose(payload){
        return {
            type:TYPES.SHOW_CHOOSE_CONTENT,
            payload
        }
    },
    clearCarData(payload){
        return {
            type:TYPES.CLEAR_CAR,
            payload
        }
    }



}
export default menu;
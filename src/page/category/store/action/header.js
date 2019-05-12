import * as TYPES from '../action-Type'
import {queryFilterData} from '../../../../api/header'



let header = {
    changeTab(payload) {
       return {
           type:TYPES.CHANGE_TAB,
           payload
       }
   },
   getFilterData(){
       let payload = {
           closePanel:false
       };
       return async dispatch =>{
           let result = await queryFilterData();
           dispatch({
               type:TYPES.GET_FILTER_DATA,
               data:result.data
           });
        //    dispatch({
        //        type:TYPES.CHANGE_TAB,
        //        payload
        //    })
       }
   },
   changeFilter(payload){
        return {
            type:TYPES.CHANGE_FILTER,
            payload
        }
   } 


    
}

export default header
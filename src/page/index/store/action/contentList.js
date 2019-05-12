import * as TYPES from '../action-Type'
import {queryListData} from '../../../../api/contentList'
import {CHANGEREADYSTATE} from '../../../../component/ScrollView/action-Types'
let contentList = {
    // getListData(){
    //     return {
    //         type:TYPES.LIST_DATA,
    //         payload:queryListData()
    //     }
    // }
    getListData(page){

        return async dispatch=> {
            dispatch({
                type:CHANGEREADYSTATE,
                payload:false
            })
           let result = await queryListData();
           dispatch({
               type:TYPES.LIST_DATA,
               data:result.data.poilist,
               page
           });
           dispatch({
                type:CHANGEREADYSTATE,
                payload:true
            })
        }
    }
}

export default contentList
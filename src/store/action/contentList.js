import * as TYPES from '../action-Type'
import {queryListData} from '../../api/contentList'

let contentList = {
    // getListData(){
    //     return {
    //         type:TYPES.LIST_DATA,
    //         payload:queryListData()
    //     }
    // }
    getListData(page){
        return async dispatch=> {
           let result = await queryListData();
           dispatch({
               type:TYPES.LIST_DATA,
               data:result.data.poilist,
               currentPage:page
           })
        }
    }
}

export default contentList
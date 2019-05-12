import * as TYPES from '../action-Type'
import {queryCateContentList,queryCateContentListFilter} from '../../../../api/category'
let contentList = {
    getListData(page){
        return async dispatch =>{
            let result = await queryCateContentList();
            dispatch({
                type:TYPES.GET_CATE_CONTENTLIST_DATA,
                data:result.data.poilist,
                page
            })
        }
    },
    getContentListFilterData(payload){

        return async dispatch=>{
            let result = await queryCateContentListFilter();
            dispatch({
                type:TYPES.GET_FILTER_CATE_CONTENTLIST_DATA,
                data: result.data,
                payload                
            })
        }
    }
}

export default contentList
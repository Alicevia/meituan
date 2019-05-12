import * as TYPES from '../action-Type'
import action from '../action';
import {TABKEY} from '../config'

let tabs = {};
tabs[TABKEY.cate]={
    key:TABKEY.cate,
    text:'全部分类',
    obj:{}
}

tabs[TABKEY.type]={
    key:TABKEY.type,
    text:'综合排序',
    obj:{}
}
tabs[TABKEY.filter]={
    key:TABKEY.filter,
    text:'筛选',
    obj:{}
}

export default function header(state={
    tabs,
    activeKey:TABKEY.cate,
    filterData:{},
    closePanel:true
},action){
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.CHANGE_TAB:
            state.activeKey = action.payload.key;
            state.closePanel = action.payload.closePanel;
            break;
        case TYPES.GET_FILTER_DATA:
            state.filterData = action.data;
            break;
        case TYPES.CHANGE_FILTER:
            state.tabs[action.payload.key]={
                key:action.payload.key,
                text:action.payload.item.name,
                obj:action.payload.item
            }
            break;
    }
    return state
}

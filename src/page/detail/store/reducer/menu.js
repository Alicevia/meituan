import * as TYPES from '../action-Type'
import action from '../action'







export default function menu(state={
    listData:{},
    currentLeftIndex:0,
    showChooseContent:false

},action){
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case TYPES.GET_LIST_DATA:
            state.listData = action.data
            break; 
        case TYPES.LEFT_CLICK:
            state.currentLeftIndex = action.payload.currentLeftIndex
            break;
        case TYPES.ADD_SELECT_ITEM:
            
            let list1 = state.listData.food_spu_tags;
            let currentItem1 = list1[state.currentLeftIndex];
            currentItem1.spus[action.payload.index].chooseCount++;

            break;
        case TYPES.MINUS_SELECT_ITEM:
            let list2 = state.listData.food_spu_tags;
            let currentItem2 = list2[state.currentLeftIndex];
            currentItem2.spus[action.payload.index].chooseCount--;
            break;
        case TYPES.SHOW_CHOOSE_CONTENT:
            state.showChooseContent = action.payload.flag
            break;
        case TYPES.CLEAR_CAR:
            state.showChooseContent = action.payload.flag;
            let listData = state.listData;
            let list3 = listData.food_spu_tags||[];
            for (let i = 0; i < list3.length; i++) {
              let spus1 = list3[i].spus||[];
              for (let j = 0; j < spus1.length; j++) {
                   spus1[j].chooseCount=0; 
              }               
            }
            
          
            break;
    }
    return state
}
import * as TYPES from '../action-Type'
import action from '../action';
import {TABKEY} from '../config'
export default function tabReducer(state={
    tabs:[
        {
            name:'点菜',
            key:TABKEY.menu
        },
        {
            name:'评价',
            key:TABKEY.comment
        },
        {
            name:'商家',
            key:TABKEY.restanurant
        }
    ]
},action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
    
    }
    return state
}

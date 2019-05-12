import {CHANGEREADYSTATE} from './action-Types'

export default function scrollView(state={
    readyToLoad:true
},action){
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case CHANGEREADYSTATE:
        state.readyToLoad = action.payload
        console.log(action.payload)
    }
    return state
}
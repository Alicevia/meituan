import * as TYPES from '../action-Type'

let tabAction = {
    changeTab(payload) {
       return {
           type:TYPES.CHANGETAB,
           payload
       }
   }
    
}

export default tabAction
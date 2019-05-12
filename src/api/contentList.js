import axios from './index1'

export function queryListData(){
    return axios.get('http://localhost:3000/json/homelist.json')
}
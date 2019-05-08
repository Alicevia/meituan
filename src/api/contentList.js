import axios from './index'

export function queryListData(){
    return axios.get('http://localhost:3000/json/homelist.json')
}
import axios from './index'

export function queryHeaderData(){
    return axios.get('http://localhost:3000/json/head.json');
}
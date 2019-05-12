import axios from './index1'

export function queryHeaderData(){
    return axios.get('http://localhost:3000/json/head.json');
}

export function queryCateContentList(){
    return axios.get('http://localhost:3000/json/list.json');
}

export function queryCateContentListFilter(){
    return axios.get('http://localhost:3000/json/listparams.json');
}
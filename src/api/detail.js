import axios from './index1'

export function queryListData(){
    return axios.get('http://localhost:3000/json/food.json')
}

export function queryRestanurant(){
    return axios.get('http://localhost:3000/json/restanurant.json')
}

export function queryComment(){
    return axios.get('http://localhost:3000/json/comments.json')
}
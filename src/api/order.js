import axios from './index'

export function queryOrderData(){
    return axios.get('http://localhost:3000/json/orders.json')
}
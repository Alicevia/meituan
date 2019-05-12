import axios from './index1'

export function queryOrderData(){
    return axios.get('http://localhost:3000/json/orders.json')
}
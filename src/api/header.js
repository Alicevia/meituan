import axios from './index1'

export function queryFilterData(){
    return axios.get('http://localhost:3000/json/filter.json');
}
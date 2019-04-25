import axios from 'axios';


const initialState = {
    user: {}
}
const GET_DATA = 'GET_DATA';

export function getData() {
    let res = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: GET_DATA,
        payload: res
    }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA + '_FULFILLED':
          return {user: action.payload }   
        default:
            return state;
    }
}

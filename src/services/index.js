import axios from 'axios';
import _ from 'lodash';

export default function fireAjax (method, URL, data, api) {
    if(method === 'POST') {
         let headers = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': sessionStorage.getItem('token') == null ? '' : sessionStorage.getItem('token')
            }
        }
        return axios.post( URL, data, headers );
    } else if (method === 'GET') {
        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': sessionStorage.getItem('token') == null ? '' : sessionStorage.getItem('token')
            }
        }
        return axios.get( URL, headers );
    }
}

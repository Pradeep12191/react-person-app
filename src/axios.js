import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://103.207.4.72:18082/sample_api/webapi/resource/',
    headers: {
        Authorization: 'cHJhZGVlcDoxMjM0NTY='
    }
});

export default axios
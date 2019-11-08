import axios from '../../axios';

export const getPersons = () => {
    return axios.get('/person_data').then(res => res.data)
}
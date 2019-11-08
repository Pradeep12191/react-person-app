import { getPersons } from '../person.api';

export const FETCH_PERSONS = 'FETCH_PERSONS';
export const STORE_PERSONS = 'STORE_PERSONS';

// async
export const fetchPersons = () => {
    return (dispatch) => {
        getPersons().then(res => {
            dispatch(storePersons(res))
        })
    }
    
}

// sync
export const storePersons = (vehicles) => {
    return {
        type: STORE_PERSONS,
        payload: vehicles
    }
}
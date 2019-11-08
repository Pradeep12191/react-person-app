
import * as actions from '../containers/PersonList/store/actions'

const intialState = {
    persons: []
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.STORE_PERSONS:
            return {
                ...state,
                persons : [...action.payload]
            }
    }
    return state;
}

export default reducer;
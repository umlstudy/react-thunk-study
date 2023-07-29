// reducers.ts
import {
    DataActionTypes,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
} from './actions';

export interface DataState {
    data: string[];
    loading: boolean;
    error: string | null;
}

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
};

const reducer = (
    state = initialState,
    action: DataActionTypes
): DataState => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;

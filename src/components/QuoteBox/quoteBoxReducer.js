import {
    FETCH_QUOTE_BEGIN,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
} from './quoteBoxActions';

const initialState = {
    quote: '',
    author: '',
    loading: false,
    error: null
};

export default function quotesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUOTE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                quote: action.payload.quote,
                author: action.payload.author
            };
        case FETCH_QUOTE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                quote: '',
                author: ''
            };
        default:
            return state;
    }
}
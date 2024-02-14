export const FETCH_QUOTE_BEGIN = 'FETCH_QUOTE_BEGIN';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

export const fetchQuoteBegin = () => ({
    type: FETCH_QUOTE_BEGIN
});

export const fetchQuoteSuccess = (quote, author) => ({
    type: FETCH_QUOTE_SUCCESS,
    payload: { quote, author }
});

export const fetchQuoteFailure = (error) => ({
    type: FETCH_QUOTE_FAILURE,
    payload: { error }
});

export function fetchNewQuote() {
    return dispatch => {
        dispatch(fetchQuoteBegin());
        fetch("https://api.quotable.io/quotes/random")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchQuoteSuccess(json[0].content, json[0].author));
                return json;
            })
            .catch(error => dispatch(fetchQuoteFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewQuote } from './quoteBoxActions';
import QuoteBlock from './QuoteBlock/QuoteBlockComponent';
import NewQuoteButton from './NewQuoteButton/NewQuoteButtonComponent';
import TweetQuoteButton from './TweetQuoteButton/TweetQuoteButtonComponent';
import './QuoteBoxStyle.scss';

const QuoteBox = () => {
    const dispatch = useDispatch();
    const { quote, author } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchNewQuote());
    }, [dispatch]);

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card" id="quote-box">
                <div className="card-body">
                    <QuoteBlock quote={quote} author={author} />
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between my-2">
                        <NewQuoteButton onClick={() => dispatch(fetchNewQuote())} />
                        <TweetQuoteButton text={quote} author={author} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;
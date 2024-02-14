import React from 'react';
import QuoteText from './QuoteText/QuoteTextComponent';
import QuoteAuthor from './QuoteAuthor/QuoteAuthorComponent';

const QuoteBlock = ({ quote, author }) => {
    return (
        <blockquote className="blockquote mb-0">
            <QuoteText text={quote} />
            <QuoteAuthor author={author} />
        </blockquote>
    );
};

export default QuoteBlock;
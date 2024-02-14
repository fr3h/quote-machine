import React from 'react';

const QuoteAuthor = ({ author }) => {
    return (
        <footer id="author" className="blockquote-footer text-end mt-3">{author}</footer>
    );
};

export default QuoteAuthor;
import React from 'react';

const NewQuoteButton = ({ onClick }) => {
    return (
        <button id="new-quote" className="btn btn-primary" onClick={onClick}>
            <i className="fas fa-quote-left"></i> New Quote
        </button>
    );
};

export default NewQuoteButton;
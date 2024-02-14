import React from 'react';

const TweetQuoteButton = ({ text, author }) => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(text)}" - ${encodeURIComponent(author)}`;

    return (
        <a id="tweet-quote" className="btn btn-info" href={tweetUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Tweet
        </a>
    );
};

export default TweetQuoteButton;
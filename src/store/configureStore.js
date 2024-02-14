import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../components/QuoteBox/quoteBoxReducer';

export default function configureAppStore(initialState = {}) {
    return configureStore({
        reducer: quotesReducer,
        preloadedState: initialState,
    });
}
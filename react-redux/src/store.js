import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './store/reducers/CounterReducer';   

const store = configureStore({
    reducer: {
        counter: CounterReducer,
    }
});

export default store;   
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk),
    )
);
export type AppDispatch = typeof store.dispatch;
export default store;
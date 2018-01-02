/*
 * Create by suliang on 2018.01.02
 * */
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import app from './reducers/app';

const middleware = [thunk];

const reducer = combineReducers({
    app:app
});

export default createStore(reducer, applyMiddleware(...middleware, logger));
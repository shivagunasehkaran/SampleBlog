import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const middleware = applyMiddleware(thunk);

import serviceReducer from './ServiceReducer';

const AppReducers = combineReducers({
    serviceReducer,
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
};

const logger = createLogger();

let store = createStore(rootReducer, compose(middleware));

export default store;

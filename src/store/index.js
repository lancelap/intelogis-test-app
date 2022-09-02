import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import requests from './slices/requests';
import addresses from './slices/addresses';
import sagas from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        requests,
        addresses,
    },
    middleware,
});

sagaMiddleware.run(sagas);

export default store;

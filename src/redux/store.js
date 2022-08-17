import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './userSagas';

const preloadedState = {};

//middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);
  return store;
};
export default createStore;

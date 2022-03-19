import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from 'store/sagas/rootReducer';
import rootSagas from 'store/sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

let middlewares = [createSagaMiddleware()];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof rootReducer>;

const persistor = persistStore(store);
middlewares[0].run(rootSagas);

export {store, persistor};

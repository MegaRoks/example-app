import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { userReducer } from './reducers/user/user.reducer';
import { loaderReducer } from './reducers/loader/loader.reducer';
import { rootSaga } from './sagas/rootSaga';

const rootReducer = combineReducers({
    userState: userReducer,
    loaderState: loaderReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, compose(composeEnhancers));

sagaMiddleware.run(rootSaga);

export type RootStateType = ReturnType<typeof rootReducer>;
export { store };

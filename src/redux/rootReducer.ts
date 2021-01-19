import { combineReducers, createStore } from 'redux';

import { userReducer } from './reducers/user/user.reducer';
import { loaderReducer } from './reducers/loader/loader.reducer';
import { composeEnhancers } from './middlewares';

const rootReducer = combineReducers({
    userState: userReducer,
    loaderState: loaderReducer,
});

export const store = createStore(rootReducer, composeEnhancers);

export type RootStateType = ReturnType<typeof rootReducer>;

import { combineReducers, createStore } from 'redux';

import { composeEnhancers } from './middlewares';
import { userReducer } from './reducers/user/user.reducer';
import { loaderReducer } from './reducers/loader/loader.reducer';
import { signInReducer } from './reducers/signIn/signIn.reducer';

const rootReducer = combineReducers({
    userState: userReducer,
    loaderState: loaderReducer,
    signInState: signInReducer,
});

export const store = createStore(rootReducer, composeEnhancers);

export type RootStateType = ReturnType<typeof rootReducer>;

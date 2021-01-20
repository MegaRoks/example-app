import { ActionHandlerType } from '../interface';
import { ISignInActionCreator, ISignInState } from './signIn.interface';
import { SING_IN_TYPE } from './signIn.type';

const initialState: ISignInState = {
    error: null,
    loading: false,
    auth: false,
    token: null,
};

const ACTION_HANDLERS: ActionHandlerType<ISignInState, ISignInActionCreator<ISignInState>> = {
    [SING_IN_TYPE.SIGN_IN_LOADING]: (
        state: ISignInState,
        action: ISignInActionCreator<ISignInState>,
    ) => ({
        ...state,
        loading: action.payload?.loading,
    }),
    [SING_IN_TYPE.SIGN_IN_SUCCESS]: (
        state: ISignInState,
        action: ISignInActionCreator<ISignInState>,
    ) => ({
        ...state,
        error: null,
        auth: true,
        token: action.payload.token,
    }),
    [SING_IN_TYPE.SIGN_IN_FAILURE]: (
        state: ISignInState,
        action: ISignInActionCreator<ISignInState>,
    ) => ({
        ...state,
        error: action.payload?.error,
        auth: false,
        token: null,
    }),
};

export const signInReducer = (
    state: ISignInState = initialState,
    action: ISignInActionCreator<ISignInState>,
): ISignInState => {
    return ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;
};

import { IUserActionCreator, IUserState } from './user.interface';
import { AUTH_TYPE } from './user.type';

const initialState: IUserState = {
    token: null,
    user: null,
    error: null,
};

const ACTION_HANDLERS: Record<string, any> = {
    [AUTH_TYPE.SIGN_IN_SUCCESS]: (state: IUserState, action: IUserActionCreator<IUserState>) => ({
        ...state,
        token: action.payload?.token,
        user: action.payload?.user,
        error: null,
    }),
    [AUTH_TYPE.SIGN_IN_FAILURE]: (state: IUserState, action: IUserActionCreator<IUserState>) => ({
        ...state,
        token: null,
        user: null,
        error: action.payload?.error,
    }),
};

export const userReducer = (
    state: IUserState = initialState,
    action: IUserActionCreator<IUserState>,
): IUserState => {
    return ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;
};

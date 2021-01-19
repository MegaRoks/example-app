import { IUserActionCreator, IUserState } from './user.interface';
import { AUTH_TYPE } from './user.type';

const initialState: IUserState = {
    token: null,
    user: null,
    error: null,
};

export const userReducer = (
    state: IUserState = initialState,
    action: IUserActionCreator<IUserState>,
): IUserState => {
    switch (action.type) {
        case AUTH_TYPE.SIGN_IN_SUCCESS:
            return {
                ...state,
                token: action.payload?.token,
                user: action.payload?.user,
                error: null,
            };
        case AUTH_TYPE.SIGN_IN_FAILURE:
            return {
                ...state,
                token: null,
                user: null,
                error: action.payload?.error,
            };
        default:
            return state;
    }
};

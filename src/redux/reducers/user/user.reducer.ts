import { IUserActionCreator, IUserState } from './user.interface';
import { USER_TYPE } from './user.type';

const initialState: IUserState = {
    user: null,
};

type ActionHandlerType<S, A> = Record<string, (state: S, action: A) => S>;

const ACTION_HANDLERS: ActionHandlerType<IUserState, IUserActionCreator<IUserState>> = {
    [USER_TYPE.SAVE_USER]: (state: IUserState, action: IUserActionCreator<IUserState>) => ({
        ...state,
        user: action.payload.user,
    }),
};

export const userReducer = (
    state: IUserState = initialState,
    action: IUserActionCreator<IUserState>,
): IUserState => {
    return ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;
};

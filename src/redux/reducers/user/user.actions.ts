import {
    ISignInFailurePayload,
    ISignInSuccessPayload,
    IUserActionCreator,
    IUserCredentialsPayload,
} from './user.interface';
import { AUTH_TYPE } from './user.type';

export const signInStart = (
    payload: IUserCredentialsPayload,
): IUserActionCreator<IUserCredentialsPayload> => ({
    type: AUTH_TYPE.SIGN_IN_START,
    payload: payload,
});

export const signInSuccess = (
    payload: ISignInSuccessPayload,
): IUserActionCreator<ISignInSuccessPayload> => ({
    type: AUTH_TYPE.SIGN_IN_SUCCESS,
    payload,
});

export const signInFailure = (
    payload: ISignInFailurePayload,
): IUserActionCreator<ISignInFailurePayload> => ({
    type: AUTH_TYPE.SIGN_IN_FAILURE,
    payload,
});

export const checkUserSession = () => ({
    type: AUTH_TYPE.CHECK_USER_SESSION,
});

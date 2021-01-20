import {
    ISgnInDataPayload,
    ISignInActionCreator,
    ISignInFailurePayload,
    ISignInLoadingPayload,
    ISignInSuccessPayload,
} from './signIn.interface';
import { SING_IN_TYPE } from './signIn.type';

export const signInStart = (
    payload: ISgnInDataPayload,
): ISignInActionCreator<ISgnInDataPayload> => ({
    type: SING_IN_TYPE.SIGN_IN_START,
    payload,
});

export const signInLoader = (
    payload: ISignInLoadingPayload,
): ISignInActionCreator<ISignInLoadingPayload> => ({
    type: SING_IN_TYPE.SIGN_IN_LOADING,
    payload,
});

export const signInSuccess = (
    payload: ISignInSuccessPayload,
): ISignInActionCreator<ISignInSuccessPayload> => ({
    type: SING_IN_TYPE.SIGN_IN_SUCCESS,
    payload,
});

export const signInFailure = (
    payload: ISignInFailurePayload,
): ISignInActionCreator<ISignInFailurePayload> => ({
    type: SING_IN_TYPE.SIGN_IN_FAILURE,
    payload,
});

export const checkUserSession = () => ({
    type: SING_IN_TYPE.CHECK_USER_SESSION,
});

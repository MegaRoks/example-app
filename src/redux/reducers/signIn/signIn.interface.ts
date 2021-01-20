import { INavigation } from '../../../hooks/useStep';

export interface ISignInSuccessPayload {
    readonly token: string;
}

export interface ISignInFailurePayload {
    readonly error: string;
}

export interface ISignInLoadingPayload {
    readonly loading: boolean;
}

export interface ISignInState {
    readonly error: string | null;
    readonly auth: boolean;
    readonly loading: boolean;
    readonly token: string | null;
}

export interface ISignInActionCreator<T> {
    readonly type: string;
    readonly payload: T;
}

export interface ISgnInDataPayload {
    readonly email: string;
    readonly password: string;
    readonly isSafeAuth: boolean;
    readonly navigation: INavigation;
}

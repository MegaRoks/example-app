import { INavigation } from '../../../utils/useStep';
import { IUser } from './../../../interfaces/user.interface';

export interface ISignInSuccessPayload {
    readonly token: string;
    readonly user: IUser;
}

export interface ISignInFailurePayload {
    readonly error: string;
}

export interface IUserCredentialsPayload {
    readonly email: string;
    readonly password: string;
    readonly isSafeAuth: boolean;
    readonly navigation: INavigation;
}

export interface IUserState {
    readonly token: string | null;
    readonly user: IUser | null;
    readonly error: string | null;
}

export interface IUserActionCreator<T> {
    readonly type: string;
    readonly payload: T;
}

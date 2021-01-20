import { IUser } from './../../../interfaces/user.interface';

export interface IUserPayload {
    readonly user: IUser;
}

export interface IUserState {
    readonly user: IUser | null;
}

export interface IUserActionCreator<T> {
    readonly type: string;
    readonly payload: T;
}

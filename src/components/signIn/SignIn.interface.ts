import { IAuthData } from './../../pages/auth/Auth.interface';

export interface ISignInProps {
    onClick(body: IAuthData): void;
}

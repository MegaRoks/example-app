import { RouteComponentProps } from 'react-router-dom';

export interface IAuthProps extends RouteComponentProps {}

export interface IAuthData {
    readonly email: string;
    readonly password: string;
    readonly isSafeAuth: boolean;
}

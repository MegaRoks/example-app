import { IUserActionCreator, IUserCredentialsPayload } from './../../reducers/user/user.interface';

export interface IUserSaga extends IUserActionCreator<IUserCredentialsPayload> {}

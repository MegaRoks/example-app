import { ISgnInDataPayload, ISignInActionCreator } from '../../reducers/signIn/signIn.interface';

export interface ISignInSaga extends ISignInActionCreator<ISgnInDataPayload> {}

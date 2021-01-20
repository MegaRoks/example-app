import { IUserActionCreator, IUserPayload } from './user.interface';
import { USER_TYPE } from './user.type';

export const saveUserData = (payload: IUserPayload): IUserActionCreator<IUserPayload> => ({
    type: USER_TYPE.SAVE_USER,
    payload,
});

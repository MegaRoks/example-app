import { useSelector } from 'react-redux';

import { RootStateType } from '../../rootReducer';
import { userReducer } from './user.reducer';

export type userReducerType = ReturnType<typeof userReducer>;

export function useUserSelector(): userReducerType {
    return useSelector(({ userState }: RootStateType) => userState);
}

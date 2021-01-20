import { useSelector } from 'react-redux';

import { RootStateType } from '../../rootReducer';
import { signInReducer } from './signIn.reducer';

export type userReducerType = ReturnType<typeof signInReducer>;

export function useSignInSelector(): userReducerType {
    return useSelector(({ signInState }: RootStateType) => signInState);
}

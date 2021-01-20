import { takeLatest, put, call, all } from 'redux-saga/effects';

import { ISignInSaga } from './signIn.interface';
import { signInFailure, signInLoader, signInSuccess } from '../../reducers/signIn/signIn.action';
import { SING_IN_TYPE } from '../../reducers/signIn/signIn.type';
import { instanceAxios } from './../../../utils/axios';

function* signIn({ payload: { email, password, isSafeAuth, navigation } }: ISignInSaga) {
    try {
        yield put(signInLoader({ loading: true }));

        console.log({ email, password, isSafeAuth });

        const { data } = yield instanceAxios().post('/auth/authentication', { email, password });

        console.log('data', data);

        yield put(signInSuccess(data.authToken));

        if (isSafeAuth) {
            localStorage.setItem('isChecked', JSON.stringify(JSON.stringify(isSafeAuth)));
        } else {
            sessionStorage.setItem('isChecked', JSON.stringify(JSON.stringify(isSafeAuth)));
        }

        yield navigation.next();
        yield put(signInLoader({ loading: false }));
    } catch (error) {
        const data = { error: 'User not found' };

        yield put(signInFailure(data));
    }
}

function* isUserAuthenticated() {
    try {
        yield put(signInLoader({ loading: true }));

        const isCheckedFromLocalStorage = Boolean(localStorage.getItem('isChecked'));
        const isCheckedFromSessionStorage = Boolean(sessionStorage.getItem('isChecked'));

        if (isCheckedFromLocalStorage || isCheckedFromSessionStorage) {
            const data = yield call(fetchUser, 2000);
            yield put(signInSuccess(data));
        }

        yield put(signInLoader({ loading: false }));
    } catch (error) {
        yield put(signInFailure(error.response.data.error));
    }
}

function* onSignInStart() {
    yield takeLatest(SING_IN_TYPE.SIGN_IN_START, signIn);
}

function* onCheckUserSession() {
    yield takeLatest(SING_IN_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

const fetchUser = (time: number) =>
    new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                token: '1234567',
                user: {
                    name: 'Maxim',
                    age: 26,
                },
            };
            resolve(data);
        }, time);
    });

export function* signInSaga() {
    yield all([call(onSignInStart), call(onCheckUserSession)]);
}

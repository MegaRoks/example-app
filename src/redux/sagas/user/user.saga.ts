import { takeLatest, put, call, all } from 'redux-saga/effects';

import { AUTH_TYPE } from './../../reducers/user/user.type';
import { signInFailure, signInSuccess } from './../../reducers/user/user.actions';
import { hideLoader, showLoader } from './../../reducers/loader/loader.actions';
import { IUserSaga } from './user.interface';

function* signInAsync({ payload: { email, password, isSafeAuth, navigation } }: IUserSaga) {
    try {
        console.log({ email, password, isSafeAuth, navigation });

        yield put(showLoader());
        const data = yield call(fetchUser, 2000);
        yield put(signInSuccess(data));

        if (isSafeAuth) {
            localStorage.setItem('isChecked', JSON.stringify(JSON.stringify(isSafeAuth)));
        } else {
            sessionStorage.setItem('isChecked', JSON.stringify(JSON.stringify(isSafeAuth)));
        }

        yield put(hideLoader());
        yield navigation.next();
    } catch (error) {
        const data = { error: 'User not found' };

        yield put(signInFailure(data));
    }
}

function* isUserAuthenticated() {
    try {
        yield put(showLoader());

        const isCheckedFromLocalStorage = Boolean(localStorage.getItem('isChecked'));
        const isCheckedFromSessionStorage = Boolean(sessionStorage.getItem('isChecked'));

        if (isCheckedFromLocalStorage || isCheckedFromSessionStorage) {
            const data = yield call(fetchUser, 2000);
            yield put(signInSuccess(data));
        }

        yield put(hideLoader());
    } catch (error) {
        yield put(signInFailure(error.response.data.error));
    }
}

function* onSignInStart() {
    yield takeLatest(AUTH_TYPE.SIGN_IN_START, signInAsync);
}

function* onCheckUserSession() {
    yield takeLatest(AUTH_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
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

export function* userSaga() {
    yield all([call(onSignInStart), call(onCheckUserSession)]);
}

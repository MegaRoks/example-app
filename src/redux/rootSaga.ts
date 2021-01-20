import { call, all } from 'redux-saga/effects';

import { signInSaga } from './sagas/signIn/signIn.saga';

export function* rootSaga() {
    yield all([call(signInSaga)]);
}

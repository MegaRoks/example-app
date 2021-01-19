import { call, all } from 'redux-saga/effects';

import { userSaga } from './sagas/user/user.saga';

export function* rootSaga() {
    yield all([call(userSaga)]);
}

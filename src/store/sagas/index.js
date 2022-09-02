import { all } from 'redux-saga/effects';
import userSagas from './addresses';

export default function* rootSaga() {
    yield all([...userSagas]);
}

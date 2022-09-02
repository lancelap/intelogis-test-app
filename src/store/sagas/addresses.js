import { takeLatest, call, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import { getAddressesRequest, getAddressesSuccess } from '../slices/addresses/actions';

let callAPI = async ({ url, method, data }) => {
    return await axios({
        url,
        method,
        data,
    });
};

function* getAddresses() {
    try {
        const result = yield call(() =>
            callAPI({ url: 'https://63110be419eb631f9d6c286a.mockapi.io/api/v1/requests' }),
        );
        yield put(getAddressesSuccess(result.data));
    } catch (error) {
        console.error(error);
    }
}

function* watchGetAddressesRequest() {
    yield takeLatest(getAddressesRequest.type, getAddresses);
}

const userSagas = [fork(watchGetAddressesRequest)];

export default userSagas;

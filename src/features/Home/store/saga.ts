import {requestRestaurantInfoFirebase} from '../api';
import {takeLatest, all, put, call} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/types';
import {request, success, error} from './reducer';

function* requestRestaurant(): SagaIterator {
  try {
    const response = yield call(requestRestaurantInfoFirebase);
    yield put(success(response));
  } catch (er) {
    yield put(error());
  }
}

export default function* authSaga() {
  yield all([takeLatest(request, requestRestaurant)]);
}

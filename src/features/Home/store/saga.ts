import {takeLatest, all, fork, put} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/types';
import {request, success} from './reducer';
import {IRequestHome} from './model';

function* setUserLogin({payload}: IRequestHome): SagaIterator {
  console.log('payload', payload); // this way you can get access to {userName: string, password: string}
  yield put(
    success({
      id: '123',
      firstName: 'Emilio',
      lastName: 'Ramirez',
      email: 'test@gmail.com',
    }),
  );
}

function* requestLogin() {
  yield takeLatest(request, setUserLogin);
}

export default function* authSaga() {
  yield all([fork(requestLogin)]);
}

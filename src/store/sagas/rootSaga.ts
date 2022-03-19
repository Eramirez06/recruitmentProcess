import {all, fork} from '@redux-saga/core/effects';
import homeSaga from 'features/Home/store/saga';

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}

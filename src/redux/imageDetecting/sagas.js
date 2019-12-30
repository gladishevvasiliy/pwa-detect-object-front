import { put, call, takeEvery, takeLast } from 'redux-saga/effects'
import { delay } from '../../utils';
import {
  imageDetectingLoading,
  imageDetectingLoadingSuccess,
  imageDetectingLoadingFailed,
} from './reducer';

export function* watchImageDetectingLoadingSaga() {
  yield takeEvery('imageDetecting/imageDetectingLoading', imageDetectingLoadingSaga);
}

function* imageDetectingLoadingSaga(action) {
  console.log({ action })

  try {
    const data = yield call(() => {
      return delay({ objectName: 'cup' })
      // return fetch('')
      //   .then(res => {
      //     return res.json()
      //   }).then(data => data)
    })
    console.log({ data })
    yield put(imageDetectingLoadingSuccess(data));
  } catch (error) {
    yield put(imageDetectingLoadingFailed());
  }
}
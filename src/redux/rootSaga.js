import { all } from 'redux-saga/effects'

import { watchImageDetectingLoadingSaga } from './imageDetecting/sagas'


export default function* rootSaga() {
  yield all([
    watchImageDetectingLoadingSaga(),
  ])
}
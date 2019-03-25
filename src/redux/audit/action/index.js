import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import { CONFIG } from '../../../config/index';

export function* createAuditRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.createAuditClear())
  } else {
    try {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var now = new Date();
      let month = months[now.getMonth()]
      let dateNow = new Date();
      let finalDate = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`
      const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.AUDIT}/add`, {
        invId: action.payload.invId,
        comment: action.payload.comment,
        status: action.payload.status,
        date: finalDate,
        month: month
      });
      if (response.data.code === 2000) {
        yield put(actions.getAssignedInvRequest('data'));
        yield put(actions.createAuditSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.createAuditError(response.data));
      }
    } catch (e) {
      yield put(actions.createAuditError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}

export function* getAuditRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.getAuditClear())
  } else {
    try {
      const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.AUDIT}`, {
      });
      if (response.data.code === 2000) {
        yield put(actions.getAuditSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.getAuditError(response.data));
      }
    } catch (e) {
      yield put(actions.getAuditError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}

export function* getUnAuditedRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.getUnAuditedClear())
  } else {
    try {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var now = new Date();
      let month = months[now.getMonth()]
      const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.AUDIT}/unaudited/${month}`, {
      });
      if (response.data.code === 2000) {
        yield put(actions.getUnAuditedSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.getUnAuditedError(response.data));
      }
    } catch (e) {
      yield put(actions.getUnAuditedError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}

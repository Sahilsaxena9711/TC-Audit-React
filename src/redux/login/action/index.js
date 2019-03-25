import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* loginRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.EMPLOYEE}/login`, {
      'empId': action.payload.empId,
      'password': action.payload.password
    });
    if (response.data.code === 2000) {
      sessionStorage.setItem('token', response.data.data.data.tokens[0].token )
      yield put(actions.userLoginSuccess(response.data));
    } else if (response.data.code == 4000 || response.data.code == 4010) {
      yield put(actions.userLoginError(response.data));
    }
  } catch (e) {
    yield put(actions.userLoginError('Error Occurs !!'));
    console.warn('Some error found in "logingRequest" action\n', e);
  }
}

export function* allEmpRequest (action) {
  if(action.payload == undefined){
    yield put(actions.allEmpClear());
  }else{
    try {
      const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.EMPLOYEE}/all`, {
      });
      if (response.data.code === 2000) {
        yield put(actions.allEmpSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.allEmpError(response.data));
      }
    } catch (e) {
      yield put(actions.allEmpError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}

export function* changePasswordRequest (action) {
  if(action.payload == undefined){
    yield put(actions.changePasswordClear());
  }else{
    try {
      const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.EMPLOYEE}/changePassword`, {
        'oldPassword': action.payload.oldpassword,
        'newPassword': action.payload.newpassword
      });
      if (response.data.code === 2000) {
        yield put(actions.changePasswordSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.changePasswordError(response.data));
      }
    } catch (e) {
      yield put(actions.changePasswordError('Error Occurs !!'));
      console.warn('Some error found in "changePasswordgRequest" action\n', e);
    }
  }
}
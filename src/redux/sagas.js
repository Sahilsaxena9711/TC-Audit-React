import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { changePasswordRequest, allEmpRequest, loginRequest } from './login/action/';
import { getUnAssignedInvRequest, assignInvRequest, allInvRequest, addMyInvRequest, editInvRequest, addInvRequest, getAssignedInvRequest } from './inventory/action'
import { createAuditRequest, getUnAuditedRequest, getAuditRequest } from './audit/action'
import { addRequirementRequest, approveRequirementRequest, getRequirementRequest} from './requirement/action'
export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.ALL_EMP_REQUEST, allEmpRequest);
  yield takeLatest(constants.CHANGE_PASSWORD_REQUEST, changePasswordRequest);
  yield takeLatest(constants.GET_ASSIGNED_INV_REQUEST, getAssignedInvRequest);
  yield takeLatest(constants.ADD_INV_REQUEST, addInvRequest);
  yield takeLatest(constants.EDIT_INV_REQUEST, editInvRequest);
  yield takeLatest(constants.ADD_MY_INV_REQUEST, addMyInvRequest);
  yield takeLatest(constants.ALL_INV_REQUEST, allInvRequest);
  yield takeLatest(constants.ASSIGN_INV_REQUEST, assignInvRequest);
  yield takeLatest(constants.CREATE_AUDIT_REQUEST, createAuditRequest);
  yield takeLatest(constants.GET_AUDIT_REQUEST, getAuditRequest);
  yield takeLatest(constants.GET_UNAUDITED_REQUEST, getUnAuditedRequest);
  yield takeLatest(constants.GET_UNASSIGNED_INV_REQUEST, getUnAssignedInvRequest);
  yield takeLatest(constants.GET_REQUIREMENT_REQUEST, getRequirementRequest);
  yield takeLatest(constants.APPROVE_REQUIREMENT_REQUEST, approveRequirementRequest);
  yield takeLatest(constants.ADD_REQUIREMENT_REQUEST, addRequirementRequest);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}

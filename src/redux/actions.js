import {createAction} from 'redux-actions';
import * as constants from './constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);

export const allEmpRequest = createAction(constants.ALL_EMP_REQUEST);
export const allEmpClear = createAction(constants.ALL_EMP_CLEAR);
export const allEmpSuccess = createAction(constants.ALL_EMP_SUCCESS);
export const allEmpError = createAction(constants.ALL_EMP_ERROR);

export const changePasswordRequest = createAction(constants.CHANGE_PASSWORD_REQUEST);
export const changePasswordClear = createAction(constants.CHANGE_PASSWORD_CLEAR);
export const changePasswordSuccess = createAction(constants.CHANGE_PASSWORD_SUCCESS);
export const changePasswordError = createAction(constants.CHANGE_PASSWORD_ERROR);

export const getAssignedInvRequest = createAction(constants.GET_ASSIGNED_INV_REQUEST);
export const getAssignedInvClear = createAction(constants.GET_ASSIGNED_INV_CLEAR);
export const getAssignedInvSuccess = createAction(constants.GET_ASSIGNED_INV_SUCCESS);
export const getAssignedInvError = createAction(constants.GET_ASSIGNED_INV_ERROR);

export const addInvRequest = createAction(constants.ADD_INV_REQUEST);
export const addInvClear = createAction(constants.ADD_INV_CLEAR);
export const addInvSuccess = createAction(constants.ADD_INV_SUCCESS);
export const addInvError = createAction(constants.ADD_INV_ERROR);

export const editInvRequest = createAction(constants.EDIT_INV_REQUEST);
export const editInvClear = createAction(constants.EDIT_INV_CLEAR);
export const editInvSuccess = createAction(constants.EDIT_INV_SUCCESS);
export const editInvError = createAction(constants.EDIT_INV_ERROR);

export const addMyInvRequest = createAction(constants.ADD_MY_INV_REQUEST);
export const addMyInvClear = createAction(constants.ADD_MY_INV_CLEAR);
export const addMyInvSuccess = createAction(constants.ADD_MY_INV_SUCCESS);
export const addMyInvError = createAction(constants.ADD_MY_INV_ERROR);

export const allInvRequest = createAction(constants.ALL_INV_REQUEST);
export const allInvClear = createAction(constants.ALL_INV_CLEAR);
export const allInvSuccess = createAction(constants.ALL_INV_SUCCESS);
export const allInvError = createAction(constants.ALL_INV_ERROR);

export const assignInvRequest = createAction(constants.ASSIGN_INV_REQUEST);
export const assignInvClear = createAction(constants.ASSIGN_INV_CLEAR);
export const assignInvSuccess = createAction(constants.ASSIGN_INV_SUCCESS);
export const assignInvError = createAction(constants.ASSIGN_INV_ERROR);

export const createAuditRequest = createAction(constants.CREATE_AUDIT_REQUEST);
export const createAuditClear = createAction(constants.CREATE_AUDIT_CLEAR);
export const createAuditSuccess = createAction(constants.CREATE_AUDIT_SUCCESS);
export const createAuditError = createAction(constants.CREATE_AUDIT_ERROR);

export const getAuditRequest = createAction(constants.GET_AUDIT_REQUEST);
export const getAuditClear = createAction(constants.GET_AUDIT_CLEAR);
export const getAuditSuccess = createAction(constants.GET_AUDIT_SUCCESS);
export const getAuditError = createAction(constants.GET_AUDIT_ERROR);

export const getUnAuditedRequest = createAction(constants.GET_UNAUDITED_REQUEST);
export const getUnAuditedClear = createAction(constants.GET_UNAUDITED_CLEAR);
export const getUnAuditedSuccess = createAction(constants.GET_UNAUDITED_SUCCESS);
export const getUnAuditedError = createAction(constants.GET_UNAUDITED_ERROR);

export const getUnAssignedInvRequest = createAction(constants.GET_UNASSIGNED_INV_REQUEST);
export const getUnAssignedInvClear = createAction(constants.GET_UNASSIGNED_INV_CLEAR);
export const getUnAssignedInvSuccess = createAction(constants.GET_UNASSIGNED_INV_SUCCESS);
export const getUnAssignedInvError = createAction(constants.GET_UNASSIGNED_INV_ERROR);

export const getRequirementRequest = createAction(constants.GET_REQUIREMENT_REQUEST);
export const getRequirementClear = createAction(constants.GET_REQUIREMENT_CLEAR);
export const getRequirementSuccess = createAction(constants.GET_REQUIREMENT_SUCCESS);
export const getRequirementError = createAction(constants.GET_REQUIREMENT_ERROR);

export const approveRequirementRequest = createAction(constants.APPROVE_REQUIREMENT_REQUEST);
export const approveRequirementClear = createAction(constants.APPROVE_REQUIREMENT_CLEAR);
export const approveRequirementSuccess = createAction(constants.APPROVE_REQUIREMENT_SUCCESS);
export const approveRequirementError = createAction(constants.APPROVE_REQUIREMENT_ERROR);

export const addRequirementRequest = createAction(constants.ADD_REQUIREMENT_REQUEST);
export const addRequirementClear = createAction(constants.ADD_REQUIREMENT_CLEAR);
export const addRequirementSuccess = createAction(constants.ADD_REQUIREMENT_SUCCESS);
export const addRequirementError = createAction(constants.ADD_REQUIREMENT_ERROR);
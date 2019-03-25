import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  createAudit: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  getAudit: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  getUnAudited: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const createAuditRequest = (state, action) => update(state, {
  createAudit: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const createAuditSuccess = (state, action) => update(state, {
  createAudit: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const createAuditClear = (state, action) => update(state, {
  createAudit: {
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: false},
    message:    {$set: ''}
  }
});
const createAuditError = (state, action) => update(state, {
  createAudit: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

const getAuditRequest = (state, action) => update(state, {
  getAudit: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getAuditSuccess = (state, action) => update(state, {
  getAudit: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const getAuditClear = (state, action) => update(state, {
  getAudit: {
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: false},
    message:    {$set: ''}
  }
});
const getAuditError = (state, action) => update(state, {
  getAudit: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

const getUnAuditedRequest = (state, action) => update(state, {
  getUnAudited: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getUnAuditedSuccess = (state, action) => update(state, {
  getUnAudited: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const getUnAuditedClear = (state, action) => update(state, {
  getUnAudited: {
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: false},
    message:    {$set: ''}
  }
});
const getUnAuditedError = (state, action) => update(state, {
  getUnAudited: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

export default handleActions({
  [constants.CREATE_AUDIT_REQUEST]: createAuditRequest,
  [constants.CREATE_AUDIT_SUCCESS]: createAuditSuccess,
  [constants.CREATE_AUDIT_ERROR]:   createAuditError,
  [constants.CREATE_AUDIT_CLEAR]: createAuditClear,

  [constants.GET_AUDIT_REQUEST]: getAuditRequest,
  [constants.GET_AUDIT_SUCCESS]: getAuditSuccess,
  [constants.GET_AUDIT_ERROR]:   getAuditError,
  [constants.GET_AUDIT_CLEAR]: getAuditClear,

  [constants.GET_UNAUDITED_REQUEST]: getUnAuditedRequest,
  [constants.GET_UNAUDITED_SUCCESS]: getUnAuditedSuccess,
  [constants.GET_UNAUDITED_ERROR]:   getUnAuditedError,
  [constants.GET_UNAUDITED_CLEAR]: getUnAuditedClear,
}, initialState);

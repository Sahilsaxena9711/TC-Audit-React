import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  userLogin: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  allEmp: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  changePassword: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const userLoginRequest = (state, action) => update(state, {
  userLogin: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const userLoginSuccess = (state, action) => update(state, {
  userLogin: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});
const userLoginError = (state, action) => update(state, {
  userLogin: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Login Failed'}
  }
});

const allEmpRequest = (state, action) => update(state, {
  allEmp: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const allEmpSuccess = (state, action) => update(state, {
  allEmp: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});
const allEmpError = (state, action) => update(state, {
  allEmp: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Login Failed'}
  }
});
const allEmpClear = (state, action) => update(state, {
  allEmp: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: false},
    message:   {$set: ''}
  }
});


const changePasswordRequest = (state, action) => update(state, {
  changePassword: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const changePasswordSuccess = (state, action) => update(state, {
  changePassword: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'changePassword success'}
  }
});
const changePasswordError = (state, action) => update(state, {
  changePassword: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'changePassword Failed'}
  }
});
const changePasswordClear = (state, action) => update(state, {
  changePassword: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: false},
    message:   {$set: ''}
  }
});

export default handleActions({
  [constants.USER_LOGIN_REQUEST]: userLoginRequest,
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_ERROR]:   userLoginError,

  [constants.ALL_EMP_REQUEST]: allEmpRequest,
  [constants.ALL_EMP_CLEAR]: allEmpClear,
  [constants.ALL_EMP_SUCCESS]: allEmpSuccess,
  [constants.ALL_EMP_ERROR]:   allEmpError,

  [constants.CHANGE_PASSWORD_REQUEST]: changePasswordRequest,
  [constants.CHANGE_PASSWORD_CLEAR]: changePasswordClear,
  [constants.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [constants.CHANGE_PASSWORD_ERROR]:   changePasswordError,
}, initialState);

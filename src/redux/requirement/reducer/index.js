import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  getRequirement: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  approveRequirement: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
    addRequirement: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
};

const getRequirementRequest = (state, action) => update(state, {
  getRequirement: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getRequirementSuccess = (state, action) => update(state, {
  getRequirement: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const getRequirementClear = (state, action) => update(state, {
  getRequirement: {
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: false},
    message:    {$set: ''}
  }
});
const getRequirementError = (state, action) => update(state, {
  getRequirement: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});


const approveRequirementRequest = (state, action) => update(state, {
  approveRequirement: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const approveRequirementSuccess = (state, action) => update(state, {
  approveRequirement: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const approveRequirementClear = (state, action) => update(state, {
  approveRequirement: {
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: false},
    message:    {$set: ''}
  }
});
const approveRequirementError = (state, action) => update(state, {
  approveRequirement: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});


const addRequirementRequest = (state, action) => update(state, {
  addRequirement: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const addRequirementSuccess = (state, action) => update(state, {
  addRequirement: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const addRequirementClear = (state, action) => update(state, {
  addRequirement: {
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: false},
    message:    {$set: ''}
  }
});
const addRequirementError = (state, action) => update(state, {
  addRequirement: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});


export default handleActions({
  [constants.GET_REQUIREMENT_REQUEST]: getRequirementRequest,
  [constants.GET_REQUIREMENT_SUCCESS]: getRequirementSuccess,
  [constants.GET_REQUIREMENT_ERROR]:   getRequirementError,
  [constants.GET_REQUIREMENT_CLEAR]: getRequirementClear,

  [constants.APPROVE_REQUIREMENT_REQUEST]: approveRequirementRequest,
  [constants.APPROVE_REQUIREMENT_SUCCESS]: approveRequirementSuccess,
  [constants.APPROVE_REQUIREMENT_ERROR]:   approveRequirementError,
  [constants.APPROVE_REQUIREMENT_CLEAR]: approveRequirementClear,

  [constants.ADD_REQUIREMENT_REQUEST]: addRequirementRequest,
  [constants.ADD_REQUIREMENT_SUCCESS]: addRequirementSuccess,
  [constants.ADD_REQUIREMENT_ERROR]:   addRequirementError,
  [constants.ADD_REQUIREMENT_CLEAR]: addRequirementClear,

}, initialState);

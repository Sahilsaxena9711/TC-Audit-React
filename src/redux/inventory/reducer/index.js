import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  getAssignedInv: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  addInv: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  editInv: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  addMyInv: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  allInv: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  assignInv: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  getUnAssignedInv: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
};

const getAssignedInvRequest = (state, action) => update(state, {
  getAssignedInv: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const getAssignedInvClear = (state, action) => update(state, {
  getAssignedInv: {
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const getAssignedInvSuccess = (state, action) => update(state, {
  getAssignedInv: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const getAssignedInvError = (state, action) => update(state, {
  getAssignedInv: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

const addInvRequest = (state, action) => update(state, {
  addInv: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const addInvClear = (state, action) => update(state, {
  addInv: {
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const addInvSuccess = (state, action) => update(state, {
  addInv: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const addInvError = (state, action) => update(state, {
  addInv: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

const editInvRequest = (state, action) => update(state, {
  editInv: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const editInvClear = (state, action) => update(state, {
  editInv: {
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const editInvSuccess = (state, action) => update(state, {
  editInv: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const editInvError = (state, action) => update(state, {
  editInv: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

const addMyInvRequest = (state, action) => update(state, {
  addMyInv: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const addMyInvClear = (state, action) => update(state, {
  addMyInv: {
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const addMyInvSuccess = (state, action) => update(state, {
  addMyInv: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const addMyInvError = (state, action) => update(state, {
  addMyInv: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

const allInvRequest = (state, action) => update(state, {
  allInv: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const allInvSuccess = (state, action) => update(state, {
  allInv: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const allInvError = (state, action) => update(state, {
  allInv: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});
const allInvClear = (state, action) => update(state, {
  allInv: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: false},
    message:   {$set: ''}
  }
});

const assignInvRequest = (state, action) => update(state, {
  assignInv: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const assignInvSuccess = (state, action) => update(state, {
  assignInv: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const assignInvError = (state, action) => update(state, {
  assignInv: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});
const assignInvClear = (state, action) => update(state, {
  assignInv: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: false},
    message:   {$set: ''}
  }
});

const getUnAssignedInvRequest = (state, action) => update(state, {
  getUnAssignedInv: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const getUnAssignedInvClear = (state, action) => update(state, {
  getUnAssignedInv: {
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const getUnAssignedInvSuccess = (state, action) => update(state, {
  getUnAssignedInv: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Request success'}
  }
});
const getUnAssignedInvError = (state, action) => update(state, {
  getUnAssignedInv: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: 'Request Failed'}
  }
});

export default handleActions({
  [constants.GET_ASSIGNED_INV_REQUEST]: getAssignedInvRequest,
  [constants.GET_ASSIGNED_INV_SUCCESS]: getAssignedInvSuccess,
  [constants.GET_ASSIGNED_INV_ERROR]:   getAssignedInvError,
  [constants.GET_ASSIGNED_INV_CLEAR]:   getAssignedInvClear,

  [constants.ADD_INV_REQUEST]: addInvRequest,
  [constants.ADD_INV_SUCCESS]: addInvSuccess,
  [constants.ADD_INV_ERROR]:   addInvError,
  [constants.ADD_INV_CLEAR]:   addInvClear,

  [constants.EDIT_INV_REQUEST]: editInvRequest,
  [constants.EDIT_INV_SUCCESS]: editInvSuccess,
  [constants.EDIT_INV_ERROR]:   editInvError,
  [constants.EDIT_INV_CLEAR]:   editInvClear,

  [constants.ADD_MY_INV_REQUEST]: addMyInvRequest,
  [constants.ADD_MY_INV_SUCCESS]: addMyInvSuccess,
  [constants.ADD_MY_INV_ERROR]:   addMyInvError,
  [constants.ADD_MY_INV_CLEAR]:   addMyInvClear,

  [constants.ALL_INV_REQUEST]: allInvRequest,
  [constants.ALL_INV_CLEAR]: allInvClear,
  [constants.ALL_INV_SUCCESS]: allInvSuccess,
  [constants.ALL_INV_ERROR]:   allInvError,

  [constants.ASSIGN_INV_REQUEST]: assignInvRequest,
  [constants.ASSIGN_INV_CLEAR]: assignInvClear,
  [constants.ASSIGN_INV_SUCCESS]: assignInvSuccess,
  [constants.ASSIGN_INV_ERROR]:   assignInvError,

  [constants.GET_UNASSIGNED_INV_REQUEST]: getUnAssignedInvRequest,
  [constants.GET_UNASSIGNED_INV_SUCCESS]: getUnAssignedInvSuccess,
  [constants.GET_UNASSIGNED_INV_ERROR]:   getUnAssignedInvError,
  [constants.GET_UNASSIGNED_INV_CLEAR]:   getUnAssignedInvClear,

}, initialState);

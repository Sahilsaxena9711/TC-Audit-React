import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import { CONFIG } from '../../../config/index';

export function* getAssignedInvRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.getAssignedInvClear())
  } else {
    try {
      const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.INVENTORY}`, {
      });
      if (response.data.code === 2000) {
        yield put(actions.getAssignedInvSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.getAssignedInvError(response.data));
      }
    } catch (e) {
      yield put(actions.getAssignedInvError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}

export function* addInvRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.addInvClear())
  } else {
    try {
      const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.INVENTORY}/add`, {
        invId: action.payload.invId,
        empId: action.payload.empId,
        invName: action.payload.invName,
        invBrand: action.payload.invBrand,
        type: action.payload.type,
        name: action.payload.name,
        billImage: action.payload.billImage == "NA" ? "NA" : action.payload.billImage
      });
      if (response.data.code === 2000) {
        yield put(actions.addInvSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.addInvError(response.data));
      }
    } catch (e) {
      yield put(actions.addInvError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}

export function* editInvRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.editInvClear())
  } else {
    try {
      const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.INVENTORY}/edit`, {
        invId: action.payload.invId,
        id: action.payload.id,
        invName: action.payload.invName,
        invBrand: action.payload.invBrand,
        type: action.payload.type,
      });
      if (response.data.code === 2000) {
        yield put(actions.getAssignedInvRequest('data'));
        yield put(actions.editInvSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.editInvError(response.data));
      }
    } catch (e) {
      yield put(actions.editInvError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}



export function* addMyInvRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.addMyInvClear())
  } else {
    try {
      const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.INVENTORY}/emp/add`, {
        invId: action.payload.invId,
        empId: action.payload.empId,
        invName: action.payload.invName,
        invBrand: action.payload.invBrand,
        type: action.payload.type,
        name: action.payload.name,
        billImage: action.payload.billImage == "NA" ? "NA" : action.payload.billImage
      });
      if (response.data.code === 2000) {
        yield put(actions.addMyInvSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.addMyInvError(response.data));
      }
    } catch (e) {
      yield put(actions.addMyInvError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}


export function* allInvRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.allInvClear());
  } else {
    try {
      const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.INVENTORY}/all`, {
      });
      if (response.data.code === 2000) {
        yield put(actions.allInvSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.allInvError(response.data));
      }
    } catch (e) {
      yield put(actions.allInvError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}

export function* assignInvRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.assignInvClear());
  } else {
    try {
      const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.INVENTORY}/assign`, {
        invId: action.payload.invId,
        empId: action.payload.empId,
        name: action.payload.name
      });
      if (response.data.code === 2000) {
        yield put(actions.assignInvSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.assignInvError(response.data));
      }
    } catch (e) {
      yield put(actions.assignInvError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}



export function* getUnAssignedInvRequest(action) {
  if (action.payload == undefined) {
    yield put(actions.getUnAssignedInvClear())
  } else {
    try {
      const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.INVENTORY}/unassigned`, {
      });
      if (response.data.code === 2000) {
        yield put(actions.getUnAssignedInvSuccess(response.data));
      } else if (response.data.code == 4000 || response.data.code == 4010) {
        yield put(actions.getUnAssignedInvError(response.data));
      }
    } catch (e) {
      yield put(actions.getUnAssignedInvError('Error Occurs !!'));
      console.warn('Some error found in "logingRequest" action\n', e);
    }
  }
}
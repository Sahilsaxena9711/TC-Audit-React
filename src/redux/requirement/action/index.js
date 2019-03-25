import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import { CONFIG } from '../../../config/index';

export function* getRequirementRequest(action) {
    if (action.payload == undefined) {
        yield put(actions.getRequirementClear())
    } else {
        try {
            const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.REQUIREMENT}/all/pending`, {
            });
            if (response.data.code === 2000) {
                yield put(actions.getRequirementSuccess(response.data));
            } else if (response.data.code == 4000 || response.data.code == 4010) {
                yield put(actions.getRequirementError(response.data));
            }
        } catch (e) {
            yield put(actions.getRequirementError('Error Occurs !!'));
            console.warn('Some error found in "logingRequest" action\n', e);
        }
    }
}


export function* approveRequirementRequest(action) {
    if (action.payload == undefined) {
        yield put(actions.approveRequirementClear())
    } else {
        try {
            let id = action.payload
            const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}${CONFIG.REQUIREMENT}/complete/${id}`, {
            });
            if (response.data.code === 2000) {
                yield put(actions.getRequirementRequest('data'))
                yield put(actions.approveRequirementSuccess(response.data));
            } else if (response.data.code == 4000 || response.data.code == 4010) {
                yield put(actions.approveRequirementError(response.data));
            }
        } catch (e) {
            yield put(actions.approveRequirementError('Error Occurs !!'));
            console.warn('Some error found in "logingRequest" action\n', e);
        }
    }
}

export function* addRequirementRequest(action) {
    if (action.payload == undefined) {
        yield put(actions.addRequirementClear())
    } else {
        try {
            let dateNow = new Date();
            let finalDate = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`
            const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.REQUIREMENT}/add`, {
                comment: action.payload.comment,
                date: finalDate
            });
            if (response.data.code === 2000) {
                yield put(actions.addRequirementSuccess(response.data));
            } else if (response.data.code == 4000 || response.data.code == 4010) {
                yield put(actions.addRequirementError(response.data));
            }
        } catch (e) {
            yield put(actions.addRequirementError('Error Occurs !!'));
            console.warn('Some error found in "logingRequest" action\n', e);
        }
    }
}
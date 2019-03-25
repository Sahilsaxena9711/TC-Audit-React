import {combineReducers} from 'redux';

import login from './login/reducer/index';
import inventory from './inventory/reducer/index';
import audit from './audit/reducer/index';
import requirement from './requirement/reducer/index';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    login: login,
    inventory: inventory,
    audit: audit,
    requirement: requirement,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

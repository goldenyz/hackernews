import { handleActions } from 'redux-actions';
import { List, fromJS } from 'immutable';
import Action from '../constants/action';
import Status from '../constants/status';

export default handleActions({
  [Action.FETCHING_ITEM_LIST]: state => state.set('ids', new List()).set('status', Status.LOADING),
  [Action.FETCH_ITEM_LIST_SUCCEEDED]: (state, action) =>
    state.set('ids', new List(action.payload)).set('loaded', 0),
  [Action.FETCHING_ITEMS]: state => state.set('status', Status.LOADING),
  [Action.FETCH_ITEMS_SUCCEEDED]: (state, action) =>
    state.set('loaded', state.get('loaded') + action.payload).set('status', Status.LOADED),
}, fromJS({
  ids: [],
  loaded: 0,
  status: Status.LOADED,
}));

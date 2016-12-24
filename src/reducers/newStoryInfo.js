import { handleActions } from 'redux-actions';
import { List, fromJS } from 'immutable';
import Action from '../constants/action';
import Status from '../constants/status';

export default handleActions({
  [Action.FETCHING_NEW]: state => state.set('status', Status.LOADING),
  [Action.FETCH_NEW_SUCCEEDED]: (state, action) =>
    state.set('ids', new List(action.payload)).set('loaded', 0).set('status', Status.LOADED),
  [Action.FETCHING_NEW_STORIES]: state => state.set('status', Status.LOADING),
  [Action.FETCH_NEW_STORIES_SUCCEEDED]: (state, action) =>
    state.set('loaded', state.get('loaded') + action.payload).set('status', Status.LOADED),
}, fromJS({
  ids: [],
  loaded: 0,
  status: Status.LOADED,
}));

import { handleActions } from 'redux-actions';
import { List, fromJS } from 'immutable';
import Action from '../constants/action';

export default handleActions({
  [Action.FETCH_NEW_SUCCEEDED]: (state, action) =>
    state.set('ids', new List(action.payload)).set('loaded', 0),
  [Action.FETCH_NEW_STORIES_SUCCEEDED]: (state, action) =>
    state.set('loaded', state.get('loaded') + action.payload),
}, fromJS({
  ids: [],
  loaded: 0,
}));

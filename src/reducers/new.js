import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import Action from '../constants/action';

export default handleActions({
  [Action.FETCH_NEW_SUCCEEDED]: (state, action) => new List(action.payload),
}, new List());

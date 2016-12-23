import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import Action from '../constants/action';

export default handleActions({
  [Action.FETCH_ITEM_SUCCEEDED]: (state, action) =>
    state.set(action.payload.id, fromJS(action.payload)),
}, new Map());

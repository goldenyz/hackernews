import { createAction } from 'redux-actions';
import Action from '../constants/action';
import { getItem } from '../io/request/hackernews';
import { error } from '../logger';
import store from '../store';

const fetchingItem = createAction(Action.FETCHING_ITEM);
const fetchItemSucceeded = createAction(Action.FETCH_ITEM_SUCCEEDED);
const fetchItemFailed = createAction(Action.FETCH_ITEM_FAILED);

export default id => (dispatch) => {
  dispatch(fetchingItem());

  const cached = store.getState('itemByIdMap').get('id');
  if (cached) {
    return Promise.resolve().then(() => dispatch(fetchItemSucceeded(cached)));
  }

  return getItem(id).then(item => (
      dispatch(fetchItemSucceeded(item))
  )).catch((err) => {
    error(`request item:${id} failed.`);
    error(err);
    dispatch(fetchItemFailed());
  });
};

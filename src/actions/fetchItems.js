import { createAction } from 'redux-actions';
import Action from '../constants/action';
import fetchItem from './fetchItem';
import { error } from '../logger';
import store from '../store';

const fetchingItems = createAction(Action.FETCHING_ITEMS);
const fetchItemsSucceeded = createAction(Action.FETCH_ITEMS_SUCCEEDED);
const fetchItemsFailed = createAction(Action.FETCH_ITEMS_FAILED);

export default count => (dispatch) => {
  if (count <= 0) return Promise.resolve();

  const itemsContainer = store.getState().get('itemsContainer');
  const ids = itemsContainer.get('ids');
  const loaded = itemsContainer.get('loaded');
  const idsToLoad = ids.slice(loaded, loaded + count);
  if (idsToLoad.size === 0) return Promise.resolve();

  dispatch(fetchingItems());

  const newStories = idsToLoad.map(id => dispatch(fetchItem(id)));
  return Promise.all(newStories)
    .then(() => dispatch(fetchItemsSucceeded(idsToLoad.size)))
    .catch((err) => {
      error('request items failed.');
      error(err);
      dispatch(fetchItemsFailed());
    });
};

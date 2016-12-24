import { createAction } from 'redux-actions';
import Action from '../constants/action';
import ItemType from '../constants/itemType';
import { getNew, getShow, getJobs } from '../io/request/hackernews';
import { error } from '../logger';

const fetchingItemList = createAction(Action.FETCHING_ITEM_LIST);
const fetchItemListSucceeded = createAction(Action.FETCH_ITEM_LIST_SUCCEEDED);
const fetchItemListFailed = createAction(Action.FETCH_ITEM_LIST_FAILED);

const fetchAPIByItemType = {
  [ItemType.NEW_STORY]: getNew,
  [ItemType.SHOW_STORY]: getShow,
  [ItemType.JOBS]: getJobs,
};

export default itemType => (dispatch) => {
  const fetchAPI = fetchAPIByItemType[itemType];
  if (!fetchAPI) {
    error('fetch api is not found!');
    return Promise.resolve();
  }

  dispatch(fetchingItemList());

  return fetchAPI()
    .then(newStoryIds => dispatch(fetchItemListSucceeded(newStoryIds)))
    .catch((err) => {
      error('request new failed.');
      error(err);
      dispatch(fetchItemListFailed());
    });
};

import { createAction } from 'redux-actions';
import Action from '../constants/action';
import fetchItem from './fetchItem';
import { error } from '../logger';
import store from '../store';

const fetchingNewStories = createAction(Action.FETCHING_NEW_STORIES);
const fetchNewStoriesSucceeded = createAction(Action.FETCH_NEW_STORIES_SUCCEEDED);
const fetchNewStoriesFailed = createAction(Action.FETCH_NEW_STORIES_FAILED);

export default count => (dispatch) => {
  if (count <= 0) return Promise.resolve();

  const newStoryInfo = store.getState().get('newStoryInfo');
  const newIds = newStoryInfo.get('ids');
  const loaded = newStoryInfo.get('loaded');
  const idsToLoad = newIds.slice(loaded, loaded + count);
  if (idsToLoad.size === 0) return Promise.resolve();

  dispatch(fetchingNewStories());

  const newStories = idsToLoad.map(id => dispatch(fetchItem(id)));
  return Promise.all(newStories)
    .then(() => dispatch(fetchNewStoriesSucceeded(idsToLoad.size)))
    .catch((err) => {
      error('request new stories failed.');
      error(err);
      dispatch(fetchNewStoriesFailed());
    });
};

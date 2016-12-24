import { createAction } from 'redux-actions';
import Action from '../constants/action';
import { getNew } from '../io/request/hackernews';
import { error } from '../logger';

const fetchingNew = createAction(Action.FETCHING_NEW);
const fetchNewSucceeded = createAction(Action.FETCH_NEW_SUCCEEDED);
const fetchNewFailed = createAction(Action.FETCH_NEW_FAILED);

export default () => (dispatch) => {
  dispatch(fetchingNew());

  return getNew()
    .then(newStoryIds => dispatch(fetchNewSucceeded(newStoryIds)))
    .catch((err) => {
      error('request new failed.');
      error(err);
      dispatch(fetchNewFailed());
    });
};

import { handleActions } from 'redux-actions';
import Action from '../constants/action';
import Status from '../constants/status';

export default handleActions({
  [Action.FETCHING_NEW]: () => Status.LOADING,
  [Action.FETCH_NEW_SUCCEEDED]: () => Status.LOADED,
}, Status.LOADED);

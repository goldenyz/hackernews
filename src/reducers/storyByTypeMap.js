import { combineReducers } from 'redux-immutable';

import newStories from './new';

export default combineReducers({
  new: newStories,
});

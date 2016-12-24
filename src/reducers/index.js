import { combineReducers } from 'redux-immutable';

import itemByIdMap from './itemByIdMap';
import newStoryInfo from './newStoryInfo';
import status from './status';

export default combineReducers({
  itemByIdMap,
  newStoryInfo,
  status,
});

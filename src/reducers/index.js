import { combineReducers } from 'redux-immutable';

import itemByIdMap from './itemByIdMap';
import storyByTypeMap from './storyByTypeMap';
import status from './status';

export default combineReducers({
  itemByIdMap,
  storyByTypeMap,
  status,
});

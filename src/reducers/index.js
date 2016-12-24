import { combineReducers } from 'redux-immutable';

import itemByIdMap from './itemByIdMap';
import itemsContainer from './itemsContainer';

export default combineReducers({
  itemByIdMap,
  itemsContainer,
});

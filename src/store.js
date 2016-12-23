import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

// const defaultState = Immutable.fromJS({
//   itemByIdMap: {},
//   storyByTypeMap: {
//     new: [],
//   }),
//   status: LOADED,
// })

const middlewares = [
  thunk,
];

const composeEnhancers = composeWithDevTools({
  serializeAction: true,
});

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export default createStore(rootReducer, enhancer);

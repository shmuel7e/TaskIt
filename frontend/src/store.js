import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers =  compose;
//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default Store;

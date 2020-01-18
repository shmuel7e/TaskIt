import { combineReducers } from 'redux';
import ReviewReducer from './ReviewReducer'
import boardReducer from './BoardReducer'
import UserReducer from './UserReducer'
import SystemReducer from './SystemReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  review: ReviewReducer,
  user: UserReducer,
  board:boardReducer
})

export default rootReducer;
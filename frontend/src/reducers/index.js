import { combineReducers } from 'redux';
import ReviewReducer from './ReviewReducer'
import WebsiteReducer from './WebsiteReducer'
import UserReducer from './UserReducer'
import SystemReducer from './SystemReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  review: ReviewReducer,
  user: UserReducer,
  website:WebsiteReducer
})

export default rootReducer;
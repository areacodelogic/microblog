import { combineReducers } from 'redux';
import titles from './titles';
import posts from './posts';

export default combineReducers({
  titles, posts
});

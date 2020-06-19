import { ADD_POST, GET_POST, REMOVE_POST, UPDATE_POST, VOTE } from '../actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    case REMOVE_POST:
      let posts = {...state};
      delete posts[action.postId]
      return posts

    case UPDATE_POST: 
      return {...state, [action.post.id]: {
        ...action.post, comments: state[action.post.id].comments
      }}

    case VOTE:
      return {...state, [action.postId]: {
        ...state[action.postId], votes: action.votes
      }}

    default:
      return state;
  }
}

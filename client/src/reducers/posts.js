import { ADD_POST, GET_POST } from '../actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, [action.post.id]: action.post };
    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    default:
      return state;
  }
}

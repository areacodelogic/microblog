import {
  ADD_POST,
  GET_POST,
  REMOVE_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ERROR,
} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ERROR:
      console.log('THIS IS THE ERROR', action.error);
      return { ...state };

    case GET_POST:
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    case REMOVE_POST:
      let posts = { ...state };
      delete posts[action.postId];
      return posts;

    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments,
        },
      };

    case VOTE:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          votes: action.votes,
        },
      };

    case ADD_COMMENT:
        const newStates = { ...state };
        console.log(newStates[action.postId].comments);

      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          comments: [...state[action.postId].comments, action.comment],
        },
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          comments: state[action.postId].comments.filter(
            (comment) => comment.id !== action.commentId
          ),
        },
      };

   

    default:
      return state;
  }
}

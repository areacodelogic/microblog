import { GET_TITLES, ADD_POST, VOTE, REMOVE_POST, UPDATE_POST } from '../actions/types';

function makeTitleFromPost({ id, title, description, votes }) {
  return { id, title, description, votes };
}

export default function (state = [], action) {
  switch (action.type) {
    case GET_TITLES:
      return [...action.titles];

    case ADD_POST:
      return [...state, makeTitleFromPost(action.post)];

    case VOTE:
      let votes = state.map((title) =>
        title.id === action.postId ? { ...title, votes: action.votes } : title
      );
      return votes;

    case REMOVE_POST:
      return state.filter((title) => title.id !== action.postId);

    case UPDATE_POST:
      let posts = state.map((title) =>
        title.id === action.post.id ? makeTitleFromPost(action.post) : title
      );

    default:
      return state;
  }
}

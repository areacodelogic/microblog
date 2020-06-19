import { GET_TITLES, ADD_POST} from '../actions/types';


function makeTitleFromPost({ id, title, description, votes }) {
  return { id, title, description, votes };
}
export default function (state = [], action) {
  switch (action.type) {
    case GET_TITLES:
      return [...action.titles];

    case ADD_POST:
      return [...state, makeTitleFromPost(action.post)];

    default:
      return state;
  }
}

import { GET_TITLES, ADD_POST, VOTE} from '../actions/types';


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
      let votes = state.map(title => title.id === action.postId ? {...title, votes: action.votes} : title)
      return votes;

   

    default:
      return state;
  }
}

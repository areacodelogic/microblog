import { GET_TITLES } from '../actions/types';



export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TITLES:
      
      return [...action.titles];
     
    default:
      return state;
  }
}

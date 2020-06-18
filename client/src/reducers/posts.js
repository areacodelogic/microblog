import {ADD_POST } from '../actions/types';


export default function (state = {}, action) {


  console.log(state)

    switch(action.type){
    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] }};
      
    default:
      return state;
  }


}
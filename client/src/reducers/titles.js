import {GET_TITLES} from '../actions/types';

const initialState = {
  titles: []
}

export default function (state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case GET_TITLES:
      return {
        ...state,
        titles: payload
      }

    default:
      return state;
  }






}
import axios from 'axios';
import {GET_TITLES} from './types';


// GET TITLES

export function getTitlesFromAPI() {
  return async function (dispatch) {
    const response = await axios.get('api/posts');
    return dispatch(getTitles(response.data));
  };
}

function getTitles(titles) {
  return {
    type: GET_TITLES,
    titles,
  };
}



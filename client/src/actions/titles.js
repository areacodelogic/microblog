import axios from 'axios';
import { GET_TITLES } from './types';

// GET TITLES

export function getTitlesFromAPI() {
  return async function (dispatch) {
    try {
      const response = await axios.get('api/posts');
      return dispatch(getTitles(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

function getTitles(titles) {
  return {
    type: GET_TITLES,
    titles,
  };
}

//Error Handler
function handleError(error) {
  return {
    type: 'ERROR',
    error,
  };
}

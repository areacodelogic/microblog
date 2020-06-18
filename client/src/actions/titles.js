import axios from 'axios';
import { GET_TITLES } from './types';

// GET TITLES

export const getTitles = () => async (dispatch) => {
  const res = await axios.get('api/posts');

  dispatch({
    type: GET_TITLES,
    payload: res.data,
  });
};

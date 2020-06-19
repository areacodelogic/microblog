import axios from 'axios';
import { GET_POST, ADD_POST } from './types';



// const API_URL = 'http://localhost:3000/api/posts';

// export function getPostFromAPI(id) {
//   return async function (dispatch) {
//     const response = await axios.get(`${API_URL}/${id}`);
//     console.log('resposne', response)
//     return dispatch(getPost(response.data));
//   };
// }

// GET post

export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.get(`/api/posts/${id}`);
    return dispatch(getPost(response.data));
  };
}



function getPost(post) {
  return {
    type: GET_POST,
    post
  };
}

// ADD Post

export function sendPostToAPI(title, description, body) {
  return async function (dispatch) {
    const response = await axios.post(`/api/posts`, {
      title,
      description,
      body
    });
    return dispatch(addPost(response.data));
  };

}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}
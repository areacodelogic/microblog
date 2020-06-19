import axios from 'axios';
import { GET_POST, ADD_POST, REMOVE_POST, UPDATE_POST } from './types';



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


// Delete Post

export function removePostFromAPI(id){
  return async function (dispatch){
    await axios.delete(`/api/posts/${id}`);
    return dispatch(removePost(id))
  }
}

function removePost(postId){
  return {
    type: REMOVE_POST,
    postId
  }
}

// Update Post

export function updatePostInAPI(id, title, description, body){
  return async function(dispatch){
    const response = await axios.put(`/api/posts/${id}`, {title, description, body} );
    return dispatch(updatePost(response.data))

  } 
}

function updatePost(post){
  return {
    type: UPDATE_POST,
    post
  }
}
 
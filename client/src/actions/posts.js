import axios from 'axios';
import {
  GET_POST,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_COMMENT,
} from './types';

// GET post
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';



export function getPostFromAPI(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${BASE_URL}/api/posts/${id}`);
      return dispatch(getPost(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

function getPost(post) {
  return {
    type: GET_POST,
    post,
  };
}

// ADD Post

export function sendPostToAPI(title, description, body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${BASE_URL}/api/posts`, {
        title,
        description,
        body,
      });
      return dispatch(addPost(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

// Delete Post

export function removePostFromAPI(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${id}`);
      return dispatch(removePost(id));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId,
  };
}

// Update Post

export function updatePostInAPI(id, title, description, body) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`${BASE_URL}/api/posts/${id}`, {
        title,
        description,
        body,
      });
      return dispatch(updatePost(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

// Vote

export function sendVoteToAPI(postId, direction) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/posts/${postId}/vote/${direction}`
      );
      return dispatch(vote(postId, response.data.votes));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

export function vote(postId, votes) {
  return {
    type: VOTE,
    postId,
    votes,
  };
}

// Add Comment

export function sendCommentToAPI(postId, text) {
  return async function (dispatch) {
    try {
      const result = await axios.post(
        `${BASE_URL}/api/posts/${postId}/comments/`,
        {
          text,
        }
      );
      dispatch(addComment(postId, result.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
  };
}

// delete Comment

export function removeCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    try {
      await axios.delete(
        `${BASE_URL}/api/posts/${postId}/comments/${commentId}`
      );
      return dispatch(removeComment(postId, commentId));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}

//Error Handler
function handleError(error) {
  return {
    type: 'ERROR',
    error,
  };
}

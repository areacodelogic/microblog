const express = require('express');
const db = require('../../db');

const ExpressError = require('../../helpers/ExpressError');
const Comment = require('../../models/Comment');

const router = express.Router({mergeParams: true});

//@route GET /api/posts/:post_id/comments
//@desc get all comments for a post

router.get('/', async function (req, res, next) {
  try {
    
    const comments = await Comment.getComments(req.params.post_id);
    return res.json(comments)
    
  } catch (err) {
    return next(err);
  }
})

//@route POST /api/posts/:post_id/comments
//@desc add a comment for a post


router.post('/', async function (req, res, next) {
  try {
    
    const comment = await Comment.addComment(req.body, req.params.post_id);
    
    return res.json({comment});
  } catch (err) {
    return next(err)
  }
})








module.exports = router;
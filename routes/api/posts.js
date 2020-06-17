const express = require('express');
const ExpressError = require('../../helpers/ExpressError');
const Post = require('../../models/Post');
// const { getNodeText } = require('@testing-library/react');

const router = express.Router();

//@route GET api/posts
//@desc get all posts
router.get('/', async function(req, res, next){
    try {
      const posts = await Post.findAll();

      return res.json(posts);
    } catch (err) {
       return next(err)
    }
  
})

//@route GET api/posts/id
//@desc get detail on post w/comments
router.get('/:post_id', async function(req, res, next) {
  try {
     const details = await Post.getPostDetails(req.params.post_id);

     return res.json(details)
  } catch (err) {
      return next(err)
  }
})



module.exports = router;

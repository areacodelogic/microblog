const express = require('express');
const ExpressError = require('../../helpers/ExpressError');
const Post = require('../../models/Post');
// const { getNodeText } = require('@testing-library/react');

const router = express.Router();

//@route GET api/posts
router.get('/', async function(req, res, next){
    try {
      const posts = await Post.findAll();

      return res.json(posts);
    } catch (err) {
       return next(err)
    }
  
})
module.exports = router;

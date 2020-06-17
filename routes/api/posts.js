const express = require('express');
const ExpressError = require('../../helpers/ExpressError');
const Post = require('../../models/Post');
// const { getNodeText } = require('@testing-library/react');

const router = express.Router();

//@route GET api/posts
//@desc get all posts
router.get('/', async function (req, res, next) {
  try {
    const posts = await Post.findAll();

    return res.json(posts);
  } catch (err) {
    return next(err);
  }
});

//@route GET api/posts/id
//@desc get detail on post w/comments
router.get('/:post_id', async function (req, res, next) {
  try {
    const details = await Post.getPostDetails(req.params.post_id);

    return res.json(details);
  } catch (err) {
    return next(err);
  }
});

//@route POST api/posts
//@desc add new post
router.post('/', async function (req, res, next) {
  try {
    const post = await Post.addPost(req.body);

    return res.json(post);
  } catch (err) {
    return next(err);
  }
});

//@route PUT api/posts
//@desc update post by id
router.put('/:post_id', async function (req, res, next) {
  try {
    const post = await Post.updatePost(req.params.post_id, req.body);

    return res.json(post);
  } catch (err) {
    return next(err);
  }
});

//@route DELETE api/posts/:post_id
//@desc delete post by id

router.delete('/:post_id', async function (req, res, next) {
  try {
    await Post.remove(req.params.post_id);
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
});



//@route POST api/posts/:post_id/vote/:direction
//@desc update the likes of post

router.post('/:post_id/vote/:direction', async function(req, res, next) {
  try {
    let delta = req.params.direction === "up" ? +1 : -1;
    
    const like = await Post.addLike(req.params.post_id, delta);

    return res.json(like)
  } catch (err) {
    return next(err)
  }
})
module.exports = router;

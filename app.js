const express = require('express');

const ExpressError = require('./helpers/ExpressError');
// const cors = require('cors');

const postsRoutes = require('./routes/api/posts');
const postCommentsRoutes = require('./routes/api/comments');

const app = express();
app.use(express.json());



// app.use(cors());

/** Routes */

app.use('/api/posts', postsRoutes);
app.use('/api/posts/:post_id/comments', postCommentsRoutes);


/** 404 Not Found handler. */

app.use(function (req, res, next) {
   const err = new ExpressError('Not Found', 404);
// pass the error to the next piece of middleware

  return next(err);
});

/** Generic error handler. */

 app.use(function (err, req, res, next) {
   res.status(err.status || 500);
  console.error(err.stack);

   return res.json({
    status: err.status,
    message: err.message,
   });
 });

module.exports = app;
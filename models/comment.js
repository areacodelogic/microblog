const db = require('../db');
const ExpressError = require('../helpers/ExpressError');

class Comment {
  /** GET /        get comments for post
   *
   * => { id, text }
   *
   */

   static async getComments(postId) {
     const result = await db.query(
       'SELECT id, text FROM comments WHERE post_id = $1 ORDER BY id',
       [postId]
     );
     
     const comments = result.rows;

     if(!comments){
       throw new ExpressError(`There are no posts ${postId}`, 404)
     }
     return comments;
   }
}

module.exports = Comment;
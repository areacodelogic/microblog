const db = require('../db');
const ExpressError = require('../helpers/ExpressError');
const { post } = require('../routes/api/posts');

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

    if (!comments) {
      throw new ExpressError(`There are no posts ${postId}`, 404);
    }
    return comments;
  }

  /** POST /      add a comment
   *
   * => { id, text }
   *
   */

  static async addComment(data, postId) {
    const result = await db.query(
      `INSERT INTO comments (text, post_id) 
          VALUES ($1, $2) 
          RETURNING id, text`,
      [data.text, postId]
    );

    return result.rows[0];
  }

  /** PUT /[id]      update comment
   *
   * => { id, text }
   *
   */

  static async updateComment(commentId, data) {
    const result = await db.query(
      `UPDATE comments 
          SET text=$1 
          WHERE id = $2
          RETURNING id, text`,
      [data.text, commentId]
    );

    const comment = result.rows[0];
    if (!comment) {
      throw new ExpressError(`There exists no post at '${id}'`, 404);
    }

    return comment;
  }
}

module.exports = Comment;

const db = require('../db');
const ExpressError = require('../helpers/ExpressError');

class Post {
  /** GET /   get overview of posts
   *
   * Returns:
   *
   * => [ { id,
   *        title,
   *        description,
   *        votes,
   *      },
   *      ...
   *    ]
   *
   */
  static async findAll() {
    const res = await db.query(
      `SELECT p.id,
              p.title,
              p.description,
              p.votes 
      FROM posts p
      ORDER BY p.id`
    );
    const posts = res.rows;

    if (!posts) {
      throw new ExpressError(`There are no posts`, 404);
    }
    return posts;
  }

  /** GET /[id]  get detail on post w/comments
   *
   * Returns:
   *
   * =>   { id,
   *        title,
   *        description,
   *        body,
   *        votes,
   *        comments: [ { id, text }, ... ],
   *      }
   */

  static async getPostDetails(id) {
    const res = await db.query(
      `SELECT p.id,
              p.title,
              p.description,
              p.body,
              p.votes,
              CASE WHEN COUNT(c.id) = 0 THEN JSON '[]' ELSE JSON_AGG(
                  JSON_BUILD_OBJECT('id', c.id, 'text', c.text)
                  ) END AS comments
              FROM posts p
                LEFT JOIN comments c on c.post_id = p.id 
              WHERE p.id = $1

              GROUP BY p.id 
              ORDER BY p.id 
              `,
      [id]
    );
    const details = res.rows[0];

    if (!details) {
      throw new ExpressError(`There ae no comments for this post`, 404);
    }

    return details;
  }





















  
}

module.exports = Post;

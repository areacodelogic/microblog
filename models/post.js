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

  static async getPostDetails(postId) {
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
      [postId]
    );
    const details = res.rows[0];

    if (!details) {
      throw new ExpressError(`There ae no comments for this post`, 404);
    }

    return details;
  }

  /** POST /     add a new post
   *
   * { title, description, body }  =>  { id, title, description, body, votes }
   *
   */

  static async addPost(data) {
    const res = await db.query(
      `INSERT INTO posts (title, description, body)
          VALUES ($1, $2, $3)
          RETURNING id, title, description, body, votes`,
      [data.title, data.description, data.body]
    );

    return res.rows[0];
  }

  /** PUT /[id]     update existing post
   *
   * { title, description, body }  =>  { id, title, description, body, votes }
   *
   */

  static async updatePost(postId, data) {
    const res = await db.query(
      `UPDATE posts SET title=$1, description=$2, body=$3
          WHERE id = $4
          RETURNING id, title, description, body, votes`,
      [data.title, data.description, data.body, postId]
    );

    const post = res.rows[0];

    if (!post) {
      throw new ExpressError(`There exists no post at '${id}'`, 404);
    }

    return post;
  }

  /** DELETE /[id]     delete existing post  */

  static async remove(postId) {
    const res = await db.query(
      `DELETE FROM posts WHERE id = $1
        RETURNING id`,
      [postId]
    );

    if (res.rows.length === 0) {
      throw new ExpressError(`There exists to post ${id}`, 404);
    }
  }
}

module.exports = Post;

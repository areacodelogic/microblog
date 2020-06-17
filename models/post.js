const db = require('../db');
const ExpressError = require('../helpers/ExpressError');

class Post {
  //Find all posts
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
}

module.exports = Post;

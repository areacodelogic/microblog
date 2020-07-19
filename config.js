/** Shared config for application; can be req'd many places. */

// require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 5000;

// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'jobly-test'
// - else: 'jobly'

let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'microblogdb-test';
} else {
  DB_URI = process.env.DATABASE_URL || 'microblogdb';
}

module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI,
};

// const { Client } = require('pg');
// const { DB_URI } = require('./config');

// const db = new Client({
//   connectionString: DB_URI,
// });

// db.connect();

// module.exports = db;



 const { Client } = require('pg');

 const client = new Client(
   process.env.DATABASE_URL || 'postgresql:///microblogdb'
 );

 client.connect();

 module.exports = client;

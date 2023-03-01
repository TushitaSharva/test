const { Pool } = require('pg');

const pool = new Pool({
  user: 'tushita',
  host: 'localhost',
  database: 'cqadb',
  password: '1234',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
});

module.exports = pool;
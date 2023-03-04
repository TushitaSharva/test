const { Pool } = require('pg');

const pool = new Pool({
  user: 'tushita',
  host: 'localhost',
  database: 'cqadb',
  password: '1234',
  port: 5432,
});

module.exports = pool;
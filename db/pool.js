require('dotenv').config();
const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: process.env.Postgres_DATABASE_PUBLIC_URL
});

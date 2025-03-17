#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL =  `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT,
  text TEXT,
  added TEXT
);

INSERT INTO messages (username, text, added) 
VALUES (
  'Johnny', 
  'Says Hi!', 
  'Sun Jan 19 2020 17:44:52 GMT-0700 (Pacific Daylight Time)'
);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.Postgres_DATABASE_PUBLIC_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
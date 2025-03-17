const pool = require("./pool");

async function getAllMessages() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getMessageByUsername(username) {
    const {rows} = await pool.query("SELECT * FROM messages WHERE username ILIKE $1", [username]);
    return rows[0];
}

async function insertMessage(username, text) {
    const timestamp = new Date().toString();
    const query = "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)";
    await pool.query(query, [username, text, timestamp]);
}

module.exports = {
    getAllMessages,
    getMessageByUsername,
    insertMessage,
};
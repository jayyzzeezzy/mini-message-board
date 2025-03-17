const { Router } = require("express");
const indexRouter = Router();
const db = require("../db/queries");

// route handler
// load EJS index template
indexRouter.get("/", async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Message Board", messages: messages });
});
indexRouter.post("/new", async (req, res) => {
    const {messageText, messageUsername} = req.body;
    await db.insertMessage(messageUsername, messageText);
    res.redirect("/");
});

module.exports = indexRouter;
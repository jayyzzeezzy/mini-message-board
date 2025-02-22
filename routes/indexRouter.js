const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

// route handler
// load EJS index template
indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Message Board", messages: messages });
});
indexRouter.post("/new", (req, res) => {
    const {messageText, messageUsername} = req.body;
    messages.push({ text: messageText, user: messageUsername, added: new Date() });
    res.redirect("/");
});

module.exports = {indexRouter, messages};
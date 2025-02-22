const { Router } = require("express");
const messageRouter = Router();
const {messages} = require("../routes/indexRouter");

// route handler
// load EJS form template
messageRouter.get("/:username", (req, res) => {
    const { username } = req.params;

    // find the object that contains the same username as req.params
    const message = messages.find((item) => item.user == username);
    
    res.render("message", { username: username, message: message });
});


module.exports = messageRouter;
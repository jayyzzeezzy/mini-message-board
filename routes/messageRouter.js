const { Router } = require("express");
const messageRouter = Router();
const db = require("../db/queries");


// route handler
// load EJS form template
messageRouter.get("/:username", async (req, res) => {
    const { username } = req.params;

    // search in remote DB for a matching username
    const message = await db.getMessageByUsername(username);
    
    res.render("message", { username: username, message: message });
});


module.exports = messageRouter;
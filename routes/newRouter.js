const { Router } = require("express");
const newRouter = Router();

// route handler
// load EJS form template
// and point to the form template
newRouter.get("/", (req, res) => {
    res.render("form", { title: "Post a message!" });
});

module.exports = newRouter;
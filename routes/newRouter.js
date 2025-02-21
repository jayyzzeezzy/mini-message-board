const { Router } = require("express");
const newRouter = Router();

// route handler
// load EJS form template
// and point to the form template
newRouter.get("/", (req, res) => {
    res.render("form", { message: "submit new message here!" });
});

module.exports = newRouter;
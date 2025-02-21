const { Router } = require("express");
const indexRouter = Router();

// route handler
// load EJS index template
indexRouter.get("/", (req, res) => {
    res.render("index", { message: "EJS is working properly!" });
});

module.exports = indexRouter;
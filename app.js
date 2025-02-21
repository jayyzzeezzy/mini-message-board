// import Environment Variables
require('dotenv').config();

// import the Express framework
const express = require("express");
const app = express();

// set up path module from Node
const path = require("node:path");

// set up EJS template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up route
// EJS template is used in this route
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

// define routes and their corresponding middleware
app.use("/new", newRouter);
app.use("/", indexRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`launched server on port ${PORT}`);
});
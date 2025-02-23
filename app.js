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

// set up static files that is CSS stylesheet
// using an Express middleware
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// set up an app level Express middleware
// to parse form data in a POST request
app.use(express.urlencoded({ extended: true }));

// set up route
// EJS template is used in this route
const {indexRouter} = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

// define routes and their corresponding middleware
app.use("/message", messageRouter);
app.use("/new", newRouter);
app.use("/", indexRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`launched server on port ${PORT}`);
});
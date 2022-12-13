const express = require("express");
const app = express();

// config
const config = require("./config");

// cors : accept all
const cors = require("cors");
app.use(cors({
    origin: "*",
}));

// body-parser middleware setup
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongodb connect with mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(config.MONGO_URL, {})
    .then(() => console.log("mongodb📕 connected🔗"))
    .catch((err) => console.error(err));

// fileupload
const fileupload = require("express-fileupload");
app.use(fileupload());

// use router
const router = require("./routers");
app.use("/api", router);
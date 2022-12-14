import express from "express";
const app = express();

// config
import { mongodbUrl, port } from "./config";

// cors : accept all
import cors from "cors";
app.use(cors({
    origin: "*",
}));

// body-parser middleware setup
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongodb connect with mongoose
import mongoose from "mongoose";
mongoose.set("strictQuery", true);
mongoose.connect(mongodbUrl, {})
    .then(() => console.log("mongodb📕 connected🔗"))
    .catch((err) => console.error(err));

// mongoose.connect

// fileupload
import fileupload from "express-fileupload";
app.use(fileupload());

// use router
import router from "./routers";
app.use("/api", router);

// express server LISTEN
app.listen(port, (err) => {
    if (err) return console.error(err);
    console.log("Server is listening on PORT", port);
}).on("error", (err) => {
    console.error(err.message);
});

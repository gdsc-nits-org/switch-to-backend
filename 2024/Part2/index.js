import express from "express";

import { body } from "express-validator";
import inputHandler from "./handler/inputHandler.js";

import * as Controllers from "./controllers/index.js"

const app = express();

app.use(express.json());

app.post("/post/add", body("title").isString(), body("likes").isInt(), inputHandler, Controllers.postAdd);

app.post("/post/update/:id", Controllers.updatePost, Controllers.createUpdate);

app.get("/post/:id", Controllers.searchPost);

app.listen(3000, () => {
    console.log("Server is listening http://localhost:3000");
});

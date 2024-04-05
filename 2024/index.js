const express = require("express");
const addPost = require("./src/controllers/post/add");
const createUpdate = require("./src/controllers/update/add");
const { body } = require("express-validator");
const inputHandler = require("./src/handler/inputHandler");

const app = express();

app.use(express.json()).use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post(
    "/post/create",
    body("title").isString(),
    body("body").isString(),
    inputHandler,
    addPost
);

app.post("/update/create/:id", createUpdate);

app.listen(3000, () => {
    console.log("Server is listening in http://localhost:3000");
});

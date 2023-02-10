import express from "express";
import cors from "cors";
import HealthRouter from "./src/routers/health.js";
import PostsRouter from "./src/routers/posts.js";
import UserRouter from "./src/routers/user.js";
import { logger } from "./src/middlewares/logger/logger.js";

const app = express();

app.use(express.json());
// cors wan't discussed int first session
// this just makes sure clients are allowed to acess the server
// you can read more about cors on mdn docs or YT
app.use(
  cors({
    origin: "*",
  })
);

// custom logger middleware runs before all api requests since it is at the top
app.use(logger);

// clients can directly access anything inside the public folder
app.use(express.static("public"));

// your routers
app.use("/health", HealthRouter);
app.use("/posts", PostsRouter);
app.use("/user", UserRouter);

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});

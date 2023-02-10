import express, { json } from "express";
import * as dotenv from "dotenv";
import initializePassport from "./utils/passport.js";
import passport from "passport";
import cookieSession from "cookie-session";
import { prisma } from "./utils/prisma.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";

dotenv.config();

const app = express();
app.use(express.json());

(async () => {
  try {
    console.log(process.env.DATABASE_URL);
    await prisma.$connect();
    console.log("database conected");
  } catch (error) {
    console.log(error.message);
  }
})();

app.use(cookieSession({
  name: "session",
  keys: [process.env.COOKIE_SECRET],
  maxAge: 24*60*60*1000,
}));

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine","ejs");

app.use("/auth",authRouter);
app.use("/user",userRouter);

app.get("/",(req,res) => {
  res.render("index");
});

app.listen(3000,() => {
  console.log("listening to port 3000");
});
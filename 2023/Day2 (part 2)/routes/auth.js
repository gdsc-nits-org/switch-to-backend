import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import { prisma } from "../utils/prisma.js";

const router = express.Router();

router.get("/login", (req,res) => {
    res.render("login");
})
router.get("/signUp",(req,res) => {
    res.render("signUp");
})
  
router.post("/login",passport.authenticate("local",{
    failureRedirect: "/auth/signUp",
}) ,(req,res) => {
    res.json({
        status: 200,
        msg: "user logged in",
    })
})

router.post("/signUp", async(req,res) => {

    const {username, password} = req?.body;

    const hashPassword = await bcrypt.hash(password,10);

    await prisma.user.create({
        data:{
            username,
            password: hashPassword,
        }
    })

    res.json({
        status: 200,
        msg: "user created",
    })
})

export default router;
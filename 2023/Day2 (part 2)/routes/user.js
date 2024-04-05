import express from "express";
import { prisma } from "../utils/prisma.js";

const router = express.Router();

router.get("/profile", (req,res) => {

    if(!req.user){
        return res.redirect("/auth/signUp");
    }
    res.render("profile", {username: req.user,});
})

export default router;
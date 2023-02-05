import {Router} from "express";
import { getPosts } from "../controllers/posts/get.js";

const router = Router();

router.get("/", getPosts);


export default router;
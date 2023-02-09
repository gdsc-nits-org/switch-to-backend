import { Router } from "express";

import getAllUsers from "../controllers/users/get.js";
import createUsers from "../controllers/users/create.js";

const routes = Router();

routes.get("/", getAllUsers);
routes.post("/new", createUsers);

export default routes;

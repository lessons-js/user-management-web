import express from "express";
import { getUsers, createUser, editUser, deleteUser } from "../middlewares/userMiddleware";
import "../services/db/db.service";

const routes = express.Router();

routes.route("/users").get(getUsers);
routes.route("/users").post(createUser);
routes.route("/users/:id").delete(deleteUser);
routes.route("/users/:id").put(editUser);

export default routes;

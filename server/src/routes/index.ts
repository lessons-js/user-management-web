import express from "express";
import { getUsers, createUser, editUser, deleteUser } from "../middlewares/userMiddleware";
import "../services/db/db.service";
import { detailsUser } from "../middlewares/detailsUser";

const routes = express.Router();

routes.route("/users").get(getUsers);
routes.route("/users").post(createUser);
routes.route("/users/:id").delete(deleteUser);
routes.route("/users/:id").put(editUser);
routes.route("/users/getUserById/:id").get(detailsUser)

export default routes;

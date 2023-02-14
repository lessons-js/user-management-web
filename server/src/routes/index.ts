import express from "express";
import { users, create, update, deleteUserById } from "./UserController";
import "../services/db/db.service";

const routes = express.Router();

routes.route("/users").get(users);
routes.route("/users").post(create);
routes.route("users/:userId").delete(deleteUserById);
routes.route("users/:userId").put(update);

export default routes;

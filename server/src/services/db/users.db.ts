import { DB } from "./db.service";
export const usersDB = new DB("users", { unique: ["email", "phoneNumber"] });

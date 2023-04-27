import { DBPagination } from "./db.pagination";
export const usersDB = new DBPagination("users", { unique: ["email", "phoneNumber"] });

import { usersDB } from "../services/db/users.db";

export const getUsers = (req, res) => {
  const users = usersDB.findAll();
  res.json(users);
  console.log(users);
};

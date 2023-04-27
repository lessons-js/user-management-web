import { usersDB } from "../services/db/users.db";

export const getUsers = (req, res) => {
  const params = req.query;

  const users = usersDB.find({
    pageIndex: +params.pageNumber || 0,
    pageSize: +params.pageSize || 10,
  });

  res.json(users);
};

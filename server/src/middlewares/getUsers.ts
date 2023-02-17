import { getUsers } from "#";

export const users = (req, res) => {
  const users = getUsers;
  res.json(users);
  console.log(users);
};

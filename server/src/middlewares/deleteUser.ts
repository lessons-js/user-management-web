import { usersDB } from "../services/db/users.db";

export const deleteUser = (req, res) => {
  const { id } = req.params;
  usersDB.deleteItem(id);
  console.log(`User with id ${id} has been successfully deleted.`);
  res.json({ message: `User with id ${id} has been successfully deleted.` });
};

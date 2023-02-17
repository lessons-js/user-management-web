import { deleteUser } from "#";

export const deleteUserById = (req, res) => {
  const { id } = req.params;
  deleteUser(id);
  console.log(`User with id ${id} has been successfully deleted.`);
  res.json({ message: `User with id ${id} has been successfully deleted.` });
};

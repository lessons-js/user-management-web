import { usersDB } from "../services/db/users.db";
import { validateEmail, validatePhone, validateName } from "../validation/validation";

export const editUser = (req, res) => {
  const { id } = req.params;
  const { userName, email, phoneNumber } = req.body;

  if (!userName && !email && !phoneNumber) {
    return res.status(400).json({ message: "Please provide name, email and phone" });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Not valid Email" });
  } else if (!validatePhone(phoneNumber)) {
    return res.status(400).json({ message: "Not valid phone" });
  } else if (!validateName(userName)) {
    return res.status(400).json({ message: "Not valid name" });
  }

  try {
    const updatedUser = usersDB.updateItem(parseInt(id), {
      userName,
      email,
      phoneNumber,
    });
    console.log(`User with id ${id} has been updated.`);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

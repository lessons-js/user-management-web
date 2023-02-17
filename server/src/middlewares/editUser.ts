import { updateUser } from "#";
import { validateEmail, validatePhone, validateName } from "../validation/validation";

export const update = (req, res) => {
  const { id } = req.params;
  const { userName, email, phoneNumber } = req.body;

  if (!userName || !email || !phoneNumber) {
    res.status(400).json({ message: "Please provide name, email and phone" });
    return;
  }
  if (!validateEmail(email)) {
    res.status(400).json({ message: "Not valid Email" });
    return;
  } else if (!validatePhone(phoneNumber)) {
    res.status(400).json({ message: "Not valid phone" });
    return;
  } else if (!validateName(userName)) {
    res.status(400).json({ message: "Not valid name" });
  }
  try {
    const updatedUser = updateUser({ id, name: userName, email, phone: phoneNumber });
    console.log(`User with id ${id} has been updated.`);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

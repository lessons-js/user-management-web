import { usersDB } from "../services/db/users.db";
import { validateEmail, validatePhone, validateName } from "../validation/validation";

export const createUser = (req, res) => {
  const { userName, email, phoneNumber, id } = req.body;
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
    usersDB.addItem(req.body);
    console.log(
      `User ${userName} with email ${email} and phone ${phoneNumber} has been successfully added.`
    );
    res.json(req.body);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

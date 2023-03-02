import React, { useState } from "react";
import "../users/Users.css";
import Modal from "../../components/modal/Modal.jsx";
import UserModal from "../../components/modal/userModal.jsx";
import { validateName, validateEmail, validatePhone } from "../../validation/validation.ts";

const Users = () => {
  const [modalActive, setModalActive] = useState(false);
  const [user, setUser] = useState({
    name: "Radion",
    email: "Radion@gmail.com",
    phoneNumber: "+380636490004",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleConfirmClick = () => {
    console.log(`Name: ${user.name}, Email: ${user.email}, Phone number: ${user.phoneNumber}`);
  };

  const onSubmit = () => {
    const errors = [];
    if (!validateName(user.name)) {
      errors.push("Please enter a valid name");
    }
    if (!validateEmail(user.email)) {
      errors.push("Please enter a valid email");
    }
    if (!validatePhone(user.phoneNumber)) {
      errors.push("Please enter a valid phone");
    }

    if (errors.length > 0) {
      setError(errors.join("\n"));
      return;
    }

    setError("");
    setModalActive(false);
    handleConfirmClick();
  };

  return (
    <div className="app">
      <main>
        <div className="user-info">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phoneNumber}</p>
        </div>
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Open modal
        </button>
      </main>
      <UserModal
        user={user}
        error={error}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
        active={modalActive}
        setActive={setModalActive}
        handleConfirmClick={handleConfirmClick}
      />
    </div>
  );
};

export default Users;

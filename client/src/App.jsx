import Router from "./routing/Router";
import React, { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";
import { validateName, validateEmail, validatePhone } from "./validation/validation.ts";

const App = () => {
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
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Edit User</p>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
          <div className="err">{error}</div>
          <div className="button-container">
            <button className="confirm-btn" type="button" onClick={onSubmit}>
              Confirm
            </button>
            <button className="decline-btn" onClick={() => setModalActive(false)}>
              Decline
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;

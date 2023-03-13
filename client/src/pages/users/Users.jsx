import React, { useState } from "react";
import "../users/Users.scss";
import Modal from "../../components/modal/Modal";
import UserModal from "../../components/modal/userModal";
import UsersTable from "../../components/table/userTable";
import { validateName, validateEmail, validatePhone } from "../../validation/validation";

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

  const users = [
    { id: 1, userName: "Radion", email: "radion@gmail.com", phoneNumber: "+3806676676" },
    { id: 2, userName: "Alex", email: "Alex@gmail.com", phoneNumber: "+380665353553" },
    { id: 3, userName: "Andrew", email: "Andrew@gmail.com", phoneNumber: "+380667365" },
    { id: 4, userName: "Viktor", email: "Viktor@gmail.com", phoneNumber: "+8805553535" },
  ];
  const headers = ["id", "userName", "email", "phoneNumber", "Actions"];

  const handleUserEdit = (userId) => {};

  const handleUserDelete = (userId) => {};

  return (
    <div>
      <h1>Users</h1>
      <UsersTable
        users={users}
        onUserEdit={handleUserEdit}
        onUserDelete={handleUserDelete}
        headers={headers}
      />
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
    </div>
  );
};

export default Users;

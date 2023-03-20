import React, { useState } from "react";
import Modal from "./Modal";

const UserModal = ({ active, setActive, user, error, onSubmit }) => {
  const [selectedUser, setSelectedUser] = useState(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedUser);
  };

  return (
    <Modal active={active} setActive={setActive}>
      <p>Edit User</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Name"
          value={selectedUser.userName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={selectedUser.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          value={selectedUser.phoneNumber}
          onChange={handleInputChange}
        />
        <div className="err">{error}</div>
        <div className="button-container">
          <button className="confirm-btn" type="submit">
            Confirm
          </button>
          <button type="button" className="decline-btn" onClick={() => setActive(false)}>
            Decline
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UserModal;

import React from "react";
import Modal from "./Modal";

const UserModal = ({ active, setActive, user, error, setUser, onSubmit }) => {
  const { userName, email, phoneNumber } = user || {};
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <Modal active={active} setActive={setActive}>
      <p>Edit User</p>
      <form>
        <input
          type="text"
          name="userName"
          placeholder="Name"
          value={userName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={handleInputChange}
        />
        <div className="err">{error}</div>
        <div className="button-container">
          <button className="confirm-btn" type="button" onClick={onSubmit}>
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

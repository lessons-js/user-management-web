import React from "react";
import Modal from "./Modal";

const UserModal = ({
  active,
  setActive,
  user,
  error,
  handleInputChange,
  handleConfirmClick,
  onSubmit,
}) => {
  return (
    <Modal active={active} setActive={setActive}>
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
          <button type="button" className="decline-btn" onClick={() => setActive(false)}>
            Decline
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UserModal;

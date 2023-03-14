import Modal from "./Modal";
import React from "react";

const DeleteModal = ({ active, setActive, user, userDelete }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="modal_delete">
        <p>Are you sure you want to delete user {user.userName}?</p>
        <div className="button-container">
          <button className="confirm-btn" onClick={userDelete}>
            Yes
          </button>
          <button className="decline-btn" onClick={() => setActive(false)}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;

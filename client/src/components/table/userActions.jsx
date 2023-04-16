import React from "react";

const UserActions = ({ onUserEdit, onUserDelete, showUserDetails, userId, user }) => {
  return (
    <>
      <button className="edit-btn" onClick={() => onUserEdit(userId, user)}>
        Edit
      </button>
      <button className="delete-btn" onClick={() => onUserDelete(userId, user)}>
        Delete
      </button>
      <button className="details-btn" onClick={() => showUserDetails(userId)}>Details</button>
    </>
  );
};

export default UserActions;

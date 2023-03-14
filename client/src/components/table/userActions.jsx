import React from "react";

const UserActions = ({ onUserEdit, onUserDelete, userId, user }) => {
  return (
    <>
      <button className="edit-btn" onClick={() => onUserEdit(userId, user)}>
        Edit
      </button>
      <button className="delete-btn" onClick={() => onUserDelete(userId, user)}>
        Delete
      </button>
    </>
  );
};

export default UserActions;

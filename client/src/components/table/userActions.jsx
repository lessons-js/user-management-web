import React from "react";

const UserActions = ({ onUserEdit, user, OnUserDelete }) => {
  return (
    <>
      <button className="edit-btn" onClick={() => onUserEdit(user.id, user)}>
        Edit
      </button>
      <button className="delete-btn" onClick={() => OnUserDelete(user.id, user)}>
        Delete
      </button>
    </>
  );
};

export default UserActions;

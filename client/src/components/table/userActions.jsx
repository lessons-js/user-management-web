import React from "react";
const UserActions = ({ onUserEdit, onUserDelete, userId, setModalActive }) => {
  return (
    <>
      <button
        onClick={() => {
          onUserEdit(userId);
        }}
      >
        Edit
      </button>

      <button onClick={() => onUserDelete(userId)}>Delete</button>
    </>
  );
};

export default UserActions;

import React from "react";

const Createuserbtn = ({ createUser }) => {
  return (
    <div>
      <button onClick={() => createUser()}>Add User</button>
    </div>
  );
};

export default Createuserbtn;

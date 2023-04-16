import React, { useState } from "react";
import "../users/Users.scss";
import UserModal from "../../components/modal/userModal";
import UsersTable from "../../components/table/userTable";
import DeleteModal from "../../components/modal/DeleteModal";
import Details from "../users/Details"
import { useNavigate } from "react-router-dom";
import { validateName, validateEmail, validatePhone } from "../../validation/validation";

const Users = () => {
  const [modalActive, setModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
  });

  const handleConfirmClick = () => {
    console.log(
      `Name: ${selectedUser.userName}, Email: ${selectedUser.email}, Phone number: ${selectedUser.phoneNumber}`
    );
  };

  const onSubmit = () => {
    const errors = [];
    if (!validateName(selectedUser.userName)) {
      errors.push("Please enter a valid name");
    }
    if (!validateEmail(selectedUser.email)) {
      errors.push("Please enter a valid email");
    }
    if (!validatePhone(selectedUser.phoneNumber)) {
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

  const handleUserEdit = (userId, user) => {
    setSelectedUser(user);
    setModalActive(true);
  };

  const OnUserDelete = (userId, user) => {
    setSelectedUser(user);
    setDeleteModalActive(true);
  };
  

  const showUserDetails = (userId) => {
    navigate(`/users/${userId}`)
  }

  const handleUserDelete = (userId, user) => {
    setSelectedUser(user);
    setDeleteModalActive(false);
    console.log("delete user", user.userName);
  };

  return (
    <div>
      <h1>Users</h1>
      <UsersTable
        users={users}
        onUserEdit={handleUserEdit}
        onUserDelete={OnUserDelete}
        showUserDetails={showUserDetails}
        headers={headers}
      />
      <div className="app">
        <UserModal
          user={selectedUser}
          error={error}
          onSubmit={onSubmit}
          active={modalActive}
          setActive={setModalActive}
          handleConfirmClick={handleConfirmClick}
        />
      </div>
      <DeleteModal
        user={selectedUser}
        active={deleteModalActive}
        setActive={setDeleteModalActive}
        userDelete={handleUserDelete}
      />
      <Details
        user={selectedUser}
      />
    </div>
  );
};

export default Users;

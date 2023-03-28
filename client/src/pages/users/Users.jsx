import React, { useState } from "react";
import "../users/Users.scss";
import UserModal from "../../components/modal/userModal";
import UsersTable from "../../components/table/userTable";
import DeleteModal from "../../components/modal/DeleteModal";
import { validateName, validateEmail, validatePhone } from "../../validation/validation";
import { Pagination } from "../../components/pagination/Pagination";

const Users = () => {
  const [modalActive, setModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
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

  const headers = ["id", "userName", "email", "phoneNumber", "Actions"];

  const handleUserEdit = (userId, user) => {
    setSelectedUser(user);
    setModalActive(true);
  };

  const OnUserDelete = (userId, user) => {
    setSelectedUser(user);
    setDeleteModalActive(true);
  };

  const handleUserDelete = (userId, user) => {
    setSelectedUser(user);
    setDeleteModalActive(false);
  };

  function onPaginationChange(pagination) {
    fetch(`http://localHost:3001/users?pageNumber=${pagination.pageNumber}&pageSize=${pagination.pageSize}`).then(res => res.json()).then(res => {
      if (res.data) {
        setUsers(res.data);
      }
    });
  }

  return (
    <div>
      <h1>Users</h1>
      <UsersTable
        users={users}
        onUserEdit={handleUserEdit}
        onUserDelete={OnUserDelete}
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
      <Pagination onChange={onPaginationChange} />
    </div>
  );
};

export default Users;

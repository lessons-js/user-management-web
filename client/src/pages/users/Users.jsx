import React, { useState, useEffect } from "react";

import "../users/Users.scss";
import UserModal from "../../components/modal/userModal";
import UsersTable from "../../components/table/userTable";
import DeleteModal from "../../components/modal/DeleteModal";
import Createuserbtn from "../../components/createuserbtn/Createuserbtn";
import { validateName, validateEmail, validatePhone } from "../../validation/validation";

const headers = ["id", "userName", "email", "phoneNumber", "Actions"];

const Users = () => {
  const [modalActive, setModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = () => {
    setSelectedUser({
      userName: "",
      phoneNumber: "",
      email: "",
    });
    setIsEditing(false);
    setModalActive(true);
  };

  const editUser = async (userId, user) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      await getUsers();
    } catch (error) {
      console.error("Error editing user", error);
    }
  };

  const handleConfirmClick = async () => {
    if (isEditing) {
      try {
        await editUser(selectedUser.id, selectedUser);
      } catch (error) {
        console.error("Error editing user", error);
      }
    } else {
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedUser),
        });
        const data = await response.json();

        setModalActive(false);
        await getUsers();
      } catch (error) {
        console.error("Error:", error);
      }
    }
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

  const handleUserEdit = (userId, user) => {
    setIsEditing(true);
    setSelectedUser(user);
    setModalActive(true);
  };

  const OnUserDelete = (userId, user) => {
    setSelectedUser(user);
    setDeleteModalActive(true);
  };

  const handleUserDelete = async (userId, user) => {
    try {
      setSelectedUser(user);
      setDeleteModalActive(false);
      await fetch(`http://localhost:3001/users/${userId}`, {
        method: "DELETE",
      });

      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <Createuserbtn createUser={createUser} />
      <UsersTable
        users={users}
        onUserEdit={handleUserEdit}
        handleUserDelete={handleUserDelete}
        OnUserDelete={OnUserDelete}
        headers={headers}
      />
      <div className="app">
        <UserModal
          user={selectedUser}
          error={error}
          setUser={setSelectedUser}
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
    </div>
  );
};

export default Users;

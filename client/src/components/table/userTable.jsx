import React from "react";
import UserActions from "./userActions";
import "./table.scss";

const UsersTable = ({ users, onUserEdit, onUserDelete, headers }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {headers.map((header) => (
              <td key={header}>
                {header === "Actions" ? (
                  <UserActions
                    onUserEdit={onUserEdit}
                    onUserDelete={onUserDelete}
                    userId={user.id}
                    user={user}
                  />
                ) : (
                  user[header]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;

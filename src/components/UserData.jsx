import React from 'react';
import './user.css';

const UserData = ({ users }) => {
  return (
    <table className="userdata-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((currUser) => {
          const { id, name, email } = currUser;
          return (
            <tr key={id} className="userdata-row">
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserData;

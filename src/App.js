import './App.css';
import React, { useState } from "react";

function App() {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <div className="App">
      <h1>React CRUD</h1>
      <div>
        <div>
          <h2>Add User</h2>
        </div>

        <div>
          <h2>View Users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

const UserTable = (props) => {
  console.log("props.users.length:" + props.users.length);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button>
                  Edit
                </button>
                <button>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default App;

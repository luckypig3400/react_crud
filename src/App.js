import './App.css';
import React, { useState } from "react";

const usersData = [
  { id: 1, name: "Tania", username: "floppydiskette" },
  { id: 2, name: "Craig", username: "siliconeidolon" },
  { id: 3, name: "Ben", username: "benisphere" },
];
// const [users, setUsers] = useState(usersData);

function App() {
  return (
    <div className="App">
      <h1>React CRUD</h1>
      <div>
        <div>
          <h2>Add User</h2>
        </div>

        <div>
          <h2>View Users</h2>
          <UserTable users={usersData} />
        </div>
      </div>
    </div>
  );
}

const UserTable = (props) => {
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name data</td>
        <td>Username data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
}

export default App;

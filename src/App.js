import './App.css';
import React, { useState } from "react";

function App() {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    // 用 filter 過濾掉當前的 id
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="App">
      <h1>React CRUD</h1>
      <div>
        <div>
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>

        <div>
          <h2>View Users</h2>
          {/* 把刪除功能當作 props 傳給 UserTable */}
          <UserTable users={users} deleteUser={deleteUser} />
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
                <button onClick={() => props.deleteUser(user.id)}>
                  {/* UserTable 中的 Delete 按鈕綁定 onClick */}
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

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default App;

import './App.css';
import React, { useState, useEffect } from "react";

// TODO: 接下來跟著文章改為進階版(拆分各個Components)
// https://molly1024.medium.com/react-一個-crud-增改刪查專案-9874b452ae36#5e9b

function App() {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", username: "" });

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="App">
      <h1>React CRUD!</h1>
      <div>
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
      <div>
        <h2>View users</h2>
        <UserTable
          users={users}
          deleteUser={deleteUser}
          editRow={editRow}
        />
      </div>
    </div>
  );
}

const UserTable = (props) => {
  return (
    <table className="tableStyle">
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
                <button onClick={() => props.editRow(user)}>Edit</button>
                <button onClick={() => props.deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) return;
    props.addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        autoComplete="off"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        autoComplete="off"
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  const handleCancel = () => {
    props.setEditing(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUser(user.id, user);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Update user</button>
      <button onClick={handleCancel} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default App;

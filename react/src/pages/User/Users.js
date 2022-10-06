import React, { useState } from "react";

export default function Users() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");

  const getUsers = () => {
    fetch("http://localhost:3001/users")
      .then((s) => s.json())
      .then((response) => {
        setItems(response);
      });
  };

  const createUser = () => {
    //send the value to the server
    fetch("http://localhost:3001/create-user?username=" + username)
      .then((s) => s.json())
      .then((response) => {
        getUsers();
        alert(response.message);
      });
  };
  const deleteUser = () => {
    fetch("http://localhost:3001/deleteUser?username=" + username)
      .then((s) => s.json())
      .then((response) => {
        getUsers();
        alert(response.message);
      });
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={createUser}>Add user</button>
      <button onClick={deleteUser}>delete User</button>
      <hr />
      <h2>Users</h2>
      <button onClick={getUsers}>Get all</button>
      <hr />
      {items.map((x) => (
        <p>{x}</p>
      ))}
    </div>
  );
}

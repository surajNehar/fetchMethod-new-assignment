import React, { useState } from 'react';

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div className="details">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>{user.email}</p>
        <p>{`ID: ${user.id}`}</p>
      </div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch('https://reqres.in/api/users/');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <button onClick={getUsers}>Get Users</button>
      <div className="card-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;

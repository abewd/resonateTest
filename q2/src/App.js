import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User List</h1>
      </header>
      <div className="User-list">
        {users.map((user) => (
          <div key={user.id} className="User-item">
            <h1>{user.name}</h1>
            <h5>&#9993;{user.email}</h5>
            <h5>{user.address.street}</h5>
            <h5>{user.address.suite}</h5>
            <h5>{user.address.city}</h5>
            <h5>{user.address.zipcode}</h5>
            <h5>{user.phone}</h5>
            <h5>{user.website}</h5>
            <h5>{user.website}</h5>
            <h5>{user.company.name}</h5>
            <h6>User Id:{user.id}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

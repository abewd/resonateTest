// Import useful modules and copmponents for this applicationn
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Initializing state variable "users" with an empty array
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Defining an asynchronous function "fetchUsers"

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          // Fetching data from the specified URL
          "https://jsonplaceholder.typicode.com/users"
        );
        // Setting the state variable "users" with the fetched data
        setUsers(response.data);
      } catch (error) {
        // Logging an error message if it fails
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
    // Defining an empty dependency array to ensure the effect is only run once when the component mounts
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User List</h1>
      </header>
      <div className="User-list">
        {users.map((user) => (
          <div key={user.id} className="User-item">
            <h2>{user.name}</h2>
            <h5>&#9993; {user.email}</h5>
            <h5>
              📍 {user.address.suite}, {user.address.street},{" "}
              {user.address.city}, {user.address.zipcode}
            </h5>
            <h5>📞 {user.phone}</h5>
            <h5>🌐 {user.website}</h5>
            <h5>🏭 {user.company.name}</h5>
            <h6>User Id:{user.id}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the App component for use in other parts of the application
export default App;

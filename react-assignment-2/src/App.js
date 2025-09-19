import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Alice Johnson", role: "Frontend Developer" },
    { id: 2, name: "Bob Smith", role: "Backend Developer" },
    { id: 3, name: "Charlie Brown", role: "Full Stack Developer" }
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="card-container">
        {users.map(user => (
          <UserCard key={user.id} name={user.name} role={user.role} />
        ))}
      </div>
    </div>
  );
}

export default App;

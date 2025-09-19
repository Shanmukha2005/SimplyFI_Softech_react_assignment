import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Typography } from "antd";
import UserCard from "./UserCard";
import "antd/dist/reset.css";
import "./App.css";

const { Title } = Typography;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Title level={2} className="heading">User Profiles</Title>
      {loading ? (
        <div className="loader">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {users.map((user) => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <UserCard user={user} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;

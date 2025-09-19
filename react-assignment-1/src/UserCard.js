import React from "react";
import { Card, Button, Modal } from "antd";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

function UserCard({ user }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <>
      <Card
        hoverable
        cover={<img alt={user.name} src={avatarUrl} />}
        actions={[
          <Button type="link" onClick={showModal} key="details">
            View Details
          </Button>,
        ]}
      >
        <Card.Meta title={user.name} description={user.company.name} />
      </Card>

      <Modal
        title={user.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <p><MailOutlined /> {user.email}</p>
        <p><PhoneOutlined /> {user.phone}</p>
        <p><GlobalOutlined /> {user.website}</p>
        <p>
          Address: {user.address.suite}, {user.address.street},{" "}
          {user.address.city} - {user.address.zipcode}
        </p>
      </Modal>
    </>
  );
}

export default UserCard;

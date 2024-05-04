import React from "react";
import { Button, Image, Space, Typography, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

function AppHeader() {
  const profileMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="AppHeader" >
      <Image
        width={80}
        className="ic"
        src="https://www.suphala.co.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fsuphala-5cf97.appspot.com%2Fo%2Fhero%252FLogo%252Fimage%25201.png%3Falt%3Dmedia%26token%3D8aa7864b-aea1-456a-809c-58ca6ccf4725&w=128&q=75"
      />
      <Typography.Title     level={3}></Typography.Title>
      <Space>
        <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
          <Button type="primary">Profile</Button>
        </Dropdown>
      </Space>
    </div>
  );
}

export default AppHeader;

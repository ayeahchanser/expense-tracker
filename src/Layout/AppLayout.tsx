import { Layout, Menu, Row, Col, Button } from "antd";
import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const AppLayout: FC = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  let history = useHistory();
  const handleAddBatch = () => {
    history.push("/new-batch");
  };
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={"/"}>Transactions</Link>
          </Menu.Item>
        </Menu>

        {/* buton */}
        <Button type="primary" shape="circle" onClick={handleAddBatch}>
          <PlusOutlined />
        </Button>
      </Header>
      <Content>
        <Row>
          <Col span={24}>{children}</Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker {new Date().getFullYear()} Created by SkyHack
      </Footer>
    </Layout>
  );
};

export default AppLayout;

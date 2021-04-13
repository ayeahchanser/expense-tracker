import { Layout, Menu, Row, Col } from "antd";
import React, { FC } from "react";

const AppLayout: FC = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Transactions</Menu.Item>
        </Menu>
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

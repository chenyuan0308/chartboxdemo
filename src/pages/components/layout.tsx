import React, { useCallback, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import DetailsContent from "./DetailsContent";
import Header from "./header.tsx";
const { Content, Sider } = Layout;

const items = [
  {
    key: "/home",
    icon: React.createElement(UserOutlined),
    label: "Home",
  },
  // {
  //   key: "/home",
  //   icon: React.createElement(UserOutlined),
  //   label: "Home",
  // },
  // {
  //   key: "/home",
  //   icon: React.createElement(UserOutlined),
  //   label: "Home",
  // },
];

const App: React.FC = () => {
  // const navigate = useNavigate();

  const [defaultKey, setDefaultKey] = useState(["/home"]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = useCallback((item) => {
    setDefaultKey([item.key]);
  }, []);

  // useEffect(() => {
  //   navigate(defaultKey[0] === "1" ? "/detailsone" : "/detailstwo");
  // }, [defaultKey, navigate]);

  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={defaultKey}
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0", height: "100%" }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: "100%",
              overflowY: "auto",
            }}
          >
            <DetailsContent />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

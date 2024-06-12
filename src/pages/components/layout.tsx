import React, { useCallback, Suspense } from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import RouterView from "@/router/routets";
import { useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `details ${index + 1}`,
}));
const App: React.FC = () => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = useCallback(
    (item) => {
      navigate(item.key === "1" ? "/detailsone" : "/detailstwo");
    },
    [navigate]
  );
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
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0", height: "100%" }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Suspense>
              <RouterView />
            </Suspense>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

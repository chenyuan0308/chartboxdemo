import {
  TaobaoSquareFilled,
  UserOutlined,
  MenuOutlined,
  CaretRightFilled,
  DownOutlined
} from "@ant-design/icons";
import { Input, Dropdown, theme, Image } from "antd";
import type { DropdownProps } from "antd";
import "./header.sass";
import { useState } from "react";
const { Search } = Input;
const { useToken } = theme;

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  return (
    <>
      <div className="bg-white">
        <div className="ml-2 p-4  flex items-center header">
          <TaobaoSquareFilled style={{ fontSize: "60px", color: "red" }} />
          <span className="ml-4 font-bold text-2xl text-red-500">Shopping</span>
          <Search
            placeholder="Search for products here"
            size="large"
            style={{ width: "50%", background: "#eee" }}
            className="ml-4 bg-[#eee]"
          />
          <div className="ml-auto ">
            <span className="mr-4 cursor-pointer">register</span>
            <span className="mr-4 text-blue-400 cursor-pointer">login</span>
            <UserOutlined style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="ml-2 p-4 inline-flex items-center cursor-pointer">
          <Dropdown
            overlayStyle={{ width: "100%" }}
            dropdownRender={() => <NodeC></NodeC>}
            open={open}
            onOpenChange={handleOpenChange}
          >
            <div>
              <MenuOutlined style={{ fontSize: "20px" }} />
              <span className="ml-2">commodity Classification</span>
              <DownOutlined style={{marginLeft:'1rem',color:'red'}}/>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

const NodeC = () => {
  const { token } = useToken();
  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  return (
    <div className="p-8 bg-white flex" style={contentStyle}>
      <div className="">
        <div className="flex items-center">
          <Image
            width={"2rem"}
            style={{ borderRadius: "50%" }}
            src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Ficons%2FPkqdPDirMxW6m5J32pQSy.webp&w=640&q=100"
          />
          <span className="ml-2 text-xl">Fashion and Clothing</span>
        </div>
        <div className="flex items-center">
        <Image
            width={"2rem"}
            style={{ borderRadius: "50%" }}
            src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Ficons%2F5WqXrtYDMWbZGP70y2wAR.webp&w=640&q=100"
          />
          <span className="ml-2 text-xl">Digital Products</span>
        </div>
      </div>
      <div className="ml-8 flex flex-col justify-between">
        <div className="ml-2 text-xl pl-2" style={{borderLeft:'5px solid red'}}>shoe<CaretRightFilled style={{color:'red'}}/></div>
        <div className="ml-2 text-xl">Women's Shoes</div>
        <div className="ml-2 text-xl">Men's Clothing and Shoes</div>
      </div>
    </div>
  );
};

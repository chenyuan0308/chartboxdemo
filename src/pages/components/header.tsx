import { TaobaoSquareFilled } from "@ant-design/icons";
import { Input } from "antd";
import './header.sass'
const { Search } = Input;

export default function Header() {
  return (
    <>
      <div className="ml-2 p-4 bg-white flex items-center header">
        <TaobaoSquareFilled style={{ fontSize: "60px", color: "red" }} />
        <span className="ml-4 font-bold text-2xl text-red-500">Shopping</span>
        <Search placeholder="Search for products here" size='large' style={{ width: '50%',background:'#eee' }} className="ml-4 bg-[#eee]"/>
        <div className="ml-auto">
            <span>注册</span>
            <span>登录</span>
        </div>
      </div>
    </>
  );
}

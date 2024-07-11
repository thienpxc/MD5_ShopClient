import React from "react";
import "./profile.scss";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

interface MenuItem {
  icon: string;
  text: string;
  isNew?: boolean;
  path: string;
}

interface UserInfo {
  name: string;
  phone: string;
  avatar: string;
}

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems: MenuItem[] = [
    { icon: "🏠", text: "Trang chủ", path: "/" },
    { icon: "📜", text: "Lịch sử mua hàng", path: "/profile/orderhistory" },
    { icon: "🛡️", text: "Tài khoản của bạn", path: "/profile/edit" },
    { icon: "🔒", text: "Đổi mật khẩu", path: "/profile/changepassword" },
    { icon: "🎁", text: "Ưu đãi của bạn", path: "/profile/orderhistory" },

    // ... add other menu items
  ];

  const userInfo: UserInfo = {
    name: "LE THIEN",
    phone: "0966141082",
    avatar:
      "https://cdn2.cellphones.com.vn/50x50,webp,q100/media/wysiwyg/Shipper_CPS3_1.png", // Replace with actual avatar URL
  };
  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="app">
      <div className="sidebar">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => handleMenuClick(item.path)}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
            {item.isNew && <span className="new-badge">MỚI</span>}
          </div>
        ))}
      </div>
      <div className="main-content">
        <div className="user-info">
          <img src={userInfo.avatar} alt="Avatar" className="avatar" />
          <div>
            <h2>{userInfo.name}</h2>
            <p>{userInfo.phone}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat-item">
            <h3>4</h3>
            <p>đơn hàng</p>
          </div>
          <div className="stat-item">
            <h3>13M</h3>
            <p>Tổng tiền tích lũy</p>
          </div>
        </div>
        <div className="home_page_container">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

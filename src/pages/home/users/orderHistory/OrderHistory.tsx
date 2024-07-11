import React from "react";
import "./orderHistory.scss";


interface OrderItem {
  image: string;
  name: string;
  status: string;
  price: string;
  date: string;
  hasAdditionalItems?: boolean;
}

const OrderHistory: React.FC = () => {
  

  const orderItems: OrderItem[] = [

    {
      image: "power-bank.jpg",
      name: "Sạc dự phòng Golf 10.000mAh tích hợp dây L106-Đen",
      status: "Đã giao hàng",
      price: "530.000đ",
      date: "19/11/2023 09:18",
      hasAdditionalItems: true,
    },
    
  ];

  return (
    <div className="order-history">
      
      <div className="main-content">
        <div className="date-range">01/12/2020 - 26/06/2024</div>
        <div className="order-filters">
          <button className="active">Tất cả</button>
          <button>Chờ xác nhận</button>
          <button>Đã xác nhận</button>
          <button>Đang vận chuyển</button>
          <button>Đã giao hàng</button>
          <button>Đã hủy</button>
        </div>
        <div className="order-list">
          {orderItems.map((item, index) => (
            <div key={index} className="order-item">
              <img src={item.image} alt={item.name} />
              <div className="order-details">
                <h4>{item.name}</h4>
                {item.hasAdditionalItems && <p>và 1 sản phẩm khác</p>}
                <span className="status">{item.status}</span>
                <span className="price">{item.price}</span>
              </div>
              <div className="order-date">{item.date}</div>
              <button className="view-details">Xem chi tiết</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

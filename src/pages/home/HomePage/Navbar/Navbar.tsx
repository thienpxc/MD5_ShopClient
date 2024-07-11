import React, { useState } from "react";
import "./Navbar.scss";
interface NavItem {
  name: string;
  subCategories?: {
    [key: string]: string[];
  };
}

const navItems: NavItem[] = [
  {
    name: "Điện thoại, Tablet",
    subCategories: {
      "Thương hiệu": [
        "Mac",
        "ASUS",
        "Lenovo",
        "Dell",
        "HP",
        "Acer",
        "LG",
        "Huawei",
        "MSI",
        "Gigabyte",
        "Vaio",
        "Microsoft Surface",
      ],
      "Phân khúc giá": [
        "Dưới 10 triệu",
        "Từ 10 - 15 triệu",
        "Từ 15 - 20 triệu",
        "Từ 20 - 25 triệu",
        "Từ 25 - 30 triệu",
      ],
      "Nhu cầu sử dụng": [
        "Văn phòng",
        "Gaming",
        "Mỏng nhẹ",
        "Đồ họa - kỹ thuật",
        "Sinh viên",
        "Cảm ứng",
        "Laptop AI",
      ],
      "Dòng chip": [
        "Laptop Core i3",
        "Laptop Core i5",
        "Laptop Core i7",
        "Laptop Core i9",
        "Apple M1 Series",
        "Apple M2 Series",
        "Apple M3 Series",
        "AMD Ryzen",
        "Intel Core Ultra",
      ],
      "Kích thước màn hình": [
        "Laptop 12 inch",
        "Laptop 13 inch",
        "Laptop 14 inch",
        "Laptop 15.6 inch",
        "Laptop 16 inch",
      ],
    },
  },
  {
    name: "Laptop",
    subCategories: {
      "Thương hiệu": [
        "Mac",
        "ASUS",
        "Lenovo",
        "Dell",
        "HP",
        "Acer",
        "LG",
        "Huawei",
        "MSI",
        "Gigabyte",
        "Vaio",
        "Microsoft Surface",
      ],
      "Phân khúc giá": [
        "Dưới 10 triệu",
        "Từ 10 - 15 triệu",
        "Từ 15 - 20 triệu",
        "Từ 20 - 25 triệu",
        "Từ 25 - 30 triệu",
      ],
      "Nhu cầu sử dụng": [
        "Văn phòng",
        "Gaming",
        "Mỏng nhẹ",
        "Đồ họa - kỹ thuật",
        "Sinh viên",
        "Cảm ứng",
        "Laptop AI HOT and NEW",
      ],
      "Dòng chip": [
        "Laptop Core i3",
        "Laptop Core i5",
        "Laptop Core i7",
        "Laptop Core i9",
        "Apple M1 Series",
        "Apple M2 Series",
        "Apple M3 Series",
        "AMD Ryzen",
        "Intel Core Ultra HOT and NEW",
      ],
      "Kích thước màn hình": [
        "Laptop 12 inch",
        "Laptop 13 inch",
        "Laptop 14 inch",
        "Laptop 15.6 inch",
        "Laptop 16 inch",
      ],
    },
  },
  {
    name: "Âm thanh",
    subCategories: {
      "Chọn loại tai nghe": [
        "Bluetooth",
        "Chụp tai",
        "Nhét tai",
        "Có dây",
        "Thể thao",
        "Gaming",
        "Xem tất cả tai nghe",
      ],
      "Hãng tai nghe": [
        "Apple",
        "JBL",
        "Marshall",
        "Sony",
        "Soundpeats",
        "Xiaomi",
        "Samsung",
        "Sennheiser",
        "Beats",
        "ASUS",
        "Soul",
        "Havit",
        "Edifier",
      ],
      "Chọn theo giá": [
        "Tai nghe dưới 200K",
        "Tai nghe dưới 500K",
        "Tai nghe dưới 1 triệu",
        "Tai nghe dưới 2 triệu",
        "Tai nghe dưới 5 triệu",
      ],
      "Chọn loại loa": [
        "Loa Bluetooth",
        "Loa mini",
        "Loa Karaoke",
        "Loa Soundbar",
        "Loa vi tính",
        "Xem tất cả loa",
      ],
      "Hãng loa": [
        "JBL",
        "LG",
        "Sony",
        "Marshall",
        "Harman Kardon",
        "Tronsmart",
        "Samsung",
        "Edifier",
        "Bose",
      ],
      "Sản phẩm nổi bật": [
        "AirPods Pro 2",
        "AirPods 2",
        "JBL Tour Pro 2",
        "Soul S-LIVE 30",
        "Loa Onyx Studio 8",
        "Marshall Minor IV",
        "JBL Go 4",
        "JBL Xtreme 4",
        "JBL PartyBox Club 120",
      ],
      Mic: ["Micro không dây", "Mic thu âm"],
    },
  },
  {
    name: "Đồng hồ, Camera",
    subCategories: {
      "Loại đồng hồ": [
        "Đồng hồ thông minh",
        "Vòng đeo tay thông minh",
        "Đồng hồ định vị trẻ em",
        "Dây đeo",
      ],
      "Chọn theo thương hiệu": [
        "Apple Watch",
        "Samsung",
        "Xiaomi",
        "Huawei",
        "Coros",
        "Garmin",
        "Kieslect",
        "Amazfit",
        "Soundpeats",
        "Oppo",
      ],
      "Sản phẩm nổi bật ⚡": [
        "Apple Watch Series 9",
        "Apple Watch Ultra 2 2023",
        "Apple Watch SE",
        "Xiaomi Watch 2",
        "Garmin lily 2",
        "Huawei Watch GT4",
        "Samsung Galaxy Watch6",
        "Soundpeats Watch 4",
        "Huawei band 9",
        "Garmin Vivoactive 5",
        "DJI Air 3",
        "Huawei Watch Fit 3",
      ],
      Camera: [
        "Camera an ninh",
        "Camera hành trình",
        "Action Camera",
        "Gimbal",
        "Tripod",
        "Máy ảnh",
        "Flycam",
        "Xem tất cả camera",
      ],
      "Camera nổi bật": [
        "Camera an ninh Imou",
        "Camera an ninh Ezviz",
        "Camera an ninh Xiaomi",
        "Camera an ninh TP-Link",
        "Camera Dahua",
        "Camera Gopro",
        "Camera DJI",
        "Camera Insta360",
        "Máy ảnh Fujifilm",
        "Máy ảnh Canon",
        "Instax Mini 40",
        "Flycam dji",
        "Insta360 X4",
        "DJI Action 4",
      ],
    },
  },
  {
    name: "PC, Màn hình, Máy in",
    subCategories: {
      "Loại PC": ["Cấu hình sẵn", "All In One", "PC bộ", "Build PC"],
      "Chọn PC theo nhu cầu": ["Gaming", "Đồ họa", "Văn phòng"],
      "Linh kiện máy tính": [
        "CPU",
        "Main",
        "RAM",
        "Ổ cứng",
        "Nguồn",
        "VGA",
        "Tản nhiệt",
        "Case",
        "Xem tất cả",
      ],
      "Chọn màn hình theo hãng": [
        "ASUS",
        "Samsung",
        "DELL",
        "LG",
        "MSI",
        "Acer",
        "Xiaomi",
        "ViewSonic",
        "Philips",
        "AOC",
      ],
      "Chọn màn hình theo nhu cầu": [
        "Gaming",
        "Văn phòng",
        "Đồ họa",
        "Lập trình",
        "Màn hình di động",
        "Arm màn hình",
        "Xem tất cả",
      ],
      "Gaming Gear": [
        "PlayStation",
        "ROG Ally",
        "Bàn phím Gaming",
        "Chuột chơi game",
        "Tai nghe Gaming",
        "Tay cầm chơi Game",
        "Xem tất cả",
      ],
      "Thiết bị văn phòng": ["Máy in", "Phần mềm", "Decor bàn làm việc"],
    },
  },
  {
    name: "Khuyến mãi",
    subCategories: {
      "Hotsale cuối tuần": [],
      "Siêu sale phụ kiện": [],
      "Ưu đãi thanh toán": [],
      "Thu cũ 2G trợ giá đến 500k": [],
      "Khách hàng doanh nghiệp B2B": [],
      "Thu cũ đổi mới giá hời": [],
      "iPhone 15 trợ giá đến 2 triệu": [],
      "Galaxy Z Fold5 trợ giá 2 triệu": [],
      "OnePlus Nord 3 trợ giá 2 triệu": [],
      "Laptop trợ giá đến 3 triệu": [],
      "Đồng hồ trợ giá đến 1 triệu": [],
      "Ưu đãi thành viên": ["Nâng cấp chính sách Smember 3.0 HOT and NEW"],
      "Ưu đãi sinh viên": [
        "Tựu trường lên deal chiến HOT and NEW",
        "Đăng ký S-Student HOT and NEW",
      ],
      "Laptop giảm đến 800K": [],
      "Điện thoại giảm đến 6%": [],
      "Đồng hồ giảm thêm 6%": [],
      "Loa - tai nghe giảm thêm 5%": [],
      "Máy chơi game giảm thêm 5%": [],
      "Hàng cũ giảm thêm 5%": [],
      "Ưu đãi học viên Edu Talk": [],
      "Ưu đãi học viên Teky": [],
    },
  },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeItem === index ? "active" : ""}`}
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {item.name}
            {activeItem === index && item.subCategories && (
              <div className="sub-menu">
                {Object.entries(item.subCategories).map(
                  ([category, items], catIndex) => (
                    <div key={catIndex} className="sub-menu-column">
                      <h4>{category}</h4>
                      <ul>
                        {items.map((subItem, itemIndex) => (
                          <li key={itemIndex}>{subItem}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

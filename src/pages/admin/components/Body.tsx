import { Outlet, useNavigate } from "react-router-dom";

export default function Body() {
  const navigator = useNavigate();
  const menus = [
    {
      title: "Category Manager",
      url: "category",
    },
    {
      title: "Product Manager",
      url: "",
    },
    {
      title: "Receipt Manager",
      url: "",
    },
  ];
  return (
    <div id="content">
      <div className="left">
        {menus.map((menu, index) => (
          <button
            onClick={() => {
              navigator(menu.url);
            }}
            key={index}
            className="menu_btn btn btn-primary"
          >
            {menu.title}
          </button>
        ))}
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}

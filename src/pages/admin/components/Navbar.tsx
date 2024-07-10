import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar_box">
      <div className="user_box">
        <Link to={"/manager"}> HOME </Link>
        <img src={`${import.meta.env.VITE_SV}/notimg.jpg`} alt="avatar" />
        <div className="user_name"> admin</div>
      </div>
      <div className="authen_box"></div>
    </div>
  );
}

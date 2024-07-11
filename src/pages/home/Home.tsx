import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";


export default function Home() {
  
  return (
    <div className="home_page">
      <Header/>

      {/* <select
        className="form-select"
        aria-label="Default select example"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="vi">VI</option>
        <option value="en">EN</option>
      </select> */}

      <div className="home_page_container">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import "./sigin.scss";
import { useTranslation } from "react-i18next";
// import { showToast } from "../../../util/toast";
// import apis from "@/api/index.ts";

const Sigin: React.FC = () => {
  const { t } = useTranslation();
  const [touched, setTouched] = useState({
    name: false,
    password: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Example login data, replace with actual data from your form
    // const loginData = {
    //   loginId: formData.name, // Replace with actual username field
    //   password: formData.password, // Replace with actual password field
    // };
    // try {
    //   // Gọi apis.login.loginApi với loginData
    //   const response = await apis.login.loginApi(loginData);
    //   console.log(response.data);
    //   localStorage.setItem("token", response.data.token);

    //   //xét điều kiện nếu userRole = true thì chuyển hướng sang trang admin
    //   //gọi api user.verifyToken để lấy thông tin user
    //   const res = await apis.user.verifyToken(
    //     localStorage.getItem("token") || ""
    //   );
    //   console.log("da vao", res.data.data);
    //   if (res.data.data.userRole === true) {
    //     showToast.success(response.data.message);
    //     window.location.href = "/admin";
    //   } else {
    //     showToast.success(response.data.message);
    //     window.location.href = "/";
    //   }
    //   // showToast.success(response.data.message);
    //   // window.location.href = "/";
    // } catch (err) {
    //   // Lỗi sẽ được bắt ở đây nếu có
    //   console.log(err);
    //   showToast.error(err.response.data.message);
    //   // Handle error, e.g., show error message
    // }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target; // Sửa đổi ở đây để lấy tên của trường input
    setTouched({ ...touched, [name]: true });
  };
  return (
    <>
      <div id="fui-toast"></div>
      <div className="wrapper">
        <div className="containers">
          <img
            className="image"
            src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/cellphones-cong-bo-linh-vat-thuong-hieu-1.jpg"
            alt="Background"
          />
          <div className="login">
            <h2>{t("Login")}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("name")}
                  onBlur={handleBlur}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                {touched.name && !formData.name && (
                  <span className="error-message" style={{ color: "red" }}>
                    {t("Please")}
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={t("password")}
                  onBlur={handleBlur}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {touched.password && !formData.password && (
                  <span className="error-message" style={{ color: "red" }}>
                    {t("Please")}
                  </span>
                )}
              </div>

              <button type="submit">{t("Login")}</button>
            </form>

            <div className="social-buttons">
              <button>GitHub</button>
              <button>Twitter</button>
            </div>

            <div className="links">
              <a href="#">{t("Forgot")}</a>
              <br />
              <a href="/register">{t("account")}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sigin;

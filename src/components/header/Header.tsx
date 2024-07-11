import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { styled, alpha } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
// SCSS styles
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,

  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
// import { useSelector } from "react-redux";
// import { StoreType } from "@/stores/slices";
import vi from "@/i18n/vi";
import en from "@/i18n/en";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header: React.FC = () => {
//   const navigate = useNavigate();

//   const userStore = useSelector((store: StoreType) => {
//     return store.userStore;
//   });

//   const orderStore = useSelector((store: StoreType) => {
//     return store.orderStore;
//   });

  const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//   const handleUserOptionChange = (event: { target: { value: unknown } }) => {
//     const value = event.target.value;
//     if (value === "logout") {
//       // Đăng xuất
//       // Xoá token, xoá thông tin user
//       // Chuyển hướng về trang chủ
//       localStorage.removeItem("token");
//       window.location.href = "/";
//     } else if (value === "profile") {
//       // Điều hướng đến trang hồ sơ
//       navigate("/profile"); // Giả sử sử dụng hàm navigate từ react-router-dom
//     }
//   };

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  useEffect(() => {
    const currentLanguage = localStorage.getItem("lng") || "vi";
    setSelectedLanguage(currentLanguage);
    i18n.changeLanguage(currentLanguage);
  }, [i18n]);
  const handleLanguageChange = (event: any) => {
    const newLanguage = event.target.value;
    localStorage.setItem("lng", newLanguage);
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };
  return (
    <AppBar position="static" className="header-bar">
      <Toolbar className="toolbar">
        <Typography variant="h6" noWrap component="div" className="logo">
          <Link to="/"> CellphoneS</Link>
        </Typography>
        <div className="toolbar-icons">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Button color="inherit">
            {" "}
            <MenuIcon />
            {t("Danhmuc")}
          </Button>
          <Button color="inherit">{t("xemgia")}</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("search")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button color="inherit">{t("call")}</Button>
          <Button color="inherit">{t("shop")}</Button>
          <Button color="inherit">{t("order")}</Button>
          <Button className="button" color="inherit">
            <Link to="/cart">
              {t("cart")}{" "}
              {/* {orderStore.cart?.details.reduce((result, cur) => {
                return result + cur.quantity;
              }, 0) || 0} */}
            </Link>
          </Button>
          {/* <Button color="inherit">
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="vi">VI</option>
              <option value="en">EN</option>
            </select>
          </Button> */}

          {/* {userStore.data == null ? (
            <Button color="inherit" onClick={handleOpen} className="button">
              {t("login")}
            </Button>
          ) : (
            // <>
            //   <select onChange={handleUserOptionChange}>
            //     <option disabled selected>
            //       {userStore.data?.userName}
            //     </option>
            //     <option value="profile">{t("profile")}</option>
            //     <option value="logout">{t("logout")}</option>
            //   </select>
            // </>

            <FormControl fullWidth>
              <Select
                onChange={handleUserOptionChange}
                labelId="demo-simple-select-label"
                value={selectedLanguage}
                size="small"
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MenuItem value="lng" disabled selected>
                  Hello: {userStore.data?.userName}
                </MenuItem>
                <MenuItem value="profile">{t("profile")}</MenuItem>

                <MenuItem value="logout">{t("logout")}</MenuItem>
              </Select>
            </FormControl>
          )} */}
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              size="small"
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                width: "70px",
              }}
            >
              <MenuItem value="lng" selected>
                <LanguageIcon />
              </MenuItem>
              <MenuItem value="vi">Vietnamese</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="smember-modal">
              <button
                className="smember-modal__close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
              <h2 className="smember-modal__title">Smember</h2>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                alt="Smember"
                className="smember-modal__logo"
              />

              <p className="smember-modal__message">{t("model")}</p>

              <div className="smember-modal__buttons">
                <a
                  href="/register"
                  className="smember-modal__button smember-modal__button--register"
                >
                  {t("Register")}
                </a>
                <a
                  href="/login"
                  className="smember-modal__button smember-modal__button--login"
                >
                  {t("Login")}
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

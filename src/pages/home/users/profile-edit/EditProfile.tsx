import React, { useState } from "react";
import "./EditProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";
import apis from "@/apis";
import { userActions } from "@/stores/slices/user.slices";
import { showToast } from "@/util/toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const dispatch = useDispatch<Dispatch<UnknownAction>>();
  const navigate = useNavigate();
  const userStore = useSelector((store: StoreType) => {
    return store.userStore;
  });
  const [profile, setProfile] = useState({
    name: userStore.data?.userName || "",
    address: userStore.data?.address || "",
    email: userStore.data?.email || "",
    date: userStore.data?.date || "",
    phone: userStore.data?.phone || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      id: userStore.data?.id,
      userName: profile.name,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      date: profile.date,
      updateDate: new Date().toISOString(), // Điều chỉnh định dạng nếu cần
      status: true,
      userRole: false,
    };
    // Gọi API update thông tin user
    apis.user
      .updateUser(updatedData)
      .then((res) => {
        console.log("Update success", res.data);
        window.alert("Cập nhật thông tin thành công");
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        showToast.error(err.response.data.message);
      });
  };

  //nhan du lien thong tin tu form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => {
      // If the input is for the password and it's empty, return the previous profile without changes
      if (name === "password" && value === "") {
        return prevProfile;
      }
      // For all other cases, update the profile with the new value
      return {
        ...prevProfile,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2 className="profile-title">Edit your Profile</h2>

      <form onSubmit={handleSubmit}>
        <div className="edit-profile">
          <div className="profile-photo">
            <img src="./noavatar.jpg" alt="Profile" />
            <button className="change-photo">CHANGE PHOTO</button>
          </div>
          <div className="profile-name">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>

          <div className="profile-birth">
            <label>Address :</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
          </div>
          <div className="profile-email">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>
          <div className="profile-phone">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>
          <div className="profile-role">
            <label>Birth:</label>
            <input
              type="date"
              name="date"
              value={profile.date}
              onChange={handleChange}
              autoComplete="bday"
            />
          </div>

          <div className="profile-button">
            <button className="save">Save</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;

import React, { useState } from "react";
import "./PasswordChange.scss";
import apis from "@/apis";
import { useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";
import { useNavigate } from "react-router-dom";

const PasswordChange: React.FC = () => {
  const userStore = useSelector((store: StoreType) => {
    return store.userStore;
  });
  const naviagte = useNavigate();
  const [newPassword, setNewPassword] = useState({
    password: userStore.data?.password || "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      e.preventDefault();
      const updatedData = {
        id: userStore.data?.id,
        password: newPassword.password,
      };
      apis.user
        .changePassword(updatedData)
        .then((res) => {
          console.log("Update success", res.data);
          alert("Password changed successfully");
          localStorage.removeItem("token");
          naviagte("/login");
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword.password}
            onChange={(e) =>
              setNewPassword({ ...newPassword, password: e.target.value })
            }
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;

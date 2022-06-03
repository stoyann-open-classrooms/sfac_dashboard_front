import React from "react";
import "./Login.css";
import Logo from "../../assets/logo/sfac-logo14.jpg";
import LoginModal from "../../Components/LoginModal/LoginModal";
export default function Login() {
  return (
    <main className="main-login">
      <h1>Connexion</h1>
      <LoginModal></LoginModal>
      {/* <img className="form-logo" src={Logo} alt="" /> */}
    </main>
  );
}

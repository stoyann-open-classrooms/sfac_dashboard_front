import React from "react";
import "./Login.css";
export default function Login() {
  return (
    <main className="main-login">
      <h1>Page de connexion</h1>
      <form>
        <label htmlFor="">Entrez votre e-mail</label>
        <input type="text" />
        <label htmlFor="">Entrez votre mot de passe</label>
        <input type="password" />
        <button type="submit">Connection</button>
      </form>
    </main>
  );
}

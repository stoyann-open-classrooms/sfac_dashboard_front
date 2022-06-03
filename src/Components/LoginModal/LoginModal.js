import React from "react";

import { useSelector, useDispatch } from "react-redux";
import "./LoginModal.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function LoginModal() {
  const dispatch = useDispatch();

  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef([]);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email: inputs.current[0].value,
        password: inputs.current[1].value,
      };

      fetch("http://localhost:9000/sfac/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.localStorage.setItem("authToken", data.access_token);
          //   navigate("/private");
        });

      setValidation("");
    } catch (err) {
      setValidation(err, "erreur coté serveur");
    }
  };
  return (
    <>
      <div>
        <div className="modal-layout"></div>
        <div className="modal-dialog">
          <form onSubmit={handleForm}>
            <div class="form-control">
              <input ref={addInputs} type="text" id="usermail" />
              <label htmlFor="usermail">Entrez votre Email</label>
            </div>
            <div class="form-control">
              <label htmlFor="password">Entrez votre mot de passe</label>
              <input ref={addInputs} type="password" id="password" />
            </div>

            <button class="btn" type="submit">
              Connexion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

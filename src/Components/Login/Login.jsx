import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, } from "react-router-dom";
import { loginSuccessAction } from "../../Redux/AuthReducer/Auth_Action";
import Home from "../Home/Home";
import "../SignUp/SignUp.css";

function Login() {
  const [email, setEmaillog] = useState("");
  const [password, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!email || !password) {
      setFlag(true);
      console.log("Emapty");
    } else if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      dispatch(loginSuccessAction());
    }
  }

  return (
    <div className="buller">
      {home ? (
        <div className="bigdiv">
          {flag && (
            <h5
              style={{
                color: "red",
                position: "fixed",
                textAlign: "center",
                zIndex: "100",
                padding: "0px 30px",
              }}
            >
              Please Fill Correct Data
            </h5>
          )}

          <form onSubmit={handleSubmit}>
            <div className="textdiv">
              <h2>Login Page</h2>
              <br />
              <div
                style={{
                  textAlign: "right",
                  fontSize: "1.3rem",
                }}
              >
                <span>or</span>
                <Link to="/signup">Create Account</Link>
              </div>
              <h6>User Email</h6>
              <input
                type="text"
                className="inputText"
                placeholder="Enter Email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
              <br />
              <h6>Password</h6>
              <input
                type="text"
                className="inputText"
                placeholder="Enter Password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
              <br />
              <button
                type="submit"
                style={{
                  border: "none",
                  background: "#47B5FF",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "8px",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;

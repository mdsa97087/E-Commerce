import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("set  Login data  in local Storage");
      setLogin(!login);
    }
  }

  // function handleClick() {
  //   setLogin(!login);
  // }

  return (
    <div className="buller">
      {login ? (
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
              Please Fill Every field
            </h5>
          )}
          <form onSubmit={handleSubmit}>
            <div className="textdiv">
              <h2>SignUp Page</h2>
              <br />
              <h6>User Email @Gmail.com</h6>
              <input
                type="text"
                className="inputText"
                placeholder="Enter Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <h6>Password</h6>
              <input
                type="text"
                className="inputText"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <button
                style={{
                  border: "none",
                  background: "#47B5FF",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "8px",
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* *****************************GO TO NEXT PAGE BY LOGIN DATA  */}
          <Link to="/login">
            <h5
              style={{
                textAlign: "center",
                margin: "auto",
                color: "green",
              }}
            >
              User Already Register
            </h5>
          </Link>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default SignUp;

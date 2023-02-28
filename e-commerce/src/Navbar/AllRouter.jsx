import React from "react";
import Home from "../Components/Home/Home";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Cart from "../Components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Private from "../Components/Private/Private";

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/cart"
          element={
            <Private>
              {" "}
              <Cart />
            </Private>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default AllRouter;

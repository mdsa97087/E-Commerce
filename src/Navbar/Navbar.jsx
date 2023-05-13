import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterBySearch } from "../Redux/AppReducer/App_Action";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.AppReducer.search);
  var cart = useSelector((state) => state.CartReducer.cart);

  return (
    <div className="navbarDiv1">
      <div className="NavbarDiv">
        <Link className="link" to="/">
        <img src="https://i.imgur.com/VCDMM33.png" alt="" width={50} />

        </Link>
        <input
          className="NavbarInput"
          type="text"
          placeholder="Enter Title Name"
          value={search}
          onChange={(e) => dispatch(filterBySearch(e.target.value))}
        />
        <Link className="link" to="/login">
        <img src="https://i.imgur.com/9fQlDM4.png" alt="" width={50} />

        </Link>
        {/* <Link className="link" to="/signup">
        SignUp
      </Link> */}
        <Link className="link" to="/cart">
          <div>
            <img src="https://i.imgur.com/FE0ieTV.png" alt="" width={50} />
            <span className="cartLength">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

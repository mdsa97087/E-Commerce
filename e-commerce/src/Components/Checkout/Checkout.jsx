import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const [number, setNumber] = useState("0000000000000000");
  const [name, setName] = useState("xxxxx xxx");
  const [month, setMonth] = useState("xx");
  const [day, setDay] = useState("xx");
  const [cvv, setCvv] = useState("CCV");

  const typeNumber = (n) => {
    setNumber(n.target.value);
  };

  const typeName = (name) => {
    setName(name.target.value);
  };

  const typeMonth = (m) => {
    setMonth(m.target.value);
  };

  const typeDay = (d) => {
    setDay(d.target.value);
  };
  const typeCvv = (c) => {
    setCvv(c.target.value);
  };

  return (
    <>
      <div id="cartData" className="row">
        <div id="imagePart" className="small-5 small-offset-1 columns ">
          <div className="callout credit">
            <div className="row">
              <div className="small-6 columns">
                <h1 className="credit__bank">My Bank</h1>
              </div>
              <div className="small-6 columns">
                <img
                  className="credit__mc"
                  src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label>Card Number</label>
                <p className="credit__card-number">{number}</p>
                {/* <span className="credit__ccv">{cvv}</span> */}
              </div>
              <div className="small-9 columns">
                <label>
                  Card Holder
                  <p className="credit__name">{name}</p>
                </label>
              </div>
              <div id="creditCartFillData">
                <div className="small-3 columns">
                  <label>
                    Expires
                    <p className="credit__date">
                      {month} / {day}
                    </p>
                  </label>
                </div>
                <div className="small-3 columns">
                  <label>
                    Cvv
                    <p className="credit__ccv">{cvv}</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="inputPart" className="small-5 columns end">
          <div className="callout margin-top50">
            <label>NUMBER</label>
            <br />
            <input
              required
              type="number"
              maxLength="16"
              onChange={typeNumber}
              placeholder="Enter Number"
            />
            <br />
            <br />

            <label>NAME</label>
            <br />
            <input
              required
              type="text"
              onChange={typeName}
              placeholder="Enter Your Name"
            />

            <br />
            <br />
            <div className="row">
              <label className="column">EXPIRATION DATE</label>
              <div className="small-4 columns">
                <input
                  required
                  type="text"
                  maxLength="2"
                  onChange={typeMonth}
                  placeholder="Enter Month"
                />
                <input
                  required
                  type="text"
                  maxLength="2"
                  onChange={typeDay}
                  placeholder="Enter Date"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="small-4 column">
                <label>CCV</label>
                <br />
                <input
                  required
                  type="text"
                  maxLength="3"
                  onChange={typeCvv}
                  placeholder="Enter Cvv"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btnDiv">
        <Link to="/otp">
          <button type="button" className="btn btn-danger">
            CONFORM
          </button>
        </Link>
      </div>
    </>
  );
}

export default Checkout;

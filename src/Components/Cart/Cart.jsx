import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/CartReducer/Cart_Action";
import "./Cart.css";
import StarRating from "./StarRating";

function Cart() {
  const dispatch = useDispatch();
  var cart = useSelector((state) => state.CartReducer.cart);
  // console.log(cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.strike_price), 0));
  }, [cart]);

  return (
    <>
      <div className="cartDiv">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 50px",
          }}
        >
          <h3>
            TOTAL PRICE :-
            <span style={{ fontWeight: 700, fontSize: 25, color: "green" }}>
              ₹ {total}
            </span>
          </h3>
          <button type="button" className="btn btn-success">
            CHECK OUT
          </button>
        </div>

        {cart.map((cartItem) => (
          <div className="cartItem" key={cartItem.id}>
            {/* ````      ALL IMAGE MAP     ````````  ``` */}
            <div className="imageMap">
              {cartItem.images.map((el) => (
                <img src={el} alt={cartItem.title} height={100} width={100} />
              ))}
            </div>
            <img
              className="bigImage"
              src={cartItem.images[2]}
              alt={cartItem.title}
            />
            <div>
              <div>
                <h4>{cartItem.title}</h4>
                <h5>{cartItem.subtitle}</h5>
                <span className="pricetag">₹ {cartItem.strike_price} </span>
                {/*   ```   FOR CUT PRICE TAG del USE   ````` */}
                <span>
                  <del>₹{cartItem.discounted_price}</del>
                </span>
                <span
                  style={{
                    color: "green",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  {cartItem.discount}
                </span>
                <StarRating rating={cartItem.rating} />
              </div>

              {/*   ```````    SIZE DATA MAP      ````````` */}

              <div className="sizeMap">
                {cartItem.size.map((el) => (
                  <button type="button" className="btn btn-secondary">
                    {el}
                  </button>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => dispatch(removeFromCart(cartItem))}
                >
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;

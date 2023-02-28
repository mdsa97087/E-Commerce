import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/CartReducer/Cart_Action";

function Add_Remove_Cart({ el }) {
  const dispatch = useDispatch();
  var cart = useSelector((state) => state.CartReducer.cart);

  return (
    <div>
      {cart.some((p) => p.id === el.id) ? (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(removeFromCart(el))}
        >
          REMOVE TO CART
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch(addToCart(el))}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}

export default Add_Remove_Cart;

import React from "react";
import { useSelector } from "react-redux";

function Cart_Side_Image() {
  var cart = useSelector((state) => state.CartReducer.cart);
  console.log(cart);
  return (
    <div>
      {cart.map((img) => (
        <div
          key={img.id}
      //     style={{
      //       display: "grid",
      //       gridTemplateColumns:'1fr 1fr',
      //       gap: "25px",
      //     }}
        >
          {/* {console.log(img.images)} */}
          {img.images.map((el) => (
            <img src={el} alt={img.title} height={100} width={100} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Cart_Side_Image;

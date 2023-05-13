import React from "react";

function StarRating({ rating }) {
      
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
//     debugger;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/star-2694319-2236315.png?f=avif&w=128"
            alt=""
            width={20}
          />
        ) : rating >= number ? (
          /* AiFillStar */
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/star-2694318-2236314.png?f=avif&w=128"
            alt=""
            width={20}
          />
        ) : (
          /* AiOutlineStar */
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/star-3661048-3095468.png?f=avif&w=128"
            alt=""
            width={20}
          />
        )}
      </span>
    );
  });

  return <div>{ratingStar}</div>;
}

export default StarRating;

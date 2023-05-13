import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByRating } from "../../Redux/CartReducer/Cart_Action";

function Filter_By_Rating() {
  const dispatch = useDispatch();
  var data = useSelector((state) => state.AppReducer.data);
  var byRating = useSelector((state) => state.CartReducer.byRating);
//   var sort = useSelector((state) => state.CartReducer.sort);


  let Fdata=data.filter((el) => {
      return el.rating >= byRating
  })

  console.log(Fdata);
  console.log(byRating);

  return (
    <div className="filterRating_Div">
      <h6 style={{ paddingRight: 10 }}>RATING </h6>

      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={() => dispatch(filterByRating(i))}
          style={{ cursor: "pointer" }}
        >
          {byRating > i ? (
            <img
            src="https://cdn.iconscout.com/icon/free/png-256/star-2694319-2236315.png?f=avif&w=128"
            alt=""
            width={30}
          />
          ) : (
            <img
            src="https://cdn.iconscout.com/icon/free/png-256/star-3661048-3095468.png?f=avif&w=128"
            alt=""
            width={30}
          />
          )}
        </span>
      ))}
    </div>
  );
}

export default Filter_By_Rating;

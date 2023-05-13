import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORT_BY_PRICE } from "../../Redux/AppReducer/App_Actiontype";
import { sortByPrice } from "../../Redux/CartReducer/Cart_Action";
import "./Sidebar.css";

function Sort_By_Price() {
  const dispatch = useDispatch();
  var sort = useSelector((state) => state.CartReducer.sort);
  var data = useSelector((state) => state.AppReducer.data);
  //   console.log(data);

  data = data.sort((a, b) =>
    sort === "lowToHigh" ? a.strike_price - b.strike_price : !sort
  );
  data = data.sort((a, b) =>
    sort === "highToLow" ? b.strike_price - a.strike_price : !sort
  );

  return (
    <>
      <h6 style={{
        textAlign:"center"
      }}>SORT ACCORDING TO PRICE</h6>
      <div className="sidebarDiv">
        {/* ```````     ASCENDING ORDER    ````````` */}

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => dispatch(sortByPrice())}
            checked={sort === "lowToHigh" ? true : false}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Ascending
          </label>
        </div>

        {/* ```````     DESCENDING ORDER    ````````` */}

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={() =>
              dispatch({
                type: SORT_BY_PRICE,
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Descending
          </label>
        </div>
      </div>
    </>
  );
}

export default Sort_By_Price;

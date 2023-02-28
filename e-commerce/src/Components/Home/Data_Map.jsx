import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getData } from "../../Redux/AppReducer/App_Action";
import Add_Remove_Cart from "../Cart/Add_Remove_Cart";
import StarRating from "../Cart/StarRating";
import Pagination from "../Pagination'/Pagination";
import "./Data_Map.css";

function Data_Map() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const search = useSelector((state) => state.AppReducer.search);
  const data = useSelector((state) => state.AppReducer.data);
  var sort = useSelector((state) => state.CartReducer.sort);
  var byRating = useSelector((state) => state.CartReducer.byRating);
  const [page, setPage] = useState(1);

  // console.log(data);

  useEffect(() => {
    if (location || data.length === 0) {
      // const genre = searchParams.getAll("genre");
      const queryParams = {
        params: {
          _limit: 20,
          _page: page,
          sort,
          byRating,
          // _sort: searchParams.get("sortBy") && "year",
          // _order: searchParams.get("sortBy"),
        },
      };
      dispatch(getData(queryParams));
    }
  }, [search, page, sort, byRating, location.search]);

  const fetchDataPost = (changeBy) => {
    setPage(page + changeBy);
  };

  return (
    <div>
      <div className="dataDiv">
        {/* ````        FILTER PRODUCT NAME BY TITLE    ````````` */}

        {data
          .filter((e) => {
            return search.toLocaleLowerCase() === ""
              ? e
              : e.title.toLocaleLowerCase().includes(search);
          })

          /*     ```````````               MAP DATA           ``````````` */
          .map((el) => (
            <div className="mapDiv" key={el.id}>
              {/* <span>{el.id}</span> */}
              <img src={el.images[0]} alt={el.title} height={200} width={180} />
              <h5>{el.title}</h5>
              <h5>₹ {el.strike_price}</h5>
              <StarRating rating={el.rating} />
              <br />

              {/* ```     ADD AND REMOVE PRODUCT FROM CART BY BUTTON ````````` */}

              <Add_Remove_Cart el={el} />
            </div>
          ))}
      </div>

      {/* `` ``````````     PAGINATION PART     `````````````````` */}

      <div className="pagination">
        <Pagination page={page} fetchDataPost={fetchDataPost} />
      </div>
    </div>
  );
}

export default Data_Map;

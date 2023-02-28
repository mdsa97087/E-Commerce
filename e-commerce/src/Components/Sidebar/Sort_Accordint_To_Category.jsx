import React from "react";

function Sort_Accordint_To_Category() {
  return (
    <div className="filterCatogryDiv">
      <h6>SORT ACCORDING TO CATEGORY</h6>
      <br />
      <div className="resetAllDiv">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            CATEGORY
          </button>
          <ul className="dropdown-menu">
            <button type="button" className="dropdown-item">
              CHILD
            </button>
            <li>
              <button type="button" className="dropdown-item">
                MEN
              </button>
            </li>
            <li>
              <button type="button" className="dropdown-item">
                WOMEN
              </button>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="button" className="btn btn-danger">
          RESET FILTER
        </button>
      </div>
    </div>
  );
}

export default Sort_Accordint_To_Category;

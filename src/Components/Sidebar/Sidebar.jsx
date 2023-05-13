import React from "react";
import Filter_By_Rating from "./Filter_By_Rating";
import Sort_Accordint_To_Category from "./Sort_Accordint_To_Category";
import Sort_By_Price from "./Sort_By_Price";

function Sidebar() {
  // const dispatch = useDispatch();

  return (
    <div>
      <Sort_By_Price />
      <br />
      <Filter_By_Rating />
      <br />
      <Sort_Accordint_To_Category />
    </div>
  );
}

export default Sidebar;

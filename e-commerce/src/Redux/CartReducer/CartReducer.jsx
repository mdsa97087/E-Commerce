import {
  ADD_TO_CART,
  FILTER_BY_RATING,
  REMOVE_FROM_CART,
} from "../AppReducer/App_Actiontype";

const initState = {
  cart: [],
};

const CartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    //    `````````  REMOVE TO CART ``````````

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== payload.id),
      };

    //          ```````````  SORT ACCORDING TO PRICE   ````````````

    case "SORT_BY_PRICE":
      return { ...state, sort: payload };

    //          ```````````  FITER ACCORDING TO RATING   ````````````

    case "FILTER_BY_RATING":
      return { ...state, byRating: payload };

    default: {
      return state;
    }
  }
};

export default CartReducer;

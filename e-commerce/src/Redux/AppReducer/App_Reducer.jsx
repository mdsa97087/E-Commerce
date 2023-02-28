import {
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
  FILTER_BY_SEARCH,
} from "./App_Actiontype";

const initState = {
  data: [],
  search: "",
  isLoading: false,
  isError: false,
  cart: [],
  // byRating:0,
};

const AppReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //    ``````````````  FITER BY TITLE PART ```````````

    case FILTER_BY_SEARCH:
      return {
        ...state,
        isLoading: false,
        search: payload,
      };


      


    default: {
      return state;
    }
  }
};

export default AppReducer;

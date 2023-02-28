import axios from "axios";
import {
      FILTER_BY_SEARCH,
      GET_DATA_FAILURE,
      GET_DATA_REQUEST,
      GET_DATA_SUCCESS,
} from "./App_Actiontype";


const getDataRequest = () => {
      return {
            type: GET_DATA_REQUEST,
      };
};

const getDataSuccess = (payload) => {
      return {
            type: GET_DATA_SUCCESS,
            payload,
      };
};

const getDataFailure = () => {
      return {
            type: GET_DATA_FAILURE,
      };
};

//  ``````````````` API CALLING `````````````

export const getData = (queryParams)=> (dispatch) => {
      dispatch(getDataRequest())
      return axios.get(`http://localhost:8080/clothing`,queryParams)
            .then((res) => {
                  dispatch(getDataSuccess(res.data))
            }).catch((err) => {
                  dispatch(getDataFailure(err))
            })
};



//  ``````````````  FILTER BY TITLE PART     ```````````


export const filterBySearch = (search) => ({
      type: FILTER_BY_SEARCH,
      payload: search,

})

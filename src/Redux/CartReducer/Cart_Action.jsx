import { ADD_TO_CART, FILTER_BY_RATING, REMOVE_FROM_CART, SORT_BY_PRICE } from "../AppReducer/App_Actiontype";


//  ````````ADD TO CART PART ``````````````

export const addToCart = (cart) => ({
      type: ADD_TO_CART,
      payload: cart,
      
});

//    `````````  REMOVE TO CART ``````````

export const removeFromCart=(id) => ({
      type: REMOVE_FROM_CART,
      payload: id,
})

//          ```````````  SORT ACCORDING TO PRICE   ````````````

export const sortByPrice=() => ({
      type: SORT_BY_PRICE,
      payload: "lowToHigh",
})

export const filterByRating =(i) => ({
      type:FILTER_BY_RATING,
      payload: i+1,

})


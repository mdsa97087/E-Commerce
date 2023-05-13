
const initState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};



const AuthReducer = (state=initState, action) => {
  const {type,payload} =action
  switch (type) {
    case "LOGIN_LOADING":
      return {
        isAuth: false,
        token: "",
        isError: false,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        isLoading: false,
        isAuth: true,
        token: payload,
        isError: false,
      };
    case "LOGIN_FAILURE":
      return {
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    default: {
      return state;
    }
  }
};

export default AuthReducer;

// action creators related to auth state;

export const lodingRequest = (payload) => {
      return {
        type: "LOGIN_LOADING",
        payload,
      };
    };
    export const loginSuccessAction = (payload) => {
      return {
        type: "LOGIN_SUCCESS",
        payload,
      };
    };
    
    export const loginFailureAction = () => {
      return { type: "LOGIN_FAILURE" };
    };
    
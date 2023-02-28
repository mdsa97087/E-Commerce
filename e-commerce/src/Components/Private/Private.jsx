import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Private({ children }) {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Private;

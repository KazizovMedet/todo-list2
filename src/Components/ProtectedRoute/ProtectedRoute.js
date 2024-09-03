import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({ isAuth = false, children }) => {
  if (!isAuth) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();
//   console.log(location)

//   if (loading) {
//     return <span className="loading loading-spinner loading-lg"></span>;
//   }
//   if (user?.email) {
//     return children;
//   }

//   return <Navigate to={"/login"} state={location.pathname} replace></Navigate>;
// };

// export default PrivateRoute;

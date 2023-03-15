import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Shared/Loading";
import { AuthContext } from "../../contexts/AuthProvider";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
}

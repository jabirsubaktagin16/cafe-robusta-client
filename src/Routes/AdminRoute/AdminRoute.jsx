import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Shared/Loading";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

export default function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
}

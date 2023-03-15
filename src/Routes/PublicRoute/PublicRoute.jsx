import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Shared/Loading";
import { AuthContext } from "../../contexts/AuthProvider";

export const PublicRoute = ({ children }) => {
  //   const [loading, setLoading] = useState(true);
  //   const token = localStorage.getItem("accessToken");
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

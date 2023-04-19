import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

export default function useUserDetails(email) {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          logOut();
          localStorage.removeItem("accessToken");
          navigate("/signin");
          toast("Please Sign In First");
        }
        return res.json();
      })
      .then((data) => setCurrentUser(data.response[0]));
  }, [email]);

  return [currentUser, setCurrentUser];
}

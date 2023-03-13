import { useEffect, useState } from "react";

export default function useToken(email) {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8000/api/v1/user/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
}

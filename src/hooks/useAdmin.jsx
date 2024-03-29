import { useEffect, useState } from "react";

export default function useAdmin(email) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://cafe-robusta-server.onrender.com/api/v1/user/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.admin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
}

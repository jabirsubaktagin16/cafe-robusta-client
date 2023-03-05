import { useEffect, useState } from "react";

export default function useMenus({ categoryName }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/foods/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setMenus(data.response));
  }, []);

  return [menus, setMenus];
}

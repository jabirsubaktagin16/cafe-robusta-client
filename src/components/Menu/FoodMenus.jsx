import React, { useEffect, useState } from "react";
import SingleFoodMenu from "./SingleFoodMenu";

export default function FoodMenus({ categoryName }) {
  const [title, setTitle] = useState(categoryName);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/foods/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setMenus(data.response));
  }, []);

  return (
    <>
      <h1 className="text-4xl tracking-widest text-start oswald-font uppercase font-semibold">
        {title}
      </h1>
      <hr className="h-1 w-3/12 mt-2 mb-8 bg-primary border-0 dark:bg-primary"></hr>
      {menus.map((menu) => (
        <div className="py-2">
          <SingleFoodMenu key={menu?.response?._id} menu={menu} />
        </div>
      ))}
    </>
  );
}

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
      <h1 className="text-3xl tracking-widest text-start oswald-font uppercase font-semibold">
        {title}
      </h1>
      <hr className="h-1 w-3/12 my-8 bg-primary border-0 dark:bg-primary"></hr>
      {menus.map((menu) => (
        <div className="py-5">
          <SingleFoodMenu key={menu._id} menu={menu} />
        </div>
      ))}
    </>
  );
}

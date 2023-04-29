import React, { useEffect, useState } from "react";
import CardSkeleton from "../Shared/CardSkeleton";
import SingleFoodMenu from "./SingleFoodMenu";

export default function FoodMenus({ categoryName }) {
  const [title, setTitle] = useState(categoryName);
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://cafe-robusta-server.onrender.com/api/v1/foods/category/${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMenus(data.response);
        setIsLoading(false);
      });
  }, []);

  // if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="text-4xl tracking-widest text-start barlow-font uppercase font-semibold">
        {title}
      </h1>
      <hr className="h-1 w-3/12 mt-2 mb-8 bg-primary border-0 dark:bg-primary"></hr>
      {isLoading && <CardSkeleton />}
      {menus.map((menu) => (
        <div className="py-2">
          <SingleFoodMenu key={menu._id} menu={menu} />
        </div>
      ))}
    </>
  );
}

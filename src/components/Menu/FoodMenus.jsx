import React, { useState } from "react";
import SingleFoodMenu from "./SingleFoodMenu";

export default function FoodMenus({ categoryName }) {
  const [title, setTitle] = useState(categoryName);
  return (
    <>
      <h1 className="text-3xl tracking-widest text-start oswald-font uppercase font-semibold">
        {title}
      </h1>
      <hr className="h-1 w-3/12 my-8 bg-primary border-0 dark:bg-primary"></hr>
      <SingleFoodMenu />
    </>
  );
}

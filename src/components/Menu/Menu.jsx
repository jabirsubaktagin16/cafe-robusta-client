import React from "react";
import PageTitle from "../Shared/PageTitle";
import CoffeeDrinks from "./CoffeeDrinks";
import MenuBanner from "./MenuBanner";

export default function Menu() {
  return (
    <>
      <PageTitle title="Our Menus" />
      <MenuBanner />
      <CoffeeDrinks />
    </>
  );
}

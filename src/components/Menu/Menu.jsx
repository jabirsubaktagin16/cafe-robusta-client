import React from "react";
import PageTitle from "../Shared/PageTitle";
import CoffeeDrinks from "./CoffeeDrinks";
import MenuBanner from "./MenuBanner";
import MiddleBanner from "./MiddleBanner";
import OtherFoods from "./OtherFoods";

export default function Menu() {
  return (
    <>
      <PageTitle title="Coffees, Drinks & Foods" />
      <MenuBanner />
      <CoffeeDrinks />
      <MiddleBanner />
      <OtherFoods />
    </>
  );
}

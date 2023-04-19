import React from "react";
import CoffeeDrinks from "../components/Menu/CoffeeDrinks";
import MenuBanner from "../components/Menu/MenuBanner";
import MiddleBanner from "../components/Menu/MiddleBanner";
import OtherFoods from "../components/Menu/OtherFoods";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import PageTitle from "../components/Shared/PageTitle";

export default function Menu() {
  return (
    <>
      <Header />
      <PageTitle title="Coffees, Drinks & Foods" />
      <MenuBanner />
      <CoffeeDrinks />
      <MiddleBanner />
      <OtherFoods />
      <Footer />
    </>
  );
}

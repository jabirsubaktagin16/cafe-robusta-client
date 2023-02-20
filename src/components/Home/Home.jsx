import React from "react";
import Extras from "./Extras";
import SecondSection from "./SecondSection";
import Testimonials from "./Testimonials";
import ThirdSection from "./ThirdSection";
import TopBanner from "./TopBanner";

export default function Home() {
  return (
    <section className="bg-base-200">
      <TopBanner />
      <SecondSection />
      <ThirdSection />
      <Testimonials />
      <Extras />
    </section>
  );
}

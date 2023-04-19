import React from "react";
import Extras from "../components/Home/Extras";
import SecondSection from "../components/Home/SecondSection";
import Testimonials from "../components/Home/Testimonials";
import ThirdSection from "../components/Home/ThirdSection";
import TopBanner from "../components/Home/TopBanner";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import PageTitle from "../components/Shared/PageTitle";

export default function Home() {
  return (
    <section className="bg-base-200">
      <PageTitle title="" />
      <Header />
      <TopBanner />
      <SecondSection />
      <ThirdSection />
      <Testimonials />
      <Extras />
      <Footer />
    </section>
  );
}

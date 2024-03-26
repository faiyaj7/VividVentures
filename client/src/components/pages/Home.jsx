import React from "react";
import HeroBanner from "../HeroBanner";
import Promotions from "../Promotions";
import FeaturedProducts from "../FeaturedProducts";
import PopularCategories from "../PopularCategories";
import Sponsors from "../Sponsors";
import LatestProducts from "../LatestProducts";
import useDocumentTitle from "../ComponentTitle";

const Home = () => {
  useDocumentTitle("VividVentures | Home");
  return (
    <>
      <HeroBanner />
      <Promotions />
      <LatestProducts />
      <FeaturedProducts />
      <PopularCategories />
      <Sponsors />
    </>
  );
};

export default Home;

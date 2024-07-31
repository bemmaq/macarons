import React from "react";
import Banner from "./About/ui/Banner";
import SetPage from "../SetPage/ui/SetPage";
import Sale from "../Sale/ul/Sale";
import PopularSets from "./../PopularSets/data/ui/PopularSetsTwo";
import Services from "../Services/ui/Services";
import { useOutletContext } from "react-router-dom";
import NewProduct from "../NewProduct/ui/NewProduct";

const HomePage = () => {
  const { popularSetsRef } = useOutletContext();

  return (
    <div>
      <Banner />
      <SetPage />
      <Sale />
      <PopularSets ref={popularSetsRef} />
      <NewProduct />
      <Services />
    </div>
  );
};

export default HomePage;

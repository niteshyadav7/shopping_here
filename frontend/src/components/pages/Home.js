import React from "react";
import Header from "../Body/Header";
import Carousal from "../Body/Carousal";
import Card from "../Body/Card";

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="">
        <Carousal />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Home;

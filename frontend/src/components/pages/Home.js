import React from "react";
import Header from "../Body/Header";
import Carousal from "../Body/Carousal";
import Card from "../Body/Card";
import Footer from "../Body/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <Header />
      </div>
      <div className="mt-8">
        <Carousal />
      </div>
      <div>
        <Card />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../Body/Header";
import Footer from "../Body/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Outlet />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

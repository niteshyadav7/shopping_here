import React from "react";
import Carousal from "./Carousal";
import Card from "./Card";

const Body = () => {
  return (
    <>
      <div className="mt-8">
        <Carousal />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Body;

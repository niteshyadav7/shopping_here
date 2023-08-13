import React from "react";

const About = () => {
  return (
    <>
      <div className=" ">
        <div>
          <h1 className="p-10 text-3xl font-bold text-yellow-400 hover:text-green-400 cursor-pointer">
            About Us
          </h1>
        </div>
        <ul className="lis">
          <li className="text-xl font-semibold p-2">
            <span className="mr-2">⭐</span> Communicate the story of your
            business and why you started it.
          </li>
          <li className="text-xl font-semibold p-2">
            <span className="mr-2">⭐</span> Describe the customers or the cause
            that your business serves.
          </li>
          <li className="text-xl font-semibold p-2">
            <span className="mr-2">⭐</span> Explain your business model or how
            your products are made.
          </li>
          <li className="text-xl font-semibold p-2">
            <span className="mr-2">⭐</span> Put a face to your business,
            featuring the founders or the people on your team.
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;

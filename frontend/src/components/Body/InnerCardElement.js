import React from "react";

const InnerCardElement = ({data}) => {
  return (
    <div className="flex justify-between">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          class="rounded-t-lg"
          src={data?.img[0]}
          alt=""
        />
      </div> 
      <div>
        <h1>{data?.name}</h1>
        <p>About</p>
        <p>Des</p>
      </div>
    </div>
  );
};

export default InnerCardElement;

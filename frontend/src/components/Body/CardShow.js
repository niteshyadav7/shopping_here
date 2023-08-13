import React from "react";

const CardShow = ({ data }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <span>
        <img className="h-96 w-96 rounded-t-lg" src={data?.img[0]} alt="img" />
      </span>
      <div className="p-5">
        <span>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.name}
          </h5>
        </span>
        <div className="flex justify-between">
          <div className="font-medium text-base mt-2">
            <img
              className="w-7 mb-1 mr-2   inline"
              src="https://img.freepik.com/premium-vector/simple-trendy-star-logo_535345-2471.jpg"
              alt="images"
            />
            {data?.avgRating}
          </div>
          <div className="font-medium text-base mt-2">MRP:₹ {data?.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CardShow;

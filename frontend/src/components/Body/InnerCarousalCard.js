import React from "react";

const InnerCarousalCard = ({ data }) => {
  //   console.log(data);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <span className="">
        <img className="h-96 w-96 rounded-t-lg" src={data?.img} alt="img" />
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
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
           Add To Cart
        </button>
      </div>
    </div>
  );
};

export default InnerCarousalCard;

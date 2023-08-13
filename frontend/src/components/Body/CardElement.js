import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import InnerCardElement from "./InnerCardElement";

const CardElement = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/product/${id}`);
    setData(data?.data[0]?.user);
  };
  //   console.log(data);

  return (
    <>
      <div className="p-10 md:visible">
        <div className="flex justify-evenly">
          <div>
            <img
              className="rounded-2xl sm:w-52 lg:w-96"
              src={data?.img[0]}
              alt="Images"
              
            />
            <h1 className="font-extrabold text-2xl mt-4 sm:invisible md:visible">
              Description
            </h1>
            <p className="w-96 mt-2 font-extralight sm:invisible md:visible">{data?.description}</p>
          </div>
          <div className="mt-20">
            <div className="mr-20 w-80 ">
              <h1 className="text-xl font-bold">{data?.name}</h1>
              <h3 className="text-lg  font-semibold">MRP: {data?.price}</h3>
              <h3 className="text-lg font-semibold text-green-500">Summary</h3>
              <ul className="sm:invisible md:visible">
                {data?.summary?.map((el, id) => (
                  <li className="mt-2 font-light" key={id}>
                    ⭐ {el}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 p-5 mt-10"
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
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardElement;

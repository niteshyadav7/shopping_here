import axios from "axios";
import { useEffect, useState } from "react";
import CardShow from "./CardShow";

const Card = () => {
  const [text, setText] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/product");
    setText(data?.data[0]?.user);
    // console.log(data?.data[0]?.user);
  };
  console.log(text);
  return (
    <>
      <div className="">
        <div className="mt-5">
          <ul className="ml-20 flex">
            <li>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Top Rated Restaurants
              </button>
            </li>
            <li>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Faster Delivery
              </button>
            </li>
            <li className="ml-52 flex w-1/3">
              <form>
                <input
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-red-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  placeholder="Search Restaurants "
                />
                <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-14 flex justify-evenly flex-wrap">
        {text.map((data, id) => (
          <div>
            <CardShow />
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;

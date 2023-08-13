import axios from "axios";
import { useEffect, useState } from "react";
import CardShow from "./CardShow";
import { filterTop } from "./utils/data";
import { filterHigh } from "./utils/data";
import { filterLow } from "./utils/data";
import { filterByName } from "./utils/data";

const Card = () => {
  const [text, setText] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/product");
    setText(data?.data[0]?.user);
    // console.log(data?.data[0]?.user);
    setFilterData(data?.data[0]?.user);
  };

  const handleTopProduct = () => {
    // console.log(text);
    setFilterData(filterTop(text));
  };

  const handlePriceHL = () => {
    setFilterData(filterHigh(filterData));
  };

  const handlePriceLH = () => {
    setFilterData(filterLow(filterData));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterData(filterByName(input, text));
    // console.log(input);
  };
  return (
    <>
      <div className="">
        <div className="mt-7 ml-14">
          <h1 className="ml-20 pb-6 text-2xl font-bold text-green-400">
            Total Number Of Product {filterData.length}
          </h1>
          <ul className="ml-20 flex">
            <li>
              <button
                onClick={handleTopProduct}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Top Rated Product
              </button>
            </li>

            <li>
              <button
                onClick={handlePriceHL}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Price : High-Low
              </button>
            </li>
            <li>
              <button
                onClick={handlePriceLH}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Price : Low - High
              </button>
            </li>
            <li className="ml-52 flex w-1/3">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-red-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  placeholder="Search Product "
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
        {filterData.map((data, id) => (
          <div key={id} className="mt-5">
            <CardShow data={data} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InnerCarousalCard from "./InnerCarousalCard";

const CarousalElement = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/carousal/${id}`
    );
    setData(data?.data[0]?.user?.data);
    // console.log(data?.data[0]?.user);
  };
//   console.log(data);

  return (
    <>
      <div className="flex justify-center flex-wrap">
        {data.map((el, id) => {
          return (
            <div key={id} className="p-5 m-5">
              <InnerCarousalCard data={el} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CarousalElement;

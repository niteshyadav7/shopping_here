import axios from "axios";
import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
import CarousalCard from "./CarousalCard";
// import CarousalCard from "./CarousalCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
 
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Carousal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/carousal");
    setData(data?.data[0]?.user);
    // console.log(data);
  };

  //   console.log(data?.data[0]?.user);
//   console.log(data);
  return (
    <>
      <Carousel swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
        {data.map((data, id) => (
          <div key={id}>
            <CarousalCard data={data}/>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousal;

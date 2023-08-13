const CarousalCard = ({ data }) => {
  return (
    <div className="">
      <div className="h-60 min-w-full ">
        <img src={data?.img[0]} alt="images" />
      </div>
    </div>
  );
};

export default CarousalCard;

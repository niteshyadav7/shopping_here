import React from "react";

const CardShow = () => {
  return (
    <div className="mt-10 ml-10 mr-10">
      <div className="w-60 hover:scale-95 scroll-smooth cursor-pointer">
        <img className="rounded-3xl w-60 h-44 " src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="banner" />
        <div className="font-semibold text-lg">Nitehs</div>
        <div className="font-medium text-base mt-2">
          <img className="w-7 mb-1 mr-2   inline" src={""} alt="images" />
          Rating
        </div>
        <div className="font-light">about</div>
        <div className="font-light">Area</div>
      </div>
    </div>
  );
};

export default CardShow;

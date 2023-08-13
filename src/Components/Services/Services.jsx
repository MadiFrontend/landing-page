import React from "react";
import cardico1 from "../../assets/cardico1.png";
import cardico2 from "../../assets/cardico2.png";

function Services() {
  return (
    <div className="h-cardsHeight w-full  mt-16 flex items-center justify-between">
      <div className="">
        <h2 className="text-myPink text-xl font-semibold">SERVICES</h2>
        <p className="font-bold text-4xl mt-3">
          Our Top Value
          <br /> Categories For You
        </p>
      </div>
      <div className="flex items-center justify-between h-full w-7/12">
        <div className="flex flex-col items-center  h-5/6 justify-evenly px-8  hover:shadow-mainShadow hover:bg-white rounded-3xl cursor-pointer">
          <img src={cardico1} alt="" className="w-16 h-16" />
          <p className="font-bold text-3xl mt-3">Best Tour Guide</p>
          <p>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. <br />
            Repellendus iste impedit ut
          </p>
        </div>
        <div className="flex flex-col items-center h-5/6 justify-evenly px-8 rounded-3xl hover:shadow-mainShadow hover:bg-white cursor-pointer ">
          <img src={cardico2} alt="" className="w-16 h-16" />
          <p className="font-bold text-3xl mt-3">Easy Booking</p>
          <p>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. <br />
            Repellendus iste impedit ut
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

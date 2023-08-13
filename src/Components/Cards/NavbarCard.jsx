import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
function NabvarCard(props) {
  return (
    <div className=" mt-28 flex items-center justify-between">
      <div>
        <h2 className="text-myPink text-xl font-semibold">TOP DESTINATION</h2>
        <p className="font-bold text-4xl mt-3">Explore Top Destanation</p>
      </div>
      <div className="flex">
        <button
          onClick={props.scrl}
          className=" w-[50px] h-[50px] mr-10 flex items-center justify-center rounded-full hover:text-white hover:shadow-mainShadow hover:bg-btnColor onCl"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={props.scrr}
          className="w-[50px] h-[50px] rounded-full hover:bg-btnColor flex items-center justify-center hover:text-white hover:shadow-mainShadow"
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}

export default NabvarCard;

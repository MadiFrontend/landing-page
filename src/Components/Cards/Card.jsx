import React from "react";
import { AiFillStar } from "react-icons/ai";
import ca from "../../assets/cardPic.png";

function Card(props) {
  return (
    <div className="w-[320px] h-[530px] m-4 shadow-lg rounded-[10%]">
      <img src={ca} alt="" />
      <div className="h-[30%] flex flex-col justify-between mt-[1.5rem] mx-8">
        <div className="flex justify-between">
          <p className="font-bold text-xl">{props.title}</p>
          <p className=" text-myPink font-semibold text-2xl">${props.price}</p>
        </div>
        <p>{props.location}</p>
        <div className="flex items-center text-[#FF5722]">
          <p className="font-bold pr-2">{props.rate}</p>
          <AiFillStar />
        </div>
      </div>
    </div>
  );
}

export default Card;

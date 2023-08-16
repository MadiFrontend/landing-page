import group from "../../assets/group.png";
import OfferServicesCard from "./OfferServicesCard";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { RiCoupon3Fill } from "react-icons/ri";

function OfferServices() {
  const cardData = [
    {
      title: "we offer best services",
      ico: <HiLocationMarker />,
      para: "Lorem ipsum is a random text",
    },
    {
      title: "Schedule your trip",
      ico: <BsFillCalendar2Fill />,
      para: "Lorem ipsum is a random text",
    },
    {
      title: "Get discounted coupons",
      ico: <RiCoupon3Fill />,
      para: "Lorem ipsum is a random text",
    },
  ];

  return (
    <div className="mt-48 flex  ">
      <div className=" w-[50%] pb-[100px] pl-[140px] flex flex-col justify-between">
        <div>
          <div>
            <h2 className="text-myPink text-xl font-semibold">KEY FEATURES</h2>
            <p className="font-bold text-[2.5rem] mt-3">
              We offer best services
            </p>
          </div>
          <p className="text-gray-500 text-lg mt-14">
            Contrary to popular belief, Lorem Ipsum is not simply random
            <br /> text. It has roots in a piece of classical Latin literature
            <br /> from 45 BC.
          </p>
        </div>
        <div className="">
          <OfferServicesCard
            {...cardData[0]}
            className="bg-[#FF5722]"
          ></OfferServicesCard>
          <OfferServicesCard
            {...cardData[1]}
            className="bg-[#FACD49]"
          ></OfferServicesCard>
          <OfferServicesCard
            {...cardData[2]}
            className="bg-[#F85E9F]"
          ></OfferServicesCard>
        </div>
      </div>
      <div className="">
        <img src={group} alt="" />
      </div>
    </div>
  );
}

export default OfferServices;

import Navbar from "../Navbar/Navbar";
import HeaderPic from "../../assets/header.png";
import { PiBagFill } from "react-icons/pi";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "../Elements/Button";
function Header() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-between mt-20">
        <div className="mt-12">
          <button className="bg-white py-3 px-8 text-myPink rounded-3xl flex items-center font-bold text-xs shadow-2xl">
            Explore The World !
            <PiBagFill className="ml-2 text-xl" />
          </button>
          <h1 className="font-black text-6xl mt-8 leading-snug">
            Travel{" "}
            <mark className="bg-transparent text-myPink">
              Top <br /> Destination
            </mark>
            <br /> Of The World
          </h1>
          <p className="text-gray-600 font-light mt-5 text-lg">
            We always make our customer happy by providing
            <br /> as many choices as possible
          </p>
          <div className="flex mt-8 font-bold text-xs">
            <Button className="shadow-2xl">Get Started</Button>
            <Button className="ml-8 bg-transparent !text-gray-800 flex items-center border border-gray-300">
              <AiFillPlayCircle className="mr-2 text-xl text-btnColor" /> Watch
              Demo
            </Button>
          </div>
        </div>
        <img src={HeaderPic} alt="HeaderPic" className="w-3/5 " />
      </div>
    </div>
  );
}

export default Header;

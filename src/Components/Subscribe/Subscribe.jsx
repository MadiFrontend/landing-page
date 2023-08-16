import Button from "../Elements/Button";
import { MdEmail } from "react-icons/md";

function Subscribe() {
  return (
    <div className="h-[400px] mt-48 bg-pink-100 flex flex-col items-center justify-evenly rounded-2xl">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-myPink text-xl font-semibold">
          SUBSCRIBE TO OUR NEWS LETTER
        </h2>
        <p className="font-bold text-[2.5rem] mt-3">
          Prepare yourself & let's explore the
          <br /> beauty of world
        </p>
      </div>
      <div className="flex w-[80%] justify-center gap-3 ">
        <div className=" w-[60%] flex items-center bg-white rounded-2xl  p-5">
          <MdEmail className="text-2xl text-gray-600" />
          <input
            type="text"
            placeholder="Your Email"
            className="placeholder-gray-600 pl-2 outline-0"
          />
        </div>
        <Button className="w-[20%]">Subscribe</Button>
      </div>
    </div>
  );
}

export default Subscribe;

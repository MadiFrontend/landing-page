import girl from "../../assets/girl.png";

function Girl() {
  return (
    <div className="mt-48 flex justify-between w-[90%] ">
      <img src={girl} alt="" />
      <div className=" py-[20px] pl-[30px] flex flex-col justify-between ">
        <div>
          <h2 className="text-myPink text-xl font-semibold">TRAVEL POINT</h2>
          <p className="font-bold text-[2.5rem] mt-3">
            We Helping you find
            <br /> your dream location
          </p>
        </div>
        <p className="text-gray-500 text-lg">
          Contrary to popular belief, Lorem Ipsum is not
          <br /> simply random text. It has roots in a piece of <br />
          classical Latin literature from 45 BC.
        </p>
        <div className="grid grid-cols-2 justify-center gap-4">
          <div className="w-[180px] h-[130px] border border-gray-300 rounded-xl flex flex-col justify-center items-center gap-1">
            <h2 className="text-3xl font-bold text-myOrange">500+</h2>
            <p className="text-lg font-semibold">Holiday package</p>
          </div>
          <div className="w-[180px] h-[130px] border border-gray-300 rounded-xl flex flex-col justify-center items-center gap-1">
            <h2 className="text-3xl font-bold text-myOrange">100+</h2>
            <p className="text-lg font-semibold">Luxury Hotel</p>
          </div>
          <div className="w-[180px] h-[130px] border border-gray-300 rounded-xl flex flex-col justify-center items-center gap-1">
            <h2 className="text-3xl font-bold text-myOrange">7</h2>
            <p className="text-lg font-semibold">Premium Airlines </p>
          </div>
          <div className="w-[180px] h-[130px] border border-gray-300 rounded-xl flex flex-col justify-center items-center gap-1">
            <h2 className="text-3xl font-bold text-myOrange">2k+</h2>
            <p className="text-lg font-semibold">Happy Costumer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Girl;

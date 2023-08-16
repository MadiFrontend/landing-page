function OfferServicesCard(props) {
  return (
    <div className="flex w-[80%] py-5 pl-3 items-center rounded-2xl cursor-pointer hover:border">
      <div
        className={`w-[100px] h-[100px]  rounded-3xl flex justify-center items-center text-4xl text-white ${props.className}`}
      >
        {props.ico}
      </div>
      <div className="ml-[50px]">
        <h2 className="font-bold text-2xl">{props.title}</h2>
        <p className="text-gray-500">{props.para}</p>
      </div>
    </div>
  );
}

export default OfferServicesCard;

import Navbar from "../Navbar/Navbar";
import HeaderPic from "../../assets/header.png";
function Header() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-between mt-20">
        <div>
          <button className="bg-white py-3 px-8 text-myPink rounded-3xl">
            Explore The World!
          </button>
          <h1>
            Travel Top
            <br /> Destination
            <br /> Of The World
          </h1>
          <p>
            We always make our customer happy by providing
            <br /> as many choices as possible
          </p>
        </div>
        <img src={HeaderPic} alt="HeaderPic" className="w-3/5" />
      </div>
    </div>
  );
}

export default Header;

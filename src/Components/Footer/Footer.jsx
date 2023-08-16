import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
function MainFooter() {
  return (
    <div className="mt-48 mb-28 grid footerjoon">
      <div className="grid gap-8">
        <img src={logo} alt="logo" />
        <p className="text-gray-500">
          Contrary to popular belief,
          <br /> Lorem Ipsum is not simply
          <br /> random text. It has roots
          <br /> in a piece of classical Latin
          <br /> literature from 45 BC.
        </p>
        <div className="flex justify-between w-[50%] cursor-pointer">
          <div className="rounded-full p-4 bg-[#5D50C6] text-white text-lg">
            <FaFacebookF />
          </div>
          <div className="rounded-full p-4 bg-[#5D50C6] text-white text-lg">
            <BsTwitter />
          </div>
          <div className="rounded-full p-4 bg-[#5D50C6] text-white text-lg">
            <BsInstagram />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex h-full flex-col">
          <h2 className="font-bold text-lg">Company</h2>
          <ul className="py-3 text-gray-500 cursor-pointer">
            <li className="py-3 hover:text-black">About</li>
            <li className="py-3 hover:text-black">Career</li>
            <li className="py-3 hover:text-black">Mobile</li>
          </ul>
        </div>
        <div className="flex h-full flex-col">
          <h2 className="font-bold text-lg">Contact</h2>
          <ul className="py-3 text-gray-500 cursor-pointer">
            <li className="py-3 hover:text-black">Why Travelog?</li>
            <li className="py-3 hover:text-black">Partner with us</li>
            <li className="py-3 hover:text-black">FAQ's</li>
            <li className="py-3 hover:text-black">Blog</li>
          </ul>
        </div>
        <div className="flex h-full flex-col">
          <h2 className="font-bold text-lg">Meet Us</h2>
          <ul className="py-3 text-gray-500 cursor-pointer">
            <li className="py-3 hover:text-black">+00 98 1234 56789</li>
            <li className="py-3 hover:text-black">info@travelog.com</li>
            <li className="py-3 hover:text-black">
              205. R Street, New York
              <br />
              BD23200
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;

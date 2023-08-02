import logo from "../../assets/logo.png";
import Button from "../Elements/Button";

function Navbar() {
  return (
    <div className="flex justify-between items-center pt-5">
      <img src={logo} alt="" />
      <ul className="flex text-gray-500 font-semibold text-sm cursor-pointer">
        <li className="px-5 text-black ">Home</li>
        <li className="px-5 hover:text-black ">Discover</li>
        <li className="px-5 hover:text-black ">Speacal Deals</li>
        <li className="px-5 hover:text-black ">Contact</li>
      </ul>
      <div className="text-sm">
        <button className="px-5 ">Log In</button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

export default Navbar;

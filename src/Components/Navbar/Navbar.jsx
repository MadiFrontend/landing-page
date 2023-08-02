import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center pt-5">
      <img src={logo} alt="" />
      <ul className="flex text-gray-600 cursor-pointer">
        <li className="px-5 text-black ">Home</li>
        <li className="px-5 hover:text-black ">Discover</li>
        <li className="px-5 hover:text-black ">Speacal Deals</li>
        <li className="px-5 hover:text-black ">Contact</li>
      </ul>
      <div>
        <button className="px-5 ">Log In</button>
        <button className="px-5 py-2 bg-btnColor text-white rounded-2xl">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;

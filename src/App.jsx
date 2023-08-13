import "./App.css";
import Header from "./Components/Header/Header";
import PartnerLogos from "./Components/PartnerLogos/PartnerLogos";
import Services from "./Components/Services/Services";
import NavbarCard from "./Components/Cards/NavbarCard";
import Carousel from "./Components/Cards/Carousel";

function App() {
  return (
    <div className="bg-hero bg-white bg-opacity-50 bg-cover w-screen h-screen font-MyFont overflow-x-hidden ">
      <div className="w-4/5 my-0 mx-auto">
        <Header></Header>
        <PartnerLogos></PartnerLogos>
        <Services></Services>
        
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default App;

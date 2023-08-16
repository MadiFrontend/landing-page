import "./App.css";
import Header from "./Components/Header/Header";
import PartnerLogos from "./Components/PartnerLogos/PartnerLogos";
import Services from "./Components/Services/Services";
import Carousel from "./Components/Cards/Carousel";
import Girl from "./Components/Girl/Girl";
import OfferServices from "./Components/OfferServices/OfferServices";
import Subscribe from "./Components/Subscribe/Subscribe";
import MainFooter from "./Components/Footer/Footer";

function App() {
  return (
    <div className="bg-hero bg-white bg-opacity-50 bg-cover w-screen h-screen font-MyFont overflow-x-hidden ">
      <div className="w-4/5 my-0 mx-auto">
        <Header></Header>
        <PartnerLogos></PartnerLogos>
        <Services></Services>
        <Carousel></Carousel>
      </div>
      <Girl />
      <OfferServices></OfferServices>
      <div className="w-4/5 my-0 mx-auto">
        <Subscribe></Subscribe>
        <MainFooter></MainFooter>
      </div>
    </div>
  );
}

export default App;

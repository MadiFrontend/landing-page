import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";

function PartnerLogos() {
  return (
    <div className="flex justify-between items-center mt-16">
      <img src={partner1} alt="" />
      <img src={partner2} alt="" />
      <img src={partner3} alt="" />
      <img src={partner4} alt="" />
      <img src={partner5} alt="" />
    </div>
  );
}

export default PartnerLogos;

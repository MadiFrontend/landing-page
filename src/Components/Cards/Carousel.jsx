import Card from "./Card";
import NavbarCard from "./NavbarCard";

function Carousel(props) {
  const scrollLeft = () => {
    document.getElementById("element").scrollLeft -= 800;
  };
  const scrollRight = () => {
    document.getElementById("element").scrollLeft += 800;
  };

  const allCardsInfo = [
    {
      id: 1,
      title: `paradice beach
      bantayan island`,
      price: 550.16,
      location: "Rome, italy",
      rate: 6.5,
      image: "",
    },
    {
      id: 2,
      title: `mountain view
      above the cloud`,
      price: 150.99,
      location: "UAE",
      rate: 1.5,
      image: {},
    },
    {
      id: 3,
      title: `Ocion with full of 
      colors`,
      price: 20.99,
      location: "maldives",
      rate: 7.5,
      image: {},
    },
  ];
  return (
    <>
      <NavbarCard scrl={scrollLeft} scrr={scrollRight}></NavbarCard>
      <div
        id="element"
        className="mt-16 flex items-center justify-start overflow-x-auto relative scrollbar-hide scroll-smooth"
      >
        <div>
          <Card {...allCardsInfo[0]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[2]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[1]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[0]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[2]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[1]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[0]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[0]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[2]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[1]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[0]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[2]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[1]}></Card>
        </div>
        <div>
          <Card {...allCardsInfo[0]}></Card>
        </div>
      </div>
    </>
  );
}

export default Carousel;

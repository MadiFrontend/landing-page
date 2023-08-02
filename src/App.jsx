import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="bg-hero bg-white bg-opacity-50 bg-cover w-screen h-screen font-MyFont overflow-x-hidden ">
      <div className="w-4/5 my-0 mx-auto">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;

import Bill from "./components/Bill";
import Calculator from "./components/Calculator";
import People from "./components/People";
import Tip from "./components/Tip";

function App() {
  return (
    <div className="app">
      <header>
        <span>Spli</span>
        <span>tter</span>
      </header>
      <div className="wrapper">
        <div className="column-left">
          <Bill />
          <Tip />
          <People />
        </div>
        <div className="column-right">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;

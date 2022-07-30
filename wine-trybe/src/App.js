import Plans from "./components/Plans";
import Products from "./components/Products";
import Womens from "./components/Womens";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
        <Womens />
        <Plans />
      </header>
    </div>
  );
}

export default App;

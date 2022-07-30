import Plans from "./components/Plans";
import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Products />
        <Plans />
      </header>
    </div>
  );
}

export default App;

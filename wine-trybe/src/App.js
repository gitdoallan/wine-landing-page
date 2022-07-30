import Footer from "./components/Footer";
import Plans from "./components/Plans";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
        <Plans />
      </header>
      <Footer />
    </div>
  );
}

export default App;

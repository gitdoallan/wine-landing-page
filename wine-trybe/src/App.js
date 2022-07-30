import Footer from "./components/Footer";
import Plans from "./components/Plans";
import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Products />
        <h1> Testando 123 </h1>
        <Plans />
      </header>
      <Footer />
    </div>
  );
}

export default App;

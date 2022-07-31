import Footer from "./components/Footer";
import Plans from "./components/Plans";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Womens from "./components/Womens";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />        
        <Header />
        <Products />
        <Womens />
        <Plans />
      </header>
      <Footer />
    </div>
  );
}

export default App;

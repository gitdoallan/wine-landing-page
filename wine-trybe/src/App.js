import Plans from "./components/Plans";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />        
        <Plans />
      </header>
    </div>
  );
}

export default App;

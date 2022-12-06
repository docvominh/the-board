import './App.css';
import 'bulma/css/bulma.min.css';
import Stock from './components/stock/Stock'
import {getIndexes} from "./components/stock/StockData";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
      <Stock />
      </section>
    </div>
  );
}

export default App;

import './App.css';
import 'bulma/css/bulma.min.css';
import Stock from './components/stock/Stock'
import Rss from "./components/vnexpress/Rss";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
      {/*<Stock />*/}
      <Rss />
      </section>
    </div>
  );
}

export default App;

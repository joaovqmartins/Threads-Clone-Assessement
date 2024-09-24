import "./App.css";
import threads from "./assets/threads.png";
import layouts from "./assets/layouts.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <img src={threads} alt="Icon-Threads" className="Img-icon" />
          <p> Página inicial </p>
          <img src={layouts} alt="Icon-Layouts" className="Img-icon" />
        </nav>
      </header>
      //começo do main
      <main className="App-main">
        <div className="App-card">

        </div>
      </main>
      //começo do footer
      <footer className="App-footer">
        
      </footer>
    </div>
  );
}

export default App;

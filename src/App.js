import "./App.css";
import threads from "./assets/threads.png";
import layouts from "./assets/layouts.png";
import backarrow from "./assets/back-arrow.png";
import remove from "./assets/remove-button.png";
import removehover from "./assets/remove-button-hover.png";

import ReloadPage from "./components/ReloadPage"

function App() {
  return (
    <div className="App">
      {/* Começo do body */}
      <header className="App-header">
        <nav className="App-nav">
          <ReloadPage/>
          
          <p> Página inicial </p>
          <img src={layouts} alt="Icon-Layouts" className="Img-icon" />
        </nav>
      </header>

      {/* Começo do main */}
      <main className="App-main">
        <div className="App-card"></div>
      </main>

      {/* Começo do footer */}
      <footer className="App-footer">
        <img src={backarrow} alt="Icon-Arrow-back" className="Img-icon" />
        {/* <p className="p-footer">Rodapé</p> */}
      </footer>
    </div>
  );
}

export default App;

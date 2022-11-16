import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./views/Home";
import ToDos from "./views/ToDos";
import Header from "./components/Header";
import ToDosProvider from "./context/Todos";

// Die Komponente Routes zeigt nur maximal eine Komponente aus Route (Home oder ToDos) an.
// Das heißt: Die andere wird nicht gemounted, sie wird quasi "vergessen".
// Rufen wir den entsprechenden Pfad wieder auf, wird die vergessene Komponente neu erzeugt.
// Die neue Komponente weiß nichts von ihrer alten Version und fängt somit ganz von vorne an.
// Daher würde ein useEffect trotz leerer Dependencies bei einem Seitenwechsel neu ausgeführt werden.
// Ebenso starten alle ihre States wieder beim Initial Value.

// Wir platzieren unseren Context daher außerhalb von Routes.
// So stellen wir sicher, dass er permanent gemounted bleibt, egal auf welcher Seite wir uns gerade befinden.
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <ToDosProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ToDos />} />
        </Routes>
      </ToDosProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;

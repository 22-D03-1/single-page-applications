import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './App.css';
import Main from "./views/Main";
import Products from "./views/Products";

// Bei einer Single Page Application haben wir nur eine HTML-Datei,
// also nur eine Seite, die angezeigt wird.
// Mit JavaScript entscheiden wir dann, was auf der Seite alles angezeigt werden soll.
// Wollen wir mehrere Seiten einrichten, müssen wir das klassische Verhalten mehrerer HTML-Dateien selbstständig simulieren.
// Wir können dazu per JavaScript auf den aktuellen Pfad zugreifen.
// Mit diesem wäre es uns möglich, bestimmte Komponenten zu rendern.

// console.log(window.location);
// const path = window.location.pathname;

function App() {
  return (
    <div className="App">
      {/* Das selbstgebaute Routing prüft auf den aktuellen Pfad
      und zeigt nur die passende Komponente an.
      Diese Komponenten bezeichnen wir als Views oder Pages. */}
      {/*
        {path === "/products" && <Products />}
        {path === "/" && <Main />} */}

      {/* Mit dem Modul react-router-dom haben wir viel mehr Möglichkeiten
      als unsere eigene kleine Lösung.
      Das Modul übernimmt bspw. auch das Verlinken der Seiten,
      sodass kein Page Reload stattfindet. */}
      {/* Es gibt diverse Router-Arten,
      wobei die zwei wichtigsten für uns der BrowserRouter und der HashRouter sind.
      Beim BrowserRouter wird der Pfad "wie gewohnt" verwendet,
      um die richtige View zu rendern.
      Der HashRouter nutzt das Prinzip der Anchors,
      wodurch auch dem Browser klar ist, dass wir uns auf einer Seite befinden. */}
      <BrowserRouter>
        <header>
          {/* Diese Links rendern einen a-Tag,
          hindern den Browser aber daran, einen Page Reload durchzuführen. */}
          <Link to="/">Main</Link>&nbsp;|&nbsp;
          <Link to="/products">Products</Link>
        </header>

        {/* Die Komponente Routes beinhaltet alle definierten Routen.
        Hier geben wir die Pfade mit den dazugehörigen Views an.
        Routese sorgt dafür, dass nur eine einzige View angezeigt wird. */}
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Main />} />
        </Routes>

        {/* Sowohl header als auch footer werden in diesem Fall permanent angezeigt.
        So lässt sich bspw. eine Hauptnavigation einrichten,
        die nicht auf jeder View wiederholt werden muss. */}
        <footer>
          Footer
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

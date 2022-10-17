import logo from './logo.svg';
import './App.css';


// Bestimmte Begriffe sind in JavaScript vorbelegt:

// function
// const
// let
// var
// if
// while
// for
// class

// ...und dürfen für nichts anderes verwendet werden.
// Daher sehen wir eine Warnung, sollten wir bspw. "class" in JSX verwenden.
// Stattdessen müssen wir auf "className" ausweichen.
// Keine Sorge: Sollten wir das einmal vergessen,
// wird die App trotzdem funktionieren.
// Durch die Warnung werden wir aber daran erinnert,
// die Stellen entsprechend auszubessern.

function App() {
  // React lässt sich in diverse Komponenten aufteilen.
  // Jede Komponente kann als Funktion dargestellt werden.
  // In der Funktion wird über das return Statement bestimmt,
  // was im Browser ausgegeben werden soll.
  const headline = "React";
  const text = "Lorem ipsum dolor sit amet.";

  // Hierfür verwenden wir JSX, welches uns HTML in JS schreiben lässt.
  const headline2 = <h2 className="title">Headline</h2>;

  // Um die oben erstellten Variablen in JSX ausgeben (rendern) zu können,
  // benutzen wir geschweifte Klammern: {headline}, {headline2}, {text}

  // Ganz wichtig: Jeder Tag muss zwingend geschlossen werden.
  // Anders als in HTML5 müssen somit auch <img>, <br> usw. geschlossen werden.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1 className="title">{headline}</h1>
        {headline2}
        <br />
        <label htmlFor="email">Label</label>
        <input id="email" type="number" />
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;

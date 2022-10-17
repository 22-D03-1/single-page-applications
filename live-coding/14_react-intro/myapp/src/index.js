import ReactDOM from 'react-dom/client';
// Durch den Import von CSS-Dateien lassen sich die Styles in kleine Blöcke aufteilen.
// Jede Komponente kann somit ihre Styles in einer eigenen Datei halten.
// Wenn webpack auf diese Importe stößt, werden die einzelnen Dateien zusammengefasst und somit die Ladezeit optimiert.
import './index.css';

// Unsere Komponente "App" importieren wir hier, um sie anschließend verwenden zu können.
import App from './App';

// Damit React funktioniert, müssen wir zuerst einen Einstiegspunkt definieren.
// Hierzu finden wir ein konkretes Element in der index.html (siehe public/index.html)
// und geben es an ReactDOM.createRoot() weiter.
// Wir erhalten eine Instanz von ReactDOMRoot, welches React "aktiviert"
const rootDOMElement = document.getElementById('root');
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

console.log({ rootDOMElement, rootElement });

// Die Methode render() führt dann letztendlich unseren React-Code aus
rootElement.render(
  <App />
);

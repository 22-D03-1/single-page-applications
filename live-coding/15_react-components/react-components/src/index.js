import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Wir binden unsere eigene Komponente ein, indem wir sie zuerst importieren
// und dann in JSX wie einen HTML-Tag verwenden.
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Navigation />
    <App />
  </StrictMode>
);

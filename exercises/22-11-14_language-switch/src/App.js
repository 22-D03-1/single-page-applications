import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Language from './context/Language';

function App() {
  return (
    <div className="App">
      <Language>
        <Header />
        <Content />
      </Language>
    </div>
  );
}

export default App;

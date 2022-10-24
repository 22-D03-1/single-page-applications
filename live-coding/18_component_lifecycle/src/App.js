import { useState } from "react";

import './App.css';
import Button from "./Button";
import Counter from "./Counter";

function App() {
  // Die Komponenten werden mit jeder Änderung neu gerendert,
  // die Funktion wird also neu ausgeführt.
  // Daher sehen wir den folgenden Log mit jedem Update in der Konsole:
  console.log("render App");
  const [counter, setCounter] = useState(0); // 0, 1, 2, 3, 4, 5,...
  const [testProp, setTestProp] = useState(0);

  const handleClick = (event) => {
    const newCounter = counter + 1;
    // React sammelt Änderungen, um nicht für jede Kleinigkeit ein Rerendering anzustoßen.
    console.log("before", counter, testProp);

    // Obwohl hier also zwei Änderungen stattfinden (beide States werden geändert)...
    if (newCounter > 4) setTestProp(counter * 2);
    setCounter(newCounter);

    // ...bleiben die Werte zunächst unverändert.
    console.log("after", counter, testProp);
    // Erst danach führt React die Änderungen tatsächlich aus und rendert die Komponente neu.
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Component propName={propValue} /> */}
        {counter < 10 && <Counter counter={counter} testProp={testProp} />}
        <Button handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;

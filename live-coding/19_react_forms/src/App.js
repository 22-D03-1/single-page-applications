import { useState } from "react";
import './App.css';

function App() {
  // Richten wir Formulare in React ein, verwenden wir States,
  // um die Werte in den Eingabefeldern festzuhalten.
  // In diesem Fall nutzen wir einen State, der alle Eingaben in einem Objekt enthält.
  // Alternativ können wir für jedes Eingabefeld einen eigenen State einrichten (siehe unten).
  const [values, setValues] = useState({
    name: "Test",
    email: "test@test.de",
  });

  // Beim Ausfüllen des Formulars werden Change-Events ausgelöst.
  // Wir greifen diese Events mit einem Handler ab.
  // Um auf die Werte zugreifen zu können, nutzen wir das Event Target,
  // welches auf unseren aktuellen Input zeigt.
  // So können wir den Namen des Feldes und den aktuellen Wert auslesen.
  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // Damit unsere Eingabefelder nicht nur die Aktualisierungen an React melden,
  // sondern auch den angezeigten Wert durch React mitgeteilt bekommen,
  // setzen wir die jeweiligen values auf den State.
  // Dadurch entsteht ein sog. Two Way Binding. Die Inputs werden zu Controlled Components,
  // da React die volle Kontrolle erhält.
  return (
    <div className="App">
      <header className="App-header">
        <h1>Forms</h1>
        <input type="text" placeholder="Name" onChange={handleInput} value={values.name} name="name" />
        <input type="text" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <p>{values.name}, Deine E-Mail-Adresse lautet {values.email}</p>
      </header>
    </div>
  );


//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleChangeName = (event) => {
//     setName(event.target.value);
//   };
//   const handleChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Forms</h1>
//         <input type="text" placeholder="Name" onChange={handleChangeName} value={name} />
//         <input type="text" placeholder="E-Mail-Adresse" onChange={handleChangeEmail} value={email} />
//         <p>{name}, Deine E-Mail-Adresse lautet {email}</p>
//         <button onClick={handleAddAt}>@</button>
//         <button onClick={handleReset}>Reset</button>
//       </header>
//     </div>
//   );
}

export default App;

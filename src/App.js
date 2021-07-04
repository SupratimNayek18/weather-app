import "./App.css";
import { useState, useEffect } from "react";
import Weather from "./Weather/Weather";

function App() {
  var [state, setState] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/find?q=kolkata&units=metric&appid=907c99e1a96b5d38487d8d9c19b413fc"
    )
      .then((doc) => {
        return doc.json();
      })
      .then((doc) => {
        setState(doc);
      });
  }, []);

  return (
    <div className="App">
      <div className="logo">Weather App</div>
      <Weather state={state} />
    </div>
  );
}

export default App;

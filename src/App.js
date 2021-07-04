import "./App.css";
import { useState, useEffect } from "react";
import Weather from "./Weather/Weather";

function App() {
  var [state, setState] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/find?q=kolkata&units=metric&appid={Your OpenWeatherMap Token}"
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

import React from "react";
import "./Weather.css";
import Flip from "react-reveal/Flip";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function Weather({ state }) {
  if (state) {
    var imgUrl =
      "https://openweathermap.org/img/w/" +
      state.list[0].weather[0].icon +
      ".png";
  } else {
    imgUrl = "";
  }

  return (
    <Flip top>
      <div>
        <div className="welcome">
          {state ? (
            <>
              <LightSpeed left>
                <h1>
                  {state.list[0].main.temp}
                  <sup> o</sup>C
                </h1>
              </LightSpeed>
              <LightSpeed right>
                <p>Feels Like {state.list[0].main.feels_like}</p>
              </LightSpeed>
              <Slide bottom>
                <img src={imgUrl} alt="haze" />
              </Slide>
              <Fade>
                <p>Min Temp: {state.list[0].main.temp_min}</p>
                <p>Max Temp: {state.list[0].main.temp_max}</p>
                <p>Humidity: {state.list[0].main.humidity}%</p>
              </Fade>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Flip>
  );
}

export default Weather;

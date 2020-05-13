import React from "react";
import "./styles.css";

export default function App() {

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <div className="App">
      <h1>Good {`${timeOfDay}`}!</h1>
    </div>
  );
}

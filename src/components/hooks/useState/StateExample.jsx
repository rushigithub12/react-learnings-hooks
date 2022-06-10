import React, { useState } from "react";

function StateExample() {
  const [car, setCar] = useState({
    color: "blue",
    model: "Ford",
    year: 1977,
  });

  const updateCar = () => {
    setCar((prevState) => {
      return {
        ...prevState,
        color: "red",
      };
    });
  };
  return (
    <div>
      I have {car.model} of color {car.color} since {car.year}
      <button onClick={updateCar}>Click</button>
    </div>
  );
}

export default StateExample;

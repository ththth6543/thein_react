import React from "react";
// import Car from "./Car";
import Car2 from "./Car2";

let x = 2002;

export default function Garage() {
  return (
    <div>
      <Car2 color="red" brand="kia" model="k5" year={1999} />
      <Car2 color="blue" brand="bmw" model="m5" year={1998} />
      <Car2 color="black" brand="현대" model="쏘나타" year={x + 5} />
    </div>
  );
}

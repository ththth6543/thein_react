import React from "react";
import "./section.css";

export default function Car1(props) {
  return (
    <div>
      <h2>
        <span className={props.color}>{props.color} </span>차야
      </h2>
    </div>
  );
}

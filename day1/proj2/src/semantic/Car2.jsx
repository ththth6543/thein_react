import React from "react";

export default function Car2(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.color, color: "white" }}>
        나는 {props.year}에 출고 / {props.color} 색상 / 브랜드는 {props.brand} /
        모델은 {props.model}
      </h2>
    </div>
  );
}

import React from "react";

const data = [1, 2, 3, 4, 5];

export default function MyList() {
  return (
    <>
      <hr />
      <h2>MyList</h2>
      <ul>
        {data.map((number, index) => (
          <li key={index}>ListItem {number}</li>
        ))}
      </ul>
    </>
  );
}

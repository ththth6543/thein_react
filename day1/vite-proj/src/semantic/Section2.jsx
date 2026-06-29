import React from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export default function Section2() {
  const listItems = products.map((prod) => <li key={prod.id}>{prod.title}</li>);
  return (
    <div>
      <hr />
      <ul>{listItems}</ul>
      <hr />
    </div>
  );
}

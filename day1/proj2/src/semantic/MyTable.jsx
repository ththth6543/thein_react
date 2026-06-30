import React from "react";

const data = [
  { id: 1, brand: "Ford", model: "Mustang" },
  { id: 2, brand: "VW", model: "Beetle" },
  { id: 3, brand: "Tesla", model: "Model S" },
];

export default function MyTable() {
  return (
    <>
      <hr />
      <h2>MyTable</h2>
      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.brand}</td> <td>{item.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </>
  );
}

import React from "react";

export default function MyButton({ count, onClick }) {
    
  return (
    <div>
      <button onClick={onClick}>클릭 {count}번</button>
    </div>
  );
}

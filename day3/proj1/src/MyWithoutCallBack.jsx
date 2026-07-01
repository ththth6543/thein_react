import React from "react";
import { useState } from "react";

const Button = React.memo(({ onClick, text }) => {
  alert(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

export default function MyCallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    setCount1(count1 + 1);
  };
  const handleCount2 = () => {
    setCount2(count2 + 1);
  };

  alert("Parent rendered");
  return (
    <div>
      <h1>My Without Callback</h1>
      <h2>Without useCallback: </h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>

      <Button onClick={handleCount1} text="Button1" />
      <Button onClick={handleCount2} text="Button2" />
    </div>
  );
}

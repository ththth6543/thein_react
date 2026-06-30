import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    });
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById("root")).render(<Timer />);

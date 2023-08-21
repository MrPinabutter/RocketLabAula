import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const increment = () => {
    setCount((old) => old + 1);
    setTotal((old) => old + 1);
  };

  const decrement = () => {
    setCount((old) => old - 1);
    setTotal((old) => old + 1);
  };

  return { count, increment, decrement, total };
};

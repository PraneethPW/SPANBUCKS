import { useEffect, useState } from "react";

export default function useCountUp(endValue: number, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const increment = endValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [endValue, startCounting]);

  return count;
}

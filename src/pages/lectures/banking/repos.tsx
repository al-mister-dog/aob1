import { useEffect, useState } from "react";

export default function Repos() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 15000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [count]);

  function skipInterval() {
    setCount(count + 1);
    clearInterval(intervalId);
  }

  function pauseInterval() {
    clearInterval(intervalId);
  }

  function resetInterval() {
    setCount(0);
  }

  return (
    <div>
      <p>
        This component refreshes every 15 seconds. The current count is {count}.
      </p>
      <button onClick={skipInterval}>Skip timer</button>
      <button onClick={pauseInterval}>Pause timer</button>
      <button onClick={resetInterval}>Reset timer</button>
    </div>
  );
}

import React, { useState } from "react";
import styles from "@/styles/Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Count:{}
        {count < 0 ? <span className={styles.minus}>{count}</span> : count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

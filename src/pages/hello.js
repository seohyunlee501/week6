import React from "react";
import World from "./world";

export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="라떼" />!
      </h1>

      <img src="cat.jpg" alt="cat" />
    </>
  );
}

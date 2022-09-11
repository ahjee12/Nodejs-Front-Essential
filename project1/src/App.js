import React, { useState, useEffect } from "react";

function App() {
  const [second, setSecond] = useState(0);
  // mount: the moment when the Component is inserted into the DOM
  setInterval(() => {
    setSecond(second + 1);
  }, 1000);

  return (
    <div>
      <p>{second}초</p>
    </div>
  );
}

export default App;

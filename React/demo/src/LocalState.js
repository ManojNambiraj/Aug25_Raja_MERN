import React, { useState } from "react";

function LocalState() {

    const [state, setState] = useState(0)
    const [color, setColor] = useState("White")

    const handleLike = () => {
      setState(state + 1);
      setColor("lightGreen") 
    };

    const handleDislike = () => {
        setState(state - 1)
        setColor("crimson")
    }

  return (
    <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: color
    }}>
      <h1>{state}</h1>

      <button onClick={handleLike}>Like 👍</button>
      <button onClick={handleDislike}>Dislike 👎</button>
    </div>
  );
}

export default LocalState;